<script lang="ts">
  import icon from "../assets/images/half-an-hour.png";
</script>

<div id="nav">
  <div class="lead-heading">Pomodoros</div>
  <div id="dots" title="Menu"><span>____</span><span>&nbsp;&nbsp;__</span></div>
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
    font-size: 25px;
    text-transform: uppercase;
    line-height: 0.4;

    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    color: #222;
  }

  #dots {
    font-size: 30px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    gap: 0;
    cursor: pointer;
    line-height: 0.4;
  }
</style>
