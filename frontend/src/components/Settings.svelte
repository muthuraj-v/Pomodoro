<script lang="ts">
  import {
    pomodoro as pomodoroStore,
    shortBreak as shortBreakStore,
    longBreak as longBreakStore,
    autoStartBreaks as autoStartBreaksStore,
    tickingSound as tickingSoundStore,
    tickingVolume as tickingVolumeStore,
  } from "./store";

  $: pomodoro = $pomodoroStore;
  $: shortBreak = $shortBreakStore;
  $: longBreak = $longBreakStore;
  $: autoStartBreaks = $autoStartBreaksStore;
  $: tickingSound = $tickingSoundStore;
  $: tickingVolume = $tickingVolumeStore;

  function saveSettings() {
    pomodoroStore.set(pomodoro);
    shortBreakStore.set(shortBreak);
    longBreakStore.set(longBreak);
    autoStartBreaksStore.set(autoStartBreaks);
    tickingSoundStore.set(tickingSound);
    tickingVolumeStore.set(tickingVolume);
  }
</script>

<div id="settings">
  <h4>
    <span class="sound-icon">⌛</span>
    Timer Settings
  </h4>
  <p>Set durations (in minutes)</p>

  <div class="table">
    <div class="time-setting">
      <label for="pomodoro">Pomodoro</label>
      <input
        id="pomodoro"
        type="number"
        min="1"
        max="59"
        bind:value={pomodoro}
      />
    </div>
    <div class="time-setting">
      <label for="shortbreak">Short Break</label>
      <input
        id="shortbreak"
        type="number"
        min="1"
        max="59"
        bind:value={shortBreak}
      />
    </div>
    <div class="time-setting">
      <label for="longbreak">Long Break</label>
      <input
        id="longbreak"
        type="number"
        min="1"
        max="59"
        bind:value={longBreak}
      />
    </div>
  </div>

  <div class="toggle">
    <div>Auto Start Breaks</div>
    <label class="switch">
      <input type="checkbox" bind:checked={autoStartBreaks} />
      <span class="slider"></span>
    </label>
  </div>
  <div class="sound-settings">
    <h4>
      <span class="sound-icon">🔊</span>
      SOUND
    </h4>

    <div class="setting-block">
      <label for="ticking-sound">Ticking Sound</label>
      <select id="ticking-sound" name="ticking-sound" bind:value={tickingSound}>
        <option value="None" selected>None</option>
        <option value="interstellar">Interstellar</option>
        <option value="slow">Ticking Slow</option>
        <option value="fast">Ticking Fast</option>
        <!-- <option value="soft">Soft</option>
        <option value="loud">Loud</option> -->
      </select>

      <label for="ticking-volume" class="volume-label">Volume</label>
      <input
        id="ticking-volume"
        name="ticking-volume"
        type="range"
        min="0"
        max="100"
        bind:value={tickingVolume}
      />
    </div>
  </div>
  <div class="settings-footer">
    <button class="ok-button" on:click={saveSettings}>OK</button>
  </div>
</div>

<style>
  #settings {
    padding: 1rem;
    border-radius: 12px;
    font-family: Arial, sans-serif;
  }

  #settings h4 {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: #222;
    font-weight: 700;
  }

  #settings p {
    font-size: 14px;
    color: #555;
    margin-bottom: 1.2rem;
  }

  .table {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .time-setting {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .time-setting label {
    font-size: 14px;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input[type="number"] {
    width: 70%;
    padding: 6px 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-align: center;
    outline: none;
    transition: border-color 0.3s;
  }

  input[type="number"]:focus {
    border-color: #007bff;
  }

  .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 22px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #007bff;
  }

  input:checked + .slider:before {
    transform: translateX(18px);
  }
  .sound-settings {
    margin-top: 2rem;
    font-family: Arial, sans-serif;
  }

  .sound-settings h4 {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #777;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .sound-icon {
    margin-right: 0.5rem;
    font-size: 16px;
  }

  .setting-block {
    margin-bottom: 1.5rem;
    background: #f7f7f7;
    padding: 0.8rem;
    border-radius: 8px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #444;
    margin-bottom: 0.4rem;
  }

  select {
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    background-color: #e6e6e6;
    border: none;
    margin-bottom: 0.6rem;
    font-size: 14px;
  }

  input[type="range"] {
    width: 100%;
    margin-top: 0.3rem;
  }
  .settings-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  .ok-button {
    padding: 0.6rem 1.2rem;
    /* background-color: #007bff; */
    background-color: rgb(61, 61, 78);

    border: none;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .ok-button:hover {
    background-color: #50506e;
  }
</style>
