import type {ReactNode} from "react";


type Props = {
  titleElement: ReactNode;
  tabElement?: ReactNode;
}

function DashboardPageTitleWithTab(
  {titleElement, tabElement}: Props
) {
  return (
    <div className='w-full flex items-center justify-between gap-x-4'>
      <div>
        {titleElement}
      </div>

      <div className='flex-1 overflow-auto flex justify-end'>
        {tabElement}
      </div>
    </div>
  );
}

export default DashboardPageTitleWithTab;
