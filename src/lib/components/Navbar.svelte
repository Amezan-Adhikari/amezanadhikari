<script>
    let activeTab = 'Home'; // Tracks the active tab
</script>

<nav class="flex justify-between items-center h-[80px] px-3 md:px-10 bg-[#14191D]">
    <div class="logo">
        <!-- Insert your logo here -->
        <img src="/images/logo.svg" alt="Logo" class="md:w-[40px] md:h-[40px] w-6 " />
    </div>

    <ul class="flex md:gap-10 gap-2 bg-[#23353D] rounded-full font-heading text-gray-400 shadow-inset-nav px-1 py-1">
        <li class={`cursor-pointer  font-serif md:px-20 py-2 text-sm px-4 md:text-lg rounded-full transition-all ease-in duration-300 
            ${activeTab === 'Skills' ? 'bg-[#14191D] shadow-lg' : ''}`} 
            on:click={() => activeTab = 'Skills'}>
            Skills
        </li>
        <li class={`cursor-pointer  font-serif md:px-20 py-2 text-sm px-4 md:text-lg rounded-full transition-all ease-in duration-300 
            ${activeTab === 'Home' ? 'bg-[#14191D] shadow-lg' : ''}`} 
            on:click={() => activeTab = 'Home'}>
            Home
        </li>
        <li class={`cursor-pointer  font-serif md:px-20 py-2 text-sm px-4 md:text-lg rounded-full transition-all ease-in duration-300 
            ${activeTab === 'Projects' ? 'bg-[#14191D] shadow-lg ' : ''}`} 
            on:click={() => activeTab = 'Projects'}>
            Projects
        </li>
    </ul>

    <div class="info">
        <!-- Insert your info icon here -->
        <img src="/images/contact.svg" alt="Info" class="md:w-[30px] md:h-[30px] w-6  " />
    </div>
</nav>

<style>
    /* Import the custom font */
    @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    /* Apply the Inria Serif font */
    :global(.font-heading) {
        font-family: 'Inria Serif', serif;
    }
    :global(.font-body){
        font-family: 'Poppins', sans-serif;
    }
    :global(body){
        padding: 0;
        margin: 0;
    }
    
    .shadow-inset-nav{
        box-shadow: inset 0 4px 3px 3px rgba(16, 16, 16,0.25);
    }
</style>