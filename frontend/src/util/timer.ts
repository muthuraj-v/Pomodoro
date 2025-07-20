import { get } from "svelte/store";
import {
  activeTab,
  pomodoro,
  shortBreak,
  longBreak,
  value,
  remainingTime,
  minutes,
  seconds,
  timerInterval,
} from "../components/store";

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

    if (left <= 0) {
      clearInterval(get(timerInterval)!);
      timerInterval.set(null);
      remainingTime.set(0);
      minutes.set(0);
      seconds.set(0);
      console.log("Time's up!");
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

    if (left <= 0) {
      clearInterval(get(timerInterval)!);
      timerInterval.set(null);
      minutes.set(0);
      seconds.set(0);
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

  value.set(null);
  remainingTime.set(null);
  minutes.set(0);
  seconds.set(0);
}
