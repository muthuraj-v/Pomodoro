<script lang="ts">
  import { get } from "svelte/store";
  import Button from "./button.svelte";
  import {
    pomodoro,
    shortBreak,
    longBreak,
    activeTab,
    minutes,
    seconds,
    buttonClick,
  } from "./store";
  // import { onMount } from "svelte";

  // onMount(() => {
  //   if (get(minutes) === 0 && get(seconds) === 0) {
  //     switch (get(activeTab)) {
  //       case "Pomodoro":
  //         minutes.set(get(pomodoro));
  //         seconds.set(0);
  //         break;
  //       case "Short Break":
  //         minutes.set(get(shortBreak));
  //         seconds.set(0);
  //         break;
  //       case "Long Break":
  //         minutes.set(get(longBreak));
  //         seconds.set(0);
  //         break;
  //       default:
  //         minutes.set(25);
  //         seconds.set(0);
  //     }
  //   }
  // });

  // let minutes = 25;
  // let seconds = 0;
  // $: {
  //   switch ($activeTab) {
  //     case "Pomodoro":
  //       minutes = $pomodoro;
  //       break;
  //     case "Short Break":
  //       minutes = $shortBreak;
  //       break;
  //     case "Long Break":
  //       minutes = $longBreak;
  //       break;
  //     default:
  //       minutes = 25;
  //       seconds = 0;
  //   }
  // }
  $: if ($minutes === 0 && $seconds === 0) {
    switch ($activeTab) {
      case "Pomodoro":
        minutes.set($pomodoro);
        seconds.set(0);
        break;
      case "Short Break":
        minutes.set($shortBreak);
        seconds.set(0);
        break;
      case "Long Break":
        minutes.set($longBreak);
        seconds.set(0);
        break;
      default:
        minutes.set(25);
        seconds.set(0);
    }
  }
  $: if ($buttonClick === "Start") {
    switch ($activeTab) {
      case "Pomodoro":
        minutes.set($pomodoro);
        seconds.set(0);
        break;
      case "Short Break":
        minutes.set($shortBreak);
        seconds.set(0);
        break;
      case "Long Break":
        minutes.set($longBreak);
        seconds.set(0);
        break;
    }
  }
</script>

<main id="timer">
  <div class="number">{$minutes.toString().padStart(2, "0")}</div>

  <div class="colon">:</div>
  <div class="number">{$seconds.toString().padStart(2, "0")}</div>
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
