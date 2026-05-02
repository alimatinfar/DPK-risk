import type {ButtonColorsType, ButtonProps, ButtonVariantsType} from "../ButtonTypes.ts";
import type {PartialRecord} from "../../../../types/PartialRecord.ts";
import {useMemo} from "react";

const buttonLongPressStyles: Record<ButtonColorsType, PartialRecord<ButtonVariantsType, string>> = {
  //TODO should be changed
  'primary': {
    'filled': 'bg-primary-filled-long-press',
    'link': '',
    'default': '',
    'outlined': 'bg-primary-outlined-long-press',
  },
  'secondary': {
    'filled': '',
    'link': '',
    'default': '',
    'outlined': '',
  },
  'red': {
    'filled': '',
    'link': '',
    'default': '',
    'outlined': '',
  },
  'white': {
    'default': '',
  },
}

function useButtonLongPressStyle(
  {variant, color}: Pick<ButtonProps, 'variant' | 'color'>
) {

  const longPressElementBackgroundColor = useMemo(function () {
    return (color && variant) ? buttonLongPressStyles?.[color]?.[variant] : ''
  }, [color, variant])

  return {
    longPressElementBackgroundColor
  }
}

export default useButtonLongPressStyle