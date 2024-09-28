<style>
    

    main{
        height: 100vh;
    }
    .fade-in {
        animation: fadeIn ease 3s;
    }
    .fade-out{
        animation: fadeOut ease 3s;
    }
    .appear{
        animation: appear ease 3s;
    }

    @keyframes appear {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @keyframes fadeOut {
        0% {opacity:1;}
        50% {opacity:1;}
        100% {opacity:0;}
    }
    .text-appear-animate{
        animation: textAppear ease-in-out 0.4s;
    }
    .line-appear-animate{
        animation: lineAppear ease-in-out 2s;
    }

    @keyframes lineAppear {
        0% {
            opacity:1;
            height: 0;
            width: 1px;
        }
        60%{
            height: 30vh;
        }
        100% {
            opacity:1;
            width: 1px;
            height: 100vh;
        }
    }
    @keyframes textAppear {
        0% {
            opacity:1;
            width: 0;
        }
        100% {
            opacity:1;
            width: 100%;
        }
    }
    .gradient{
        background: linear-gradient(#1F1F1F 0%, #3C3939 100%);
    }
    @keyframes fadeIn {
        0% {opacity:0;}
        15% {opacity:0;}
        100% {opacity:1;}
    }

    .dropshadow{
        text-shadow: 24px 27px rgba(0,0,0,0.25);
    }
</style>

<script lang="ts">
  import { projects } from "$lib/data";
import { onMount } from "svelte";
    let heroSection:HTMLElement;
    let descriptionSection:HTMLElement;
    let text:String="AMEZ";
    onMount(() => {
        window.innerWidth<=768?text="AMEZAN":text="AMEZ";

        window.addEventListener('scroll', (e) => {
            heroSection.style.filter = `brightness(${(heroSection.getBoundingClientRect().bottom) / window.innerHeight })`;
            descriptionSection.style.filter = `brightness(${((descriptionSection.getBoundingClientRect().top < 0?(descriptionSection.getBoundingClientRect().bottom):(window.innerHeight-descriptionSection.getBoundingClientRect().top))) / window.innerHeight})`
        })
    })

</script>

<section class="overflow-hidden">
<main class="relative" bind:this={heroSection}>
    <div id="hero"  class="bg-primary h-screen w-screen md:grid md:place-items-center overflow-hidden">
        <div style="user-select: none;" class="text-text overflow-hidden  dropshadow font-black mt-12 md:mt-0 text-[160px] rotate-90 md:rotate-0 md:text-[250px] lg:text-[450px]">
           {text}
        </div>
        <span class="absolute line-appear-animate top-1/2 left-1/2 text-text dropshadow -translate-x-1/2 -translate-y-1/2 h-screen w-[1px] bg-[#3e3e3e]">

        </span>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
            <h1 class="text-xl md:text-4xl bg-white text-appear-animate text-text w-max text-truncate whitespace-nowrap p-4 px-10 text-text tracking-widest font-bold roboto">Amezan Adhikari</h1>
            <p class="font-medium text-white md:text-lg mt-4 text-center fade-in">Front End Developer</p>
        </div>
    </div>
    <div class="absolute bottom-10 fade-in left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="flex justify-center items-center flex-col gap-4">
           
            <p class="font-medium text-white mt-4 text-center text-sm">View More</p>
            <a href="#description"><span class="h-[50px] w-[50px] cursor-pointer  hover:bg-opacity-60 flex justify-center items-center rounded-full bg-[#00D4A1]"><img src="/icons/downarrow.svg" alt="view more" class=""></span></a>
        </div>
    </div>
</main>

<div class="bg-primary md:h-screen  p-5 md:px-40 lg:px-64" id="description" bind:this={descriptionSection}>
    <div id="description" class="gradient leading-[150%] text-white p-6 md:p-16 md:px-20 rounded-[26px] flex flex-col gap-7 font-medium text-sm">
        <p>I am Amezan Adhikari,</p>
        <p>
            A passionate web developer, designer, and
            simulation enthusiast who thrives on bringing digital ideas to life.
        </p>
        <p>
            As a freelancer, I skillfully combine technology and design to create sleek, user-friendly experiences.
            Constantly exploring new possibilities, I love crafting innovative solutions that stand out.
        </p>
        <p class="leading-[150%]">
            I specialize in creating seamless digital experiences, focusing on both functionality and visual appeal.
             My work is characterized by attention to detail,
             and I enjoy tackling complex challenges,
             always seeking to push the boundaries of what&apos;s possible in web design and development.
        </p>
    </div>

    <div id="education" class="my-16 mx-4">
        <h1 class="text-sm md:text-lg font-medium text-[#A2A2A2] mb-10">Education : </h1>
        <div class="flex flex-col md:flex-row gap-10 items-center">
            <div class="w-[300px] md:w-[300px] gradient border-2 border-[#5D5D5D] p-4 rounded-[13px] ">
                <div class="flex items-center md:gap-10 gap-7">
                    <img src="/icons/hat.svg" alt="education" class="w-16">
                    <div class="text-white">
                        <h1 class="font-bold text-sm md:text-md">Tribhuwan University</h1>
                        <h2 class="font-medium text-[13px] md:text-xs text-[#D4D4D4]">Bachelor of Science | CSIT</h2>
                    </div>
                </div>
                <div>
                    <p class="text-white font-medium text-xs leading-[150%] text-[#999999]">
                        I am currently perusing my bachelors degree in Computer Science at Tribhuwan University 
                    </p>
                </div>
            </div>

            <div class="w-[300px] md:w-[300px] gradient border-2 border-[#5D5D5D] p-4 rounded-[13px] ">
                <div class="flex items-center justify-between">
                    <img src="/icons/hat.svg" alt="education" class="w-16">
                    <div class="text-white">
                        <h1 class="font-bold text-sm md:text-md">Kathmandu Model College</h1>
                        <h2 class="font-medium text-[13px] text-right md:text-xs text-[#D4D4D4]">+2 science</h2>
                    </div>
                </div>
                <div>
                    <p class="text-white font-medium text-xs leading-[150%] text-[#999999]">
                        I completed my +2 degree in science from KMC bagbazar, graduating with Distinction.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="projects" class="bg-primary p-5 md:px-40 lg:px-64">
    <h1 class="text-sm md:text-lg font-medium text-[#A2A2A2] mb-10">Projects : </h1>
    <div class="flex flex-col md:flex-row flex-wrap justify-center gap-10 items-center">


        {#each projects.data as project}
        <div class="max-w-[350px] gradient border-2 border-[#5D5D5D] overflow-hidden rounded-[13px] ">
           
            <div>
                <img src={project.image} alt="project 1 interactive nodes">
            </div>

            <div class="border-t-2 border-[#5D5D5D] px-4 pb-1">  
            <h1 class="font-medium text-center text-sm md:text-md text-white my-5">{project.name}</h1>
           
            
                <p class=" font-medium leading-[150%] text-[#999999] text-xs">
                    {project.description}
                </p>
            </div>
            <div class="text-right px-4 pb-4">
                <a href={project.link} class="text-[#00D4A1] font-medium text-sm ">View</a>
            </div>
        </div>

        {/each}
    </div>
</div>
<div class="py-6 text-center bg-primary text-white">
    thank you

</div>
</section>