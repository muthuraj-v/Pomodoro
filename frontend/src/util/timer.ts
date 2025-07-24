import { get } from "svelte/store";
import {
  value,
  remainingTime,
  minutes,
  seconds,
  timerInterval,
  tickingSound,
  tickingVolume,
  buttonClick,
} from "../components/store";

import { playSound, stopSound } from "./sounds";

function playTicking() {
  const sound = get(tickingSound);
  const volume = get(tickingVolume);

  if (sound !== "None") {
    playSound(sound, volume);
  }
}

function stopTicking() {
  stopSound();
}
function updateClock(ms: number) {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  minutes.set(mins);
  seconds.set(secs);
}

export function startCountTown(durationMinutes: number) {
  const targetTime = new Date().getTime() + durationMinutes * 60 * 1000;
  value.set(targetTime);

  const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const target = get(value);
    const left = target - currentTime;
    playTicking();
    if (left <= 0) {
      stopTicking();
      playSound("dio", 100);
      setTimeout(() => {
        stopTicking();
      }, 4000);
      clearInterval(get(timerInterval)!);
      timerInterval.set(null);
      remainingTime.set(0);
      minutes.set(0);
      seconds.set(0);
      console.log("Time's up!");
      buttonClick.set("Start");
      return;
    }

    remainingTime.set(left);
    updateClock(left);
  }, 1000);

  timerInterval.set(interval);
}

export function pauseCountdown() {
  clearInterval(get(timerInterval)!);
  timerInterval.set(null);

  const now = new Date().getTime();
  const target = get(value);
  const left = target - now;
  stopTicking();
  remainingTime.set(left);
  updateClock(left);
  console.log("Paused at:", left);
}

export function resumeCountdown() {
  const timeLeft = get(remainingTime);
  if (timeLeft === null || timeLeft <= 0) return;

  const resumeTarget = new Date().getTime() + timeLeft;
  value.set(resumeTarget);

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const target = get(value);
    const left = target - now;
    playTicking();

    if (left <= 0) {
      stopTicking();
      playSound("dio", 100);
      setTimeout(() => {
        stopTicking();
      }, 4000);
      clearInterval(get(timerInterval)!);
      timerInterval.set(null);
      minutes.set(0);
      seconds.set(0);
      buttonClick.set("Start");
      return;
    }

    remainingTime.set(left);
    updateClock(left);
  }, 1000);

  timerInterval.set(interval);
}

export function resetCountdown() {
  clearInterval(get(timerInterval)!);
  timerInterval.set(null);
  stopTicking();

  value.set(null);
  remainingTime.set(null);
  minutes.set(0);
  seconds.set(0);
}
