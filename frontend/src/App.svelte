<script lang="ts">
  import Label from "./components/label.svelte";
  import Nav from "./components/Nav.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const blockZoomKeys = ["+", "-", "=", "Add", "Subtract"];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && blockZoomKeys.includes(e.key)) {
        e.preventDefault();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "0") {
        e.preventDefault();
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const onGestureStart = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("gesturestart", onGestureStart);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("gesturestart", onGestureStart);
    };
  });
</script>

<main>
  <Nav />
  <Label />
</main>

<style>
</style>
