import {Outlet} from "react-router";
import PanelSideBar from "./PanelSideBar.tsx";
import PanelTopBar from "./PanelTopBar.tsx";
import {PANEL_CONTENT_PADDING_RIGHT} from "./PanelLayout.constances.ts";

function PanelLayout() {
  return (
    <div className='flex items-start w-full max-w-[1920px] mx-auto'>
      <PanelSideBar />

      <div className={`
        bg-white max-h-dvh flex-1 flex flex-col
      `}>
        <PanelTopBar />

        <div className='flex-1 p-4 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PanelLayout;