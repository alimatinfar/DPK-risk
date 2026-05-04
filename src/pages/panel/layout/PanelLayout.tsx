import {Outlet} from "react-router";
import PanelSideBar from "./PanelSideBar.tsx";
import PanelTopBar from "./PanelTopBar.tsx";
import {PANEL_CONTENT_PADDING_RIGHT} from "./PanelLayout.constances.ts";

function PanelLayout() {
  return (
    <>
      <PanelSideBar />

      <div className={`
        ${PANEL_CONTENT_PADDING_RIGHT} bg-white overflow-y-auto max-h-dvh
      `}>
        <PanelTopBar />

        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PanelLayout;