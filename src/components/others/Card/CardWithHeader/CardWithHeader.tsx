import type {PropsWithChildren, ReactNode} from "react";


type Props = PropsWithChildren & {
  title: string;
  headerEndAdornment?: ReactNode | string;
  className?: string;
  childrenClassName?: string;
  customHeaderRender?: ReactNode;
}

function CardWithHeader(
  {children, title, headerEndAdornment, className, childrenClassName, customHeaderRender}: Props
) {
  return (
    <div className={`flex flex-col border border-gray-200 rounded-lg overflow-hidden ${className || ''}`}>
      <div className={`
        ${customHeaderRender ? '' : 'flex items-center justify-between h-15'} 
        p-4 border-b border-gray-200 bg-gray-50
      `}>
        {customHeaderRender || (
          <>
            <span className='font-medium'>
              {title}
            </span>

            {headerEndAdornment || null}
          </>
        )}
      </div>

      <div className={`${childrenClassName || 'bg-white p-4'}`}>
        {children}
      </div>
    </div>
  );
}

export default CardWithHeader;
