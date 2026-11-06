import DashboardSideBar, {type DashboardSideBarProps} from "./DashboardSideBar.tsx";
import {Outlet} from "react-router";
import type {ReactNode} from "react";
import type {MenuProps} from "../../components/others/Menu/Menu.tsx";


type Props = {
  topBar: ReactNode;
  sideBarEndAdornment?: DashboardSideBarProps['endAdornment'];
} & Pick<DashboardSideBarProps, 'sideBarItems'> & Pick<MenuProps, 'bottomLogoRender'>

function DashboardLayout(
  {
    sideBarItems, topBar, sideBarEndAdornment, bottomLogoRender
  }: Props
) {
  return (
    <div className='flex items-start w-full max-w-[1920px] mx-auto'>
      <DashboardSideBar
        sideBarItems={sideBarItems}
        endAdornment={sideBarEndAdornment}
        bottomLogoRender={bottomLogoRender}
      />

      <div className={`
        bg-white dark:bg-dark-1 max-h-dvh flex-1 flex flex-col overflow-x-auto
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
