import {THEME_VALUES, useThemeStore} from "../store/useThemeStore.ts";

function useTheme() {

  const theme = useThemeStore(state => state.theme)

  const mediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)',
  )
  const isDarkMode = theme === THEME_VALUES.DARK || (theme === THEME_VALUES.SYSTEM && mediaQuery.matches);

  return {
    isDarkMode, theme
  }
}

export default useTheme;
