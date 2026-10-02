import type {ChipsProps} from "../Chips";

export type ChipsColorsType = 'gray'
export type ChipsSizesType = 'sm'

function  useChipsStyles({color = 'gray', size = 'sm', onClose}: Partial<ChipsProps>) {

  const badgeStylesColors: Record<ChipsColorsType, string> = {
    'gray': `border border-slate-300 dark:border-dark-4 ${onClose ? 'bg-slate-100 dark:bg-dark-2' : 'bg-slate-200'} `,
  }

  const badgeStylesSizes: Record<ChipsSizesType, string> = {
    'sm': 'text-sm py-0.5 px-2 rounded-lg',
  }

  const badgeStyles = {
    color: badgeStylesColors[color],
    size: badgeStylesSizes[size],
  }

  return {badgeStyles}
}

export default useChipsStyles;
