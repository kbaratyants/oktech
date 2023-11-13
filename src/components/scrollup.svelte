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
    <button
      class="text-title-2"
      on:click={scrollToTop}
      aria-hidden="true"
    > ↑ </button>
  {/if}
</div>


<style lang="scss">
  @import "../styles/global.scss";
  
  button {
    width: 48px;
    height: 48px;
    position: fixed;
    bottom: 24px;
    right: 24px;
    border-radius: 100%;
    background-color: black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 150ms;
    z-index: 10;
    color: white;
    &:hover {
      background-color: $black-hover;
    }
  }
</style>