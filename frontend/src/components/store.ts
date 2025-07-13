import { writable } from "svelte/store";

export type TabType = "Pomodoro" | "Short Break" | "Long Break";

export const activeTab = writable<TabType>("Pomodoro");
