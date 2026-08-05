import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout.tsx";
import {getPanelSideBarItems} from "./PanelLayout.constances.ts";
import PanelTopBar from "./PanelTopBar.tsx";


function PanelLayout() {
  return (
    <DashboardLayout
      sideBarItems={getPanelSideBarItems()}
      topBar={<PanelTopBar />}
    />
  );
}

export default PanelLayout;
