import { useEffect } from 'react';
import {THEME_VALUES, useThemeStore} from "./store/useThemeStore.ts";

function ThemeManager() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    const applyTheme = () => {
      const isDark = theme === THEME_VALUES.DARK || (theme === THEME_VALUES.SYSTEM && mediaQuery.matches);

      document.documentElement.classList.toggle(THEME_VALUES.DARK, isDark);
    }

    applyTheme();

    if (theme === THEME_VALUES.SYSTEM) {
      mediaQuery.addEventListener('change', applyTheme);

      return () => {
        mediaQuery.removeEventListener('change', applyTheme);
      };
    }
  }, [theme]);

  return null;
}

export default ThemeManager
