import type {ButtonColorsType, ButtonProps, ButtonVariantsType} from "../ButtonTypes";
import type {PartialRecord} from "../../../../types/PartialRecord.ts";


type Props = Partial<ButtonProps>

function useButtonStylesColors({readOnly, longPress}: Props) {

  const defaultButtonClass = 'text-gray-900 border-gray-300 bg-white enabled:hover:bg-gray-100 disabled:text-gray-300 shadow-xs'

  const buttonStylesColors: Record<ButtonColorsType, PartialRecord<ButtonVariantsType, string>> = {
    //TODO should be changed
    'primary': {
      'filled': `text-white border-transparent bg-primary disabled:bg-primary-300 ${readOnly ? '' : 'enabled:hover:bg-primary-600'}`,
      'link': `text-primary border-transparent bg-transparent disabled:text-primary-300 ${readOnly ? '' : 'enabled:hover:bg-primary/10'}`,
      'default': `text-gray-900 border-blue-200 bg-blue-50 disabled:text-gray-300 ${readOnly ? '' : 'enabled:hover:bg-blue-100'}`,
      'outlined':
        `text-primary border-primary bg-transparent ${(longPress || readOnly) ? '' : 'enabled:hover:bg-primary/10'} 
         disabled:bg-primary-50 disabled:border-primary-200 disabled:text-primary-200`,
    },
    'secondary': {
      'filled': `text-white border-transparent bg-secondary disabled:bg-secondary-300 ${readOnly ? '' : 'enabled:hover:bg-secondary-600'}`,
      'link': `text-secondary border-transparent bg-transparent disabled:text-secondary-300 ${readOnly ? '' : 'enabled:hover:bg-secondary-50'}`,
      'default': `text-gray-900 border-secondary-200 bg-secondary-50 disabled:text-gray-300 ${readOnly ? '' : 'enabled:hover:bg-secondary-100'}`,
      'outlined':
        `text-secondary border-secondary bg-transparent ${readOnly ? '' : 'enabled:hover:bg-secondary-50'} 
         disabled:bg-secondary-50 disabled:border-secondary-200 disabled:text-secondary-200`,
    },
    'red': {
      'filled': `text-white border-transparent bg-red-500 disabled:bg-red-300 ${readOnly ? '' : 'enabled:hover:bg-red-600'}`,
      'link': `text-red-500 border-transparent bg-transparent disabled:text-red-300 ${readOnly ? '' : 'enabled:hover:bg-red-50'}`,
      'default': `text-red-500 border-red-300 bg-red-50 ${readOnly ? '' : 'enabled:hover:bg-red-100'}`,
      'outlined':
        `text-red-500 border-red-500 bg-transparent ${readOnly ? '' : 'enabled:hover:bg-red-50'}
         disabled:bg-red-50 disabled:border-red-200 disabled:text-red-200`,
    },
    'white': {
      'default': defaultButtonClass,
      'link': `text-gray-900 border-transparent bg-transparent disabled:text-gray-300 ${readOnly ? '' : 'enabled:hover:bg-secondary-50'}`,
    },
  }

  return {buttonStylesColors, defaultButtonClass}
}

export default useButtonStylesColors