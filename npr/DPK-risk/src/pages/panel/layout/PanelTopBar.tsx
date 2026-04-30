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
import useSearchPageResultCard from "../../search/result/hooks/useSearchPageResultCard.ts";
import getActivePersonData from "../utils/getActivePersonData.ts";
import getPersonIconByType from "../../search/form/utils/getPersonIconByType.ts";


function PanelTopBar() {

  const {pageTitle} = useGetPageTitleFromSideBar()

  const activePersonData = getActivePersonData()

  const {
    fields
  } = useSearchPageResultCard({
    data: activePersonData
  })

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

        <MainLayoutProfileSection/>
      </div>

      <div className='flex-1 flex items-center justify-between gap-x-4 border-y border-gray-200 bg-[#DDE8F2] px-4'>
        <div className='flex items-center gap-x-12'>
          <div className='flex items-center gap-x-2'>
            {getPersonIconByType(activePersonData.type)({})}

            <span className='text-gray-900 '>
              {activePersonData?.name}
            </span>
          </div>

          {fields.map((field, index) => {
            return (
              <div
                key={index}
                className='flex items-center gap-x-2 '
              >
                <span className='text-xs text-gray-500'>
                  {field.label}:
                </span>
                <span className='text-sm text-gray-900'>
                  {field.value}
                </span>
              </div>
            )
          })}
        </div>

        <Link to={ROUTER_LINKS.SEARCH}>
          <Button
            variant='default' color='white' rightIcon={<SearchIcon textColor='text-gray-500'/>}
          >
            ویرایش جستجو
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PanelTopBar;