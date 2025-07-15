import { writable } from "svelte/store";

export type TabType = "Pomodoro" | "Short Break" | "Long Break";
export type PopupType = "Settings" | "About";
export const activeTab = writable<TabType>("Pomodoro");
export const pomodoro = writable<number>(25);
export const shortBreak = writable<number>(5);
export const longBreak = writable<number>(15);
export const isPopup = writable<boolean>(false);
export const PopupTap = writable<PopupType>("Settings");
