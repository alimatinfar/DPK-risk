import type {ButtonColorsType, ButtonProps, ButtonVariantsType} from "../ButtonTypes";
import type {PartialRecord} from "../../../../types/PartialRecord.ts";
import type {ColorNameType} from "../../../../constances/colors.ts";
import type {LoadingProps} from "../../../others/Loading/Loading.tsx";

function useButtonStylesLoadingColors(
  {color, variant, size}: Pick<ButtonProps, 'color' | 'variant' | 'size'>
) {

  const defaultButtonLoadingColor: ColorNameType = 'dark'

  const buttonStylesLoadingColors: PartialRecord<ButtonColorsType, PartialRecord<ButtonVariantsType, ColorNameType>> = {
    'primary': {
      'filled': 'white',
      'link': 'primary',
      'default': 'primary',
      'outlined': 'primary',
    },
    'secondary': {
      'filled': 'white',
      'link': 'secondary',
      'default': 'secondary',
      'outlined': 'secondary',
    },
    'red': {
      'filled': 'white',
      'link': 'red',
      'default': 'red',
      'outlined': 'red',
    },
  }

  const buttonLoadingProps: LoadingProps = {
    color: buttonStylesLoadingColors?.[color!]?.[variant!] || defaultButtonLoadingColor,
    size: size === 'sm' ? 'sm' : 'md'
  }

  return {buttonLoadingProps}
}

export default useButtonStylesLoadingColors