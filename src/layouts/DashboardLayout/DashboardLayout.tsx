import DashboardSideBar, {type DashboardSideBarProps} from "./DashboardSideBar.tsx";
import {Outlet} from "react-router";
import type {ReactNode} from "react";


type Props = {
  topBar: ReactNode;
} & Pick<DashboardSideBarProps, 'sideBarItems'>

function DashboardLayout(
  {
    sideBarItems, topBar
  }: Props
) {
  return (
    <div className='flex items-start w-full max-w-[1920px] mx-auto'>
      <DashboardSideBar sideBarItems={sideBarItems}/>

      <div className={`
        bg-white max-h-dvh flex-1 flex flex-col overflow-x-auto
      `}>
        {topBar}

        <div className='flex-1 p-4 overflow-y-auto'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
