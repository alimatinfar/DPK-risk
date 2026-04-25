import type {InputProps} from "../types/InputProps";
import {useMemo} from "react";


export const inputSizes = {
  'md': 'h-11',
}

function useInputStyles(
  {
    wrapperClassName, errorMessage, inputClassName, inputLtr,
    size = 'md', disabled, resizable, rows, readOnly, hasError, isConflict
  }: Pick<InputProps,
    'wrapperClassName' | 'errorMessage' | 'inputClassName' | 'inputLtr' | 'size' | 'disabled' | 'resizable' | 'rows' |
    'readOnly' | 'hasError' | 'isConflict'
  >
) {

  const fieldWrapperStyles = useMemo(() => ({
    default: `flex flex-col`,
  }), []);

  const inputWrapperStyles = useMemo(() => ({
    default: `
    flex items-center border block w-full overflow-hidden appearance-none duration-200
    `,
    background: isConflict ? 'bg-orange-100' : (disabled || readOnly) ? 'bg-gray-100' : 'bg-white',
    shadow: 'shadow-base',
    border: `border-gray-300 [&:has(input:enabled)]:hover:border-primary-300 [&:has(input:focus)]:border-primary`,
    borderRadius: 'rounded-lg',
    height: rows ? '' : inputSizes[size],
    ...wrapperClassName,
    ...(errorMessage || hasError) ? {border:'border-red-500'} : {}
  }), [
    isConflict, disabled, readOnly, errorMessage, hasError, rows, inputSizes, size, wrapperClassName
  ]);

  const inputStyles = useMemo(() => ({
    default: `
     ${inputLtr ? 'ltr' : ''} ${resizable ? '' : 'resize-none'}
     h-full w-full outline-none text-ellipsis focus:text-clip scroll-thin placeholder:text-right placeholder:rtl
     placeholder:text-base placeholder:text-gray-400 
    `,
    background: 'bg-transparent',
    padding: 'px-2 py-3',
    fontSize: `text-base`,
    fontWeight: `font-medium`,
    textAlign: `text-right`,
    textColor: `text-gray-700`,
    ...inputClassName,
  }), [inputLtr, resizable, inputClassName])

  return {
    fieldWrapperStyles, inputWrapperStyles, inputStyles
  }
}

export default useInputStyles;