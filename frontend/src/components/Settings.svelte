<script lang="ts">
  import { pomodoro, shortBreak, longBreak } from "./store";
</script>

<div id="settings">
  <h4>Timer Settings</h4>
  <p>Set durations (in minutes)</p>

  <div class="table">
    <div class="time-setting">
      <label for="pomodoro">Pomodoro</label>
      <input
        id="pomodoro"
        type="number"
        min="1"
        max="59"
        bind:value={$pomodoro}
      />
    </div>
    <div class="time-setting">
      <label for="shortbreak">Short Break</label>
      <input
        id="shortbreak"
        type="number"
        min="1"
        max="59"
        bind:value={$shortBreak}
      />
    </div>
    <div class="time-setting">
      <label for="longbreak">Long Break</label>
      <input
        id="longbreak"
        type="number"
        min="1"
        max="59"
        bind:value={$longBreak}
      />
    </div>
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
</style>
