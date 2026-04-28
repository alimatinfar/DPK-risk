import {PANEL_SIDEBAR_WIDTH} from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";

function PanelSideBar() {
  return (
    <div
      className={`
        ${PANEL_SIDEBAR_WIDTH}  ${Z_INDEXES.SIDEBAR} fixed right-0 top-0 h-dvh bg-green-50
      `}
    >
      panel sidebar
    </div>
  )
}

export default PanelSideBar;