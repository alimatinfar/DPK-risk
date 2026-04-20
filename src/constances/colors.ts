import tailwindColors from 'tailwindcss/colors'

export type ColorNameType = keyof typeof COLORS

const COLORS = {
  primary: '#4D5999',
  secondary: '#4D5999',
  red: tailwindColors.red["500"],
  dark: tailwindColors.gray["900"],
  white: '#ffffff',
}

export default COLORS