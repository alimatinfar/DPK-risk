import {Outlet} from "react-router";
import PanelSideBar from "./PanelSideBar.tsx";
import PanelTopBar from "./PanelTopBar.tsx";
import {PANEL_CONTENT_PADDING_RIGHT} from "./PanelLayout.constances.ts";

function PanelLayout() {
  return (
    <div className='flex items-start w-full max-w-[1920px] mx-auto'>
      <PanelSideBar />

      <div className={`
        bg-white overflow-y-auto max-h-dvh flex-1
      `}>
        <PanelTopBar />

        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PanelLayout;