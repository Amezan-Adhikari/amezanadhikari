<script lang="ts">
    //@ts-nocheck
    import { onMount, onDestroy } from "svelte";

    let canvas;
    let ctx;
    
    const state = {
        X: 400,
        Y: 400
    };

    let nodes = [];

    function repel(nodes) {
        if (!nodes) return;
        let radius = 50;

        nodes.forEach(node => {
            let distance = (Math.sqrt((Math.pow((node.positionX - state.X), 2) + (Math.pow((node.positionY - state.Y), 2)))));
            let angle = Math.atan2(node.positionY - state.Y, node.positionX - state.X);
            if (distance < radius) {
                node.velocityX = Math.cos(angle);
                node.velocityY = Math.sin(angle);

                node.positionX = state.X + radius * Math.cos(angle);
                node.positionY = state.Y + radius * Math.sin(angle);
            }
        });
    }

    function renderConnectingLine(nodes, node, ctx) {
        nodes.forEach(n => {
            let distance = (Math.sqrt((Math.pow((n.positionX - node.positionX), 2) + (Math.pow((n.positionY - node.positionY), 2)))));
            if (distance > 150) return;
            let opacity = (150 - distance) / 150;
            ctx.strokeStyle = `rgba(105 192, 203,${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node.positionX, node.positionY);
            ctx.lineTo(n.positionX, n.positionY);
            ctx.stroke();
        });
    }

    function render(node, ctx) {
        ctx.fillStyle = node.color;

        ctx.beginPath();
        ctx.arc(node.positionX, node.positionY, node.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    class Node {
        positionX;
        positionY;
        radius;
        velocityX;
        velocityY;
        color;

        constructor(x, y, r, dx, dy, color) {
            this.positionX = x;
            this.positionY = y;
            this.radius = r;
            this.velocityX = dx;
            this.velocityY = dy;
            this.color = color;
        }

        update(canvas) {
            this.positionX = this.positionX + this.velocityX;
            this.positionY = this.positionY + this.velocityY;

            if ((this.positionX + this.radius) > canvas.width) {
                this.velocityX = -this.velocityX;
                this.positionX = canvas.width - this.radius;
            }
            if ((this.positionX - this.radius) < 0) {
                this.velocityX = -this.velocityX;
                this.positionX = this.radius;
            }

            if ((this.positionY + this.radius) > canvas.height) {
                this.velocityY = -this.velocityY;
                this.positionY = canvas.height - this.radius;
            }
            if ((this.positionY - this.radius) < 0) {
                this.velocityY = -this.velocityY;
                this.positionY = this.radius;
            }
        }
    }

    function mouseMove(e) {
        state.X = Math.round(e.clientX);
        state.Y = Math.round(e.clientY);
    }

    function animation(timestamp) {
        let deltaTime = (timestamp - prevTimeStamp) / 1000;
        prevTimeStamp = timestamp;

        if (deltaTime <= frameTime) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            nodes.forEach(node => {
                node.update(canvas);
                renderConnectingLine(nodes, node, ctx);
                render(node, ctx);
            });
            repel(nodes);
        }

        requestAnimationFrame(animation);
    }

    let prevTimeStamp = 0;
    const FPS = 60;
    const frameTime = 1000 / FPS;

    function execute() {
        // Initialize nodes array
        if(canvas.width<500){
            nodes = Array(15).fill().map(() => new Node(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            Math.floor(Math.random() * 4) + 4,
            parseFloat(Math.random().toFixed(2)) - 0.5,
            parseFloat(Math.random().toFixed(2)) - 0.5,
            "#23353D"
        ));
        }
        else{
            nodes = Array(50).fill().map(() => new Node(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            Math.floor(Math.random() * 4) + 4,
            parseFloat(Math.random().toFixed(2)) - 0.5,
            parseFloat(Math.random().toFixed(2)) - 0.5,
            "#23353D"
        ));
        }
        
        // Start animation
        animation();
    }

    // Svelte component lifecycle hook for when component mounts
    onMount(() => {
        // Set up canvas context
        ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        execute();

        // Add event listeners
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("resize", onResize);
        // Clean up event listeners on component destroy
        onDestroy(() => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("touchmove", onTouchMove);
        });
    });

    function onResize(e){
        canvas.height = e.target.outerHeight;
        canvas.width = e.target.outerWidth;
    }
    function onTouchMove(e) {
        let pos = {
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
        };
        mouseMove(pos);
    }
</script>

<style>
    canvas {
        background-color: #14191D;
    }
</style>

<canvas bind:this={canvas}></canvas>
