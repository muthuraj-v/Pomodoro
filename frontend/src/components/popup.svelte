<script lang="ts">
  import { isPopup } from "./store";
  function closeSettings() {
    isPopup.set(false);
  }
</script>

<main>
  <div id="head">
    <h4>Settings</h4>
    <button class="close" on:click={closeSettings}>✕</button>
  </div>
  <hr />
  <div id="content"></div>
</main>

<style>
  main {
    width: 400px;
    height: 570px;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  #head {
    position: relative;
    width: 100%;
    margin-bottom: 0.2rem;
  }

  h4 {
    font-size: 15px;
    color: #aaa;
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px 30px;

    text-align: center;
  }
  #content {
    padding: 1.5rem;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.4rem;
    background-color: transparent;
    border: none;
    color: #555;
    cursor: pointer;
    padding: 0.25rem 1rem;
    border-radius: 4px;
    transition:
      background 0.2s,
      color 0.2s;
  }

  .close:hover {
    color: #eee;
  }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 0;
    margin-bottom: 1rem;
  }
</style>
