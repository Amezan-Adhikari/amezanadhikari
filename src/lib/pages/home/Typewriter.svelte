<script lang="ts">
    export let sentences:string[] = [];
    export let typingSpeed = 100; // Speed for typing in milliseconds
    export let erasingSpeed = 50; // Speed for erasing in milliseconds
    export let pauseBetweenSentences = 1000; // Pause before starting to type the next sentence

    let displayedText = "";
    let sentenceIndex = 0;
    let isErasing = false;

    const type = () => {
        if (sentenceIndex < sentences.length) {
            const currentSentence = sentences[sentenceIndex];
            if (!isErasing) {
                if (displayedText.length < currentSentence.length) {
                    displayedText += currentSentence.charAt(displayedText.length);
                    setTimeout(type, typingSpeed);
                } else {
                    isErasing = true;
                    setTimeout(erase, pauseBetweenSentences);
                }
            }
        }
    };

    const erase = () => {
        if (isErasing) {
            if (displayedText.length > 0) {
                displayedText = displayedText.slice(0, -1);
                setTimeout(erase, erasingSpeed);
            } else {
                isErasing = false;
                sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence
                setTimeout(type, typingSpeed);
            }
        }
    };

    // Start typing when the component mounts
    import { onMount } from 'svelte';
    onMount(() => {
        type();
    });
</script>

<style>
    .typewriter {
        white-space: nowrap; /* Prevent line breaks */
        overflow: hidden; /* Hide overflow */
        border-right: 10px solid; /* Cursor effect */
        animation: blink 0.75s step-end infinite; /* Blinking cursor */
    }

    @keyframes blink {
        50% {
            border-color: transparent; /* Cursor blink effect */
        }
    }
</style>

<div class="typewriter">
    {displayedText}
</div>
