import React, {type ReactNode} from "react";
import type {PartialRecord} from "../../../types/PartialRecord";
import joinObjectValues from "../../../utils/joinObjectValues";

export type TagColorsType = 'primary' | 'green' | 'yellow' | 'red' | 'orange' | 'gray' | 'blue' | 'violet' | 'cyan'
export type TagVariantsType = 'filled' | 'fade'

export type TagProps = {
  text: string;
  color?: TagColorsType;
  variant?: TagVariantsType;
  rightIcon?: ReactNode,
};

function Tag({text, color = 'primary', variant = 'filled', rightIcon}: TagProps) {

  const colorStyles: Record<TagVariantsType, PartialRecord<TagColorsType, string>> = {
    filled: {
      primary: 'bg-primary text-white',
      blue: 'bg-blue-500 text-white',
      violet: 'bg-violet-600 text-white',
      gray: 'bg-gray-500 text-white',
      red: 'bg-red-500 text-white',
      yellow: 'bg-yellow-500 text-white',
      green: 'bg-green-500 text-white',
      orange: 'bg-orange-500 text-white',
      cyan: 'bg-cyan-500 text-white'
    },
    fade: {
      primary: 'bg-primary-50 text-primary',
      blue: 'bg-blue-50 text-blue-800',
      violet: 'bg-violet-50 text-violet-600',
      gray: 'bg-gray-100 text-gray-500',
      red: 'bg-red-50 text-red-500',
      yellow: 'bg-yellow-50 text-yellow-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-500',
      cyan: 'bg-cyan-50 text-cyan-800'
    }
  }

  const styles = {
    default: `p-1 text-sm rounded gap-1 ${rightIcon ? 'flex items-center' : ''}`,
    color: colorStyles[variant][color] || colorStyles.filled.primary
  }

  return (
    <span className={joinObjectValues(styles)}>
      {rightIcon}
      {text}
    </span>
  )
}

export default Tag