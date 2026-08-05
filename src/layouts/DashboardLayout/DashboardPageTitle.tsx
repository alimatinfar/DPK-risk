import type { PropsWithChildren } from "react";
import useGetPageTitleFromSideBar from "./hooks/useGetPageTitleFromSideBar.ts";
import BackIconClickable from "../../components/others/Icon/BackIconClickable.tsx";
import {useNavigate} from "react-router";
import type {DashboardSideBarProps} from "./DashboardSideBar.tsx";


export type DashboardPageTitleProps = {
  title?: string;
  hasBack?: boolean;
} & PropsWithChildren & Pick<DashboardSideBarProps, 'sideBarItems'>

function DashboardPageTitle(
  {title, hasBack, children, sideBarItems}: DashboardPageTitleProps
) {

  const { pageTitle } = useGetPageTitleFromSideBar({sideBarItems})

  const navigate = useNavigate()

  const titleElement = (
    <div className="flex gap-2 items-center w-full">
      <p className='text-lg font-semibold'>
        {title || pageTitle || ''}
      </p>
      <div className="flex justify-end flex-1">
        {children}
      </div>
    </div>
  )

  return hasBack ? (
    <div className='flex items-center gap-x-2'>
      <BackIconClickable onBackRoute={() => navigate(-1)}/>

      {titleElement}
    </div>
  ) : titleElement
}

export default DashboardPageTitle;
