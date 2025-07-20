import { writable } from "svelte/store";

export type TabType = "Pomodoro" | "Short Break" | "Long Break";
export type buttonType = "Start" | "Pause" | "Resume";
export type PopupType = "Settings" | "About";
export const activeTab = writable<TabType>("Pomodoro");
export const pomodoro = writable<number>(25);
export const shortBreak = writable<number>(5);
export const longBreak = writable<number>(15);
export const isPopup = writable<boolean>(false);
export const PopupTap = writable<PopupType>("Settings");
export const buttonClick = writable<buttonType>("Start");
export const autoStartBreaks = writable(false);

export const tickingSound = writable("None");
export const tickingVolume = writable(0);
export const value = writable(0);
export const remainingTime = writable(0);
export const minutes = writable(0);
export const seconds = writable(0);
export const timerInterval = writable<ReturnType<typeof setInterval> | null>(
  null
);
