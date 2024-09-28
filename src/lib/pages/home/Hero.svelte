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
  import { onMount } from "svelte";


    let text:String="AMEZ";
    onMount(() => {
        window.innerWidth<=768?text="AMEZAN":text="AMEZ";
    })

</script>

<main class="relative">
    <div id="hero"  class="bg-primary h-screen w-screen md:grid md:place-items-center overflow-hidden">
        <div style="user-select: none;" class="text-text overflow-hidden  dropshadow font-black mt-12 md:mt-0 text-[160px] rotate-90 md:rotate-0 md:text-[250px] lg:text-[450px]">
           {text}
        </div>
        <span class="absolute line-appear-animate top-1/2 left-1/2 text-text dropshadow -translate-x-1/2 -translate-y-1/2 h-screen w-[1px] bg-[#3e3e3e]">

        </span>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
            <h1 class="text-xl md:text-4xl bg-white text-appear-animate text-text w-max text-truncate whitespace-nowrap p-4 px-6 md:p-3 md:px-6 text-text tracking-widest font-bold roboto">Amezan Adhikari</h1>
            <p class="font-medium text-white md:text-lg mt-4 text-center fade-in">Front End Developer</p>
        </div>
    </div>
    <div class="absolute bottom-10 fade-in left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="flex justify-center items-center flex-col gap-4">
           
            <p class="font-medium text-white mt-4 text-center text-sm">View More</p>
            <span class="h-[50px] w-[50px] cursor-pointer hover:bg-opacity-60 flex justify-center items-center rounded-full bg-[#00D4A1]"><img src="/icons/downarrow.svg" alt="view more" class=""></span>
        </div>
    </div>
</main>