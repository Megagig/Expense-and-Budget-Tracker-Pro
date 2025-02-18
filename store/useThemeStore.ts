'use client';
import { create } from 'zustand';

// define the shape of the store's state
interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

// create the zustand store with type safety
export const useThemeStore = create<ThemeStore>((set) => ({
  theme:
    typeof window !== 'undefined'
      ? localStorage.getItem('preferred-theme') || 'forest'
      : 'forest',
  setTheme: (theme: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-theme', theme);
    }
    set({ theme });
  },
}));
