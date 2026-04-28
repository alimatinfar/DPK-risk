import {PANEL_SIDEBAR_WIDTH} from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";
import SaderatLogoAndTypo from "../../../components/svg/logo/SaderatLogoAndTypo.tsx";

function PanelSideBar() {
  return (
    <div
      className={`
        ${PANEL_SIDEBAR_WIDTH}  ${Z_INDEXES.SIDEBAR} fixed right-0 top-0 h-dvh 
        py-8 px-4
      `}
    >
      <div className='flex flex-col gap-y-3'>
        <SaderatLogoAndTypo />

        <p className='text-primary font-semibold'>
          سامانه مدیریت ریسک مشتریان
        </p>
      </div>
    </div>
  )
}

export default PanelSideBar;