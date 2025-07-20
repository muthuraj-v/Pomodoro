let audio: HTMLAudioElement | null = null;
import interstellar from "../assets/sounds/interstellar.mp3";
import slow from "../assets/sounds/slow.mp3";
import fast from "../assets/sounds/fast.mp3";
import theworld from "../assets/sounds/theworld.mp3";

export function playSound(fileName: string, volume: number = 100) {
  stopSound();
  let path;
  if (fileName === "interstellar") {
    path = interstellar;
  } else if (fileName === "slow") {
    path = slow;
  } else if (fileName === "fast") {
    path = fast;
  } else if (fileName === "dio") {
    path = fast;
  } else {
    path = interstellar;
  }

  audio = new Audio(path);
  audio.loop = true;
  audio.volume = Math.min(Math.max(volume / 100, 0), 1);

  audio.play().catch((err) => {
    console.error("Failed to play audio:", err);
  });
}

export function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
  }
}
