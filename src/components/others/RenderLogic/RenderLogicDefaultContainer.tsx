import {type ReactNode} from "react";


export type RenderLogicDefaultContainerProps = {
  children: ReactNode;
  minHeight?: string;
  align?: 'items-center' | 'items-start';
}

function RenderLogicDefaultContainer(
  {children, minHeight, align}: RenderLogicDefaultContainerProps
) {
  return (
    <div className={`
      flex-1 w-full h-full flex justify-center text-center
      ${minHeight || 'min-h-[300px]'} ${align || 'items-center'}
    `}>
      {children}
    </div>
  )
}

export default RenderLogicDefaultContainer
