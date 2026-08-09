import type {PropsWithChildren, ReactNode} from "react";


type Props = PropsWithChildren & {
  title: string;
  headerEndAdornment?: ReactNode | string;
}

function CardWithHeader(
  {children, title, headerEndAdornment}: Props
) {
  return (
    <div className='flex flex-col border border-gray-200 rounded-lg overflow-hidden'>
      <div className='flex items-center justify-between bg-gray-50 h-15 px-4'>
        <span className='font-medium'>
          {title}
        </span>

        {headerEndAdornment || null}
      </div>

      <div className='bg-white p-4'>
        {children}
      </div>
    </div>
  );
}

export default CardWithHeader;
