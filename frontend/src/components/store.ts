import { writable } from "svelte/store";

function loadSetting<T>(key: string, defaultValue: T): T {
  const stored = localStorage.getItem(key);
  try {
    return stored ? (JSON.parse(stored) as T) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function persistentWritable<T>(key: string, defaultValue: T) {
  const store = writable<T>(loadSetting<T>(key, defaultValue));
  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return store;
}

export type TabType = "Pomodoro" | "Short Break" | "Long Break";
export type buttonType = "Start" | "Pause" | "Resume";
export type PopupType = "Settings" | "About";

export const activeTab = writable<TabType>("Pomodoro");
export const isPopup = writable<boolean>(false);
export const PopupTap = writable<PopupType>("Settings");
export const buttonClick = writable<buttonType>("Start");

export const pomodoro = persistentWritable<number>("pomodoro", 25);
export const shortBreak = persistentWritable<number>("shortBreak", 5);
export const longBreak = persistentWritable<number>("longBreak", 15);
export const autoStartBreaks = persistentWritable<boolean>(
  "autoStartBreaks",
  false
);
export const tickingSound = persistentWritable<string>("tickingSound", "None");
export const tickingVolume = persistentWritable<number>("tickingVolume", 50);

export const value = writable(0);
export const remainingTime = writable(0);
export const minutes = writable(0);
export const seconds = writable(0);
export const timerInterval = writable<ReturnType<typeof setInterval> | null>(
  null
);
