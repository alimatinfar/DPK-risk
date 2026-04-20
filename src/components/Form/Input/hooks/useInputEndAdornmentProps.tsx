import type {InputEndAdornmentProps} from "../EndAdornment/InputEndAdornment.tsx";
import type {InputProps} from "../types/InputProps.ts";
import {useCallback, useMemo, useState} from "react";
import CloseIcon from "../../../svg/CloseIcon.tsx";


type Props = Pick<InputProps,
  'hasRemoveValueIcon' | 'disabled' | 'value' | 'onChange'
> & InputEndAdornmentProps

function useInputEndAdornmentProps(
  {
    endAdornment, endAdornmentOnClick, disabled, endAdornmentClassName, endAdornmentType, hasRemoveValueIcon,
    onChange
  }: Props
) {

  const [inputElement, setInputElement] = useState<any>();

  const removeValueHandler = useCallback(function () {
    if (!inputElement) return
    // eslint-disable-next-line react-hooks/immutability
    inputElement.target.value = ''
    onChange && onChange(inputElement)
  }, [inputElement, onChange])

  const hasCloseIcon = useMemo(() => {
    const inputValue = inputElement?.target?.value || ''
    return hasRemoveValueIcon && !!inputValue
  }, [hasRemoveValueIcon, inputElement])

  const onChangeValueForEndAdornment = useCallback(function (e:any) {
    onChange && onChange(e)
    setInputElement(e)
  }, [])

  return {
    endAdornmentProps: {
      endAdornment: hasCloseIcon ? <CloseIcon /> : endAdornment,
      endAdornmentOnClick: hasCloseIcon ? removeValueHandler : endAdornmentOnClick,
      endAdornmentType: hasCloseIcon ? 'icon' : endAdornmentType,
      disabled: Boolean(disabled),
      endAdornmentClassName,
    },
    onChangeValueForEndAdornment
  }
}

export default useInputEndAdornmentProps