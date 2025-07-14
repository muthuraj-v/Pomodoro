<script lang="ts">
  import { isPopup } from "./store";
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  let isTrue: boolean = false;
  let menuRef: HTMLElement;
  let buttonRef: HTMLElement;
  function toggle() {
    isTrue = !isTrue;
    if (!isTrue) {
      isPopup.set(false);
    }
  }
  function handleClickOutside(event: MouseEvent) {
    if (
      menuRef &&
      buttonRef &&
      !menuRef.contains(event.target as Node) &&
      !buttonRef.contains(event.target as Node)
    ) {
      isTrue = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  function openPopup() {
    isPopup.set(true);
    isTrue = false;
  }
</script>

<div id="nav">
  <div class="lead-heading">Pomodoro+</div>
  <div id="dots" title="Menu">
    <button id="subdots" bind:this={buttonRef} on:click={toggle}>
      <span>____</span><span>&nbsp;&nbsp;__</span>
    </button>

    {#if isTrue}
      <div id="show" bind:this={menuRef} transition:fade={{ duration: 150 }}>
        <ul>
          <li><button on:click={openPopup}>Settings</button></li>
          <li>About</li>
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  #nav {
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  .lead-heading {
    margin-top: 25px;
    font-size: 1.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #111827;
    font-family: "Segoe UI", Roboto, sans-serif;
    letter-spacing: 1px;
    line-height: 1.2;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  #dots {
    position: relative;
  }
  #subdots {
    border: none;
    color: none;
    background-color: inherit;
    font-size: 23px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    gap: 0;
    cursor: pointer;
    line-height: 0.4;
  }
  #show {
    transform-origin: top right;
    position: absolute;
    top: 30px;
    right: 0;
    z-index: 100;
    margin-top: 0.5rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: #cfd0d0;
    width: 10rem;
    background-color: #f5f6f6;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.06),
      0 4px 6px -2px rgba(0, 0, 0, 0.03);
  }

  #show ul {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #374151;
  }

  #show ul li {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #show ul li:hover {
    background-color: #e1e2e2;
  }
</style>
