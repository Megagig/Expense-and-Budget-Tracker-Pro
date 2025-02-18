import { create } from 'zustand';

// define the shape of the store's state
interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

// create the zustand store with type safety
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem('preferred-theme') || 'forest',
  setTheme: (theme: string) => {
    localStorage.setItem('preferred-theme', theme);
    set({ theme });
  },
}));
