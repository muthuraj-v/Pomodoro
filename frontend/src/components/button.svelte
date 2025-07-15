<script lang="ts">
  let isTrue = false;
  function onClick() {
    isTrue = !isTrue;
  }
</script>

<main>
  <button type="button" on:click={onClick} class:paused={isTrue}>
    {isTrue ? "Pause" : "Start"}
  </button>
  {#if isTrue}
    <button type="button" id="reset">&#8634;</button>
  {/if}
</main>

<style>
  main {
    width: 700px;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  main button {
    border-radius: 12px;
    cursor: pointer;
    text-align: center;
    padding: 0.8rem 3.1rem;
    font-size: 26px;
    letter-spacing: 1.2px;
    background-color: rgb(61, 61, 78);
    color: whitesmoke;
    text-transform: uppercase;
    border-bottom: 3px solid black;
    transition: all 0.2s ease-in-out;
  }

  main button:hover {
    background-color: #50506e;
  }
  main button.paused {
    background-color: #ccc;
    color: black;
    border-bottom: none;
  }
  main button.paused:active {
    background-color: rgba(204, 204, 204, 0.7);
    color: black;
  }
  main button:active {
    background-color: rgb(40, 40, 60);
    transform: scale(0.97);
  }

  #reset {
    border: none;
    position: absolute;
    top: 6px;
    right: 190px;
    padding: 0.4rem 1rem;
    font-size: 20px;
    border-radius: 50%;
    background-color: #444;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
  }

  #reset:hover {
    background-color: #666;
  }
</style>
