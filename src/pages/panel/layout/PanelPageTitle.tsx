import type { PropsWithChildren } from "react";
import useGetPageTitleFromSideBar from "./hooks/useGetPageTitleFromSideBar.ts";


function PanelPageTitle(
  { children }: PropsWithChildren
) {

  const { pageTitle } = useGetPageTitleFromSideBar()

  return (
    <div className="flex gap-2 items-center w-full">
      <p className='text-lg font-semibold'>
        {pageTitle}
      </p>
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  )
}

export default PanelPageTitle;