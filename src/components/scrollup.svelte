<script>
  import { onMount } from "svelte";

  let isVisible = false;

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    isVisible = scrolled > 300;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  onMount(() => {
    window.addEventListener("scroll", toggleVisible);
    
    return () => {
        window.removeEventListener("scroll", toggleVisible);
    }
  });
</script>

<div>
  {#if isVisible}
    <div
      class="w-12 h-12 fixed bottom-6 right-6 custom-border-gray rounded-full bg-black hover:bg-black cursor-pointer flex justify-center items-center transition z-50 text-title-2 text-white"
      on:click={scrollToTop}
      aria-hidden="true"
    > ↑ </div>
  {/if}
</div>
