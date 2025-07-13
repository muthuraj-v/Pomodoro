<script lang="ts">
  import { activeTab, type TabType } from "./store";

  const tabs: TabType[] = ["Pomodoro", "Short Break", "Long Break"];

  function changeTab(tab: TabType) {
    activeTab.set(tab);
  }
</script>

<main id="top-label">
  {#each tabs as tab}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="tab"
      class:active={$activeTab === tab}
      on:click={() => changeTab(tab)}
    >
      {tab}
    </div>
  {/each}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

  #top-label {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    margin: 40px auto;
    padding: 0;
    display: flex;
    gap: 40px;
    justify-content: center;
    max-width: 600px;
  }

  .tab {
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    color: #444;
    transition: color 0.3s ease;
  }

  .tab::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0%;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .tab:hover {
    color: #000;
  }

  .tab:hover::after {
    width: 100%;
  }

  .tab.active {
    color: #000;
    /* font-weight: 600; */
  }

  .tab.active::after {
    width: 100%;
    background-color: #000;
  }
</style>
