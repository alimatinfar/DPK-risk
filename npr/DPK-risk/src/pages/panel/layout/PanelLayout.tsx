import {Outlet} from "react-router";
import PanelSideBar from "./PanelSideBar.tsx";
import PanelTopBar from "./PanelTopBar.tsx";
import {PANEL_CONTENT_PADDING_RIGHT, PANEL_CONTENT_PADDING_TOP} from "./PanelLayout.constances.ts";

function PanelLayout() {
  return (
    <>
      <PanelSideBar />

      <PanelTopBar />

      <div className={`
        ${PANEL_CONTENT_PADDING_TOP} ${PANEL_CONTENT_PADDING_RIGHT}
      `}>
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PanelLayout;