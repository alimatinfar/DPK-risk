import {Outlet} from "react-router";

function PanelLayout() {
  return (
    <div>
      topbar
      sidebar
      <Outlet />
    </div>
  );
}

export default PanelLayout;