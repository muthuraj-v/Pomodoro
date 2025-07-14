<script lang="ts">
  import Button from "./button.svelte";
</script>

<main id="timer">
  <div class="number">01</div>
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
