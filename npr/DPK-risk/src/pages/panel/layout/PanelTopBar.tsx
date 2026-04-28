import {
  PANEL_CONTENT_PADDING_RIGHT,
  PANEL_TOPBAR_HEIGHT,
  PANEL_TOPBAR_WIDTH
} from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";


function PanelTopBar() {
  return (
    <div className={`
      ${PANEL_TOPBAR_HEIGHT} ${PANEL_CONTENT_PADDING_RIGHT} ${Z_INDEXES.TOP_BAR}
      fixed top-0 right-0 left-0 w-full
    `}>
      top bar
    </div>
  );
}

export default PanelTopBar;