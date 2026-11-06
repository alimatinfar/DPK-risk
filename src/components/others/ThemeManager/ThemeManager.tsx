import { useEffect } from 'react';
import {THEME_VALUES, useThemeStore} from "./store/useThemeStore.ts";
import useTheme from "./hooks/useTheme.ts";

function ThemeManager() {
  const {
    theme, isDarkMode
  } = useTheme()

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    const applyTheme = () => {
      document.documentElement.classList.toggle(THEME_VALUES.DARK, isDarkMode);
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
