import {
  PANEL_CONTENT_PADDING_RIGHT,
  PANEL_TOPBAR_HEIGHT
} from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";
import MainLayoutProfileSection from "../../../layouts/MainLayout/MainLayoutProfileSection.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import useGetPageTitleFromSideBar from "./hooks/useGetPageTitleFromSideBar.ts";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";


function PanelTopBar() {

  const {pageTitle} = useGetPageTitleFromSideBar()

  return (
    <div className={`
      ${PANEL_TOPBAR_HEIGHT} ${PANEL_CONTENT_PADDING_RIGHT} ${Z_INDEXES.TOP_BAR}
      fixed top-0 right-0 left-0 w-full flex flex-col
    `}>
      <div className='flex items-center justify-between h-15 px-4'>
        <span
          className='font-semibold text-lg'
        >
          {pageTitle}
        </span>

        <MainLayoutProfileSection />
      </div>

      <div className='flex-1 flex items-center justify-between border-y border-gray-200 bg-[#DDE8F2] px-4'>
        <span></span>

        <Link to={ROUTER_LINKS.SEARCH}>
          <Button
            variant='default' color='white' rightIcon={<SearchIcon textColor='text-gray-500' />}
          >
            ویرایش جستجو
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PanelTopBar;