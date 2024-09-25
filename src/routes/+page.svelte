<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Home from "$lib/pages/Home.svelte";
  import Nodes from "$lib/pages/Nodes.svelte";
</script>


<main class="relative">
    <main class="">
        <Nodes/>
    </main>
    <div class="absolute top-0 left-0 w-screen">
        <Navbar/>
        <Home/>
    </div>
</main>