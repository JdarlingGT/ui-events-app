import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the store state
interface UIState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  setTheme: (theme: "light" | "dark") => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

// Create the store with persistence
export const useUIStore = create<UIState>()(
  persist<UIState>(
    (set) => ({
      theme: "light",
      sidebarOpen: false,
      setTheme: (theme: "light" | "dark") => set({ theme }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      closeSidebar: () => set({ sidebarOpen: false }),
    }),
    {
      name: "ui-storage", // name of the item in the storage (must be unique)
    }
  )
);