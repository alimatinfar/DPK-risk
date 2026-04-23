import React, {useEffect, useRef} from "react";
import type {TabType} from "./Tab";
import useDetectResizingAtFirstPainting from "../../../hooks/useDetectResizingAtFirstPainting.ts";


const wrapperPaddingRight = 4

type TabOptionType = {
  onClick: () => void;
  index: number;
  isActive: boolean;
  onChangeActiveSpan: (width: number, right: number) => void;
  title?: TabType['title'];
  className?: string;
}

function TabOption(
  {onClick, index, isActive, onChangeActiveSpan, title, className}: TabOptionType
) {

  const buttonRef = useRef<HTMLButtonElement>(null as unknown as HTMLButtonElement)

  function detectElementSize() {
    const offsetWidth = buttonRef?.current?.offsetWidth

    const buttonRight = buttonRef?.current?.getBoundingClientRect()?.right || 0
    const wrapperRight = buttonRef?.current?.closest('div')?.getBoundingClientRect()?.right || 0
    const right = wrapperRight - buttonRight + wrapperPaddingRight

    if (isActive && offsetWidth) {
      onChangeActiveSpan(offsetWidth, right)
    }
  }

  useDetectResizingAtFirstPainting({elementRef: buttonRef, callback: detectElementSize})

  useEffect(function () {
    detectElementSize()
  }, [isActive])

  return (
    <button
      type='button'
      title={title}
      onClick={onClick} className={`
       py-1 px-2 flex-shrink-0 cursor-pointer z-10 select-none snap-start text-center truncate duration-200
       relative ${isActive ? 'font-medium text-gray-900' : 'text-gray-700'} ${className || ''}`}
      ref={(el) => {
        buttonRef.current = el as HTMLButtonElement
      }}
    >
      {title}
    </button>
  );
};

export default TabOption;