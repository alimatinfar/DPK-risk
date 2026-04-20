import {useMemo} from "react";
import type {InputProps} from "./types/InputProps";
import Tooltip from "../../others/Tooltip/Tooltip";
import InfoIcon from "../../svg/InfoIcon";
import joinObjectValues from "../../../utils/joinObjectValues.ts";


export type InputLabelProps = {
  className?: string;
  classObject?: InputProps['labelClassName'];
  marginClass?: string;
} & Pick<InputProps, 'label' | 'name' | 'required' | 'disabled' | 'info' | 'onClick' | 'readOnly'>

function InputLabel(
  {
    label, name, className, disabled, info, onClick, marginClass, classObject
  }: InputLabelProps
) {

  // const requiredIcon = useMemo(function () {
  //   if (!required || readOnly) return <></>
  //
  //   return (
  //     <span className='text-red-500 font-medium mr-0.5'>*</span>
  //   )
  // }, [required])

  const infoElement = useMemo(function () {
    if (!info) return <></>

    return (
      <Tooltip title={info} onClick={e => e.stopPropagation()}>
        <InfoIcon />
      </Tooltip>
    )
  }, [info])

  const customClasses:InputProps['labelClassName'] = {
    fontWeight: 'font-normal',
    color: disabled ? 'text-gray-500' : 'text-gray-900',
    ...classObject
  }

  return (
    <label
      className={`
        flex items-center ${joinObjectValues(customClasses)} ${className || ''} 
        space-x-reverse space-x-0.5 select-none ${marginClass || 'mb-2 '}
      `}
      {...(name && {htmlFor: name})} {...onClick && {onClick}}
    >
      {label}
      {/*{requiredIcon}*/}
      {infoElement}
    </label>
  )
}

export default InputLabel