import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const THEME_VALUES = {
  SYSTEM: 'system',
  DARK: 'dark',
  LIGHT: 'light',
} as const

export type Theme = typeof THEME_VALUES[keyof typeof THEME_VALUES]

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: THEME_VALUES.LIGHT,

      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
