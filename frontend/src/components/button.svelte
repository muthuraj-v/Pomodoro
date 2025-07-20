<script lang="ts">
  import {
    pauseCountdown,
    resetCountdown,
    resumeCountdown,
    startCountTown,
  } from "../util/timer";
  import {
    buttonClick,
    type buttonType,
    activeTab,
    pomodoro,
    shortBreak,
    longBreak,
  } from "./store";
  let isTrue = false;
  const buttons: buttonType[] = ["Start", "Pause", "Resume"];
  buttonClick.set("Start");
  function onClick() {
    isTrue = !isTrue;
    if ($buttonClick === "Start") {
      buttonClick.set(buttons[1]);
      if ($activeTab === "Pomodoro") {
        startCountTown($pomodoro);
      } else if ($activeTab === "Short Break") {
        startCountTown($shortBreak);
      } else if ($activeTab === "Long Break") {
        startCountTown($longBreak);
      }
    } else if ($buttonClick === "Pause") {
      buttonClick.set(buttons[2]);
      pauseCountdown();
    } else if ($buttonClick === "Resume") {
      buttonClick.set(buttons[1]);
      resumeCountdown();
    } else {
      buttonClick.set(buttons[1]);
    }
  }
  function reset() {
    if ($activeTab === "Pomodoro") {
      buttonClick.set("Start");
      resetCountdown();
      pomodoro.set(25);
    } else if ($activeTab === "Short Break") {
      buttonClick.set("Start");
      resetCountdown();

      shortBreak.set(5);
    } else if ($activeTab === "Long Break") {
      buttonClick.set("Start");
      resetCountdown();

      longBreak.set(15);
    }
    buttonClick.set("Start");
  }
</script>

<main>
  <button
    type="button"
    on:click={onClick}
    class:paused={$buttonClick === "Pause"}
    class:resume={$buttonClick === "Resume"}
  >
    <!-- {isTrue ? "Pause" : "Start"} -->
    {$buttonClick}
  </button>
  {#if $buttonClick != "Start"}
    <button type="button" id="reset" on:click={reset}>&#8634;</button>
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
  main button.paused {
    background-color: #ccc;
    color: black;
    border-bottom: none;
  }

  main button.paused:active {
    background-color: rgba(204, 204, 204, 0.7);
    color: black;
  }

  main button.resume {
    background-color: #cfe7cf;
    color: #1e1e1e;
    border-bottom: none;
  }

  main button.resume:active {
    background-color: rgba(207, 231, 207, 0.7);
    color: #1e1e1e;
  }

  main button:active {
    background-color: rgb(40, 40, 60);
    transform: scale(0.97);
  }
</style>
