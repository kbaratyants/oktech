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
    };
  });
</script>

<div class="scroll-top-btn-container">
  <button
    class="text-title-2 scroll-top-btn"
    class:visible={isVisible}
    on:click={scrollToTop}
    aria-hidden="true"
  >
    ↑
  </button>
</div>

<style lang="scss">
  @import "../styles/global.scss";

  .scroll-top-btn-container {
    display: flex;
    justify-content: end;
    position: sticky;
    bottom: 0;
    z-index: 10;
    width: 100%;
    margin-top: -80px;
    padding-right: 24px;
    padding-bottom: 24px;
  }

  button {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 150ms;
    color: white;
    background-color: rgba(44, 44, 44, 0.4);
    backdrop-filter: blur(12px);
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
