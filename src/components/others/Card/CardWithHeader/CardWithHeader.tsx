import type {PropsWithChildren, ReactNode} from "react";


export type CardWithHeaderProps = PropsWithChildren & {
  title?: string;
  headerEndAdornment?: ReactNode | string;
  className?: string;
  childrenClassName?: string;
  customHeaderRender?: ReactNode;
  headerPadding?: string;
  headerHeight?: string;
}

function CardWithHeader(
  {
    children, title, headerEndAdornment, className, childrenClassName, customHeaderRender,
    headerPadding, headerHeight
  }: CardWithHeaderProps
) {
  return (
    <div className={`flex flex-col border border-slate-200 dark:border-dark-2 rounded-lg overflow-hidden ${className || ''}`}>
      <div className={`
        ${customHeaderRender ? '' : `flex items-center justify-between ${headerHeight || 'h-15'}`} 
        ${headerPadding || 'p-4'} border-b border-slate-200 bg-slate-50 dark:bg-dark-2 dark:border-dark-2
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

      <div className={`${childrenClassName || 'bg-white dark:bg-dark-6 p-4'}`}>
        {children}
      </div>
    </div>
  );
}

export default CardWithHeader;
