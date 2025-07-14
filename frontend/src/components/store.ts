import { writable } from "svelte/store";

export type TabType = "Pomodoro" | "Short Break" | "Long Break";

export const activeTab = writable<TabType>("Pomodoro");
export const pomodoro = writable<number>(25);
export const shortBreak = writable<number>(5);
export const longBreak = writable<number>(15);
