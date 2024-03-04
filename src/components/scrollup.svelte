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
  <button
    class="text-title-2 scroll-top-btn"
    class:visible={isVisible}
    on:click={scrollToTop}
    aria-hidden="true"
  > ↑ </button>
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 150ms;
    z-index: 10;
    color: white;
    background-color: rgba(44, 44, 44, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background-color 0.3s;
    opacity: 0;

    &:hover {
      background-color: rgba(44, 44, 44, 0.5);
    }
    
    &.visible {
      opacity: 1;
    }
  }
</style>