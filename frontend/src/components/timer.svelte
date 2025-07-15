<script lang="ts">
  import Button from "./button.svelte";
  import { pomodoro, shortBreak, longBreak, activeTab } from "./store";

  let minutes = 25;
  $: {
    switch ($activeTab) {
      case "Pomodoro":
        minutes = $pomodoro;
        break;
      case "Short Break":
        minutes = $shortBreak;
        break;
      case "Long Break":
        minutes = $longBreak;
        break;
      default:
        minutes = 25;
    }
  }
</script>

<main id="timer">
  <div class="number">{minutes.toString().padStart(2, "0")}</div>

  <div class="colon">:</div>
  <div class="number">00</div>
</main>
<Button />

<style>
  #timer {
    color: rgb(61, 61, 78);
    margin-top: 80px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 70px;
    font-weight: 500;
    line-height: 25px;
  }
  .colon {
    margin-bottom: 10px;
  }
</style>
