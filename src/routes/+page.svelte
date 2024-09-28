<script>
  import Hero from "$lib/pages/home/Hero.svelte";
import Loading from "$lib/pages/home/Loading.svelte";

let isloading = true;
setTimeout(() => {
  isloading = false;
},3370)
</script>

<!-- {#if isloading}
    <Loading/>
{:else} -->
<Hero/>
<!-- {/if} -->



<style>
  
</style>