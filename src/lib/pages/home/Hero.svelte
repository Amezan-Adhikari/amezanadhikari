<style>
    

    main{
        height: 100vh;
    }
    .fade-in {
        animation: fadeIn ease 4s;
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

    @keyframes fadeIn {
        0% {opacity:0;}
        15% {opacity:0;}
        100% {opacity:1;}
    }

</style>

<script>
  import { education, skills } from "$lib/data";
  import Typewriter from "./Typewriter.svelte";

    

    let hasTimeSpanExpired = false;
    setTimeout(() => {
        hasTimeSpanExpired = true;
    },2000)

    let revelTime = false;
    setTimeout(() => {
        revelTime = true;
    },2700)


    const sentences = [
        "Design",
        "Develop",
        "Learn",
    ];

</script>

<main>
    <div class="font-bold p-4 md:p-10 relative h-full w-full">
        <h1 class=" absolute transition-all duration-700 ease-in-out {revelTime?"hidden":""} {hasTimeSpanExpired ? 'top-4 left-1/2 md:top-10 md:left-10 -translate-x-1/2 md:translate-x-0 translate-y-0 text-3xl md:text-4xl fade-in' : 'text-6xl md:text-8xl fade-out  top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2'}"> <span class="{hasTimeSpanExpired?'hidden':'text-lg font-medium'}"> I am <br> </span> Amezan {#if !hasTimeSpanExpired}<br>{/if} Adhikari </h1>
        <div class="w-max mx-auto md:mx-0">
        <h1 class="{revelTime?"":"hidden"} text-3xl text-center md:text-left md:text-4xl">Amezan Adhikari</h1>
        <div class="{revelTime?"":"hidden"} flex justify-center mt-4 border-b-2 border-gray-400 pb-4  gap-3">
            <a href="https://github.com/Amezan-Adhikari">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github profile amezan adhikari" class="w-6 md:w-10">
            </a>
            <a href="https://www.linkedin.com/in/amezan-adhikari-63147b312/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin profile amezan adhikari" class="w-6 md:w-10">
            </a>
            <a href="https://www.linkedin.com/in/amezan-adhikari-63147b312/">
                <img src="/icons/instagram.svg" alt="instagram profile amezan adhikari" class="w-6 md:w-10">
            </a>
        </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse {revelTime?"":"hidden"}">
            <div id="hero" class="{revelTime?"":"hidden"} flex items-center justify-center text-6xl md:text-[6rem] w-full h-[20rem] md:h-[70vh]">
                <div class="w-max leading-[5rem] md:leading-[7rem] text-pink-700">
                <Typewriter {sentences} typingSpeed={200} erasingSpeed={100} pauseBetweenSentences={1500} />
                </div>
            </div>


            <section class="my-10 {revelTime?"":"hidden"} md:block flex items-center flex-col">
                <div id="education" class="">
                    {#each education.data as edu}
                    <div class="border-2 border-black appear w-[19rem] md:w-[21rem] hover:shadow-md rounded-xl  p-4 font-medium text-xs md:text-sm">
                        <div class="flex items-center gap-4 "><img src="/icons/hat.svg" alt="education" class="w-10 md:w-16">
                            <div>
                                <h1 class="text-sm md:text-lg font-bold">{edu.name}</h1>
                                <p>{edu.degree} | {edu.major}</p>
                            </div>
                        </div>
                        <p class="opacity-80  mt-3">{edu.description}</p>
                    </div>
                    {/each}
                    
                </div>


                <div id="skills" class=" w-max  my-10">
                    <h1 class="text-lg md:text-xl font-medium mb-3 text-gray-500">My expertise : </h1>
                    <div class="grid grid-cols-3 gap-2">
                        {#each skills.data as skill}
                        <div class="border border-gray-400 appear flex flex-col items-center justify-center self-stretch hover:shadow-md rounded-xl p-4 font-medium text-xs md:text-sm">
                            <img src="{skill.icon}" alt="education" class="w-5 md:w-8">
                                
                            <p class="opacity-100 font-medium  mt-3">{skill.name}</p>
                        </div>
                        {/each}
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>