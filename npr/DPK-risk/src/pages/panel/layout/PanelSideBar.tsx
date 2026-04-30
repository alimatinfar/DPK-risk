import {PANEL_SIDEBAR_WIDTH, SIDEBAR_ITEMS} from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";
import SaderatLogoAndTypo from "../../../components/svg/logo/SaderatLogoAndTypo.tsx";
import {Link, useLocation} from "react-router";

function PanelSideBar() {

  const location = useLocation()

  return (
    <div
      className={`
        ${PANEL_SIDEBAR_WIDTH} ${Z_INDEXES.SIDEBAR} fixed right-0 top-0 h-dvh 
        py-8 px-4 flex flex-col
      `}
    >
      <div className='flex flex-col gap-y-3 border-b border-gray-200 pb-4'>
        <SaderatLogoAndTypo/>

        <p className='text-primary font-semibold'>
          سامانه مدیریت ریسک مشتریان
        </p>
      </div>

      <div className='flex-1 overflow-auto scroll-thin'>
        {SIDEBAR_ITEMS.map((mainItem, mainIndex) => (
          <div
            key={mainIndex}
            className={`flex flex-col gap-y-3 pt-4 ${mainIndex === 0 ? '' : 'mt-4 border-t border-gray-200'}`}
          >
          <span className='text-xs text-gray-500'>
            {mainItem.label}
          </span>

            <div className='pr-4 flex flex-col gap-y-2'>
              {mainItem.children && mainItem.children?.map((childItem, childIndex) => {

                const isActive = location.pathname.includes(childItem?.link || '')

                return (
                  <Link
                    to={childItem.link || ''}
                    key={childIndex}
                    className={`
                    flex items-center gap-x-2 p-2  duration-200 rounded
                    ${isActive ? 'bg-accent' : 'hover:bg-gray-100'}
                  `}
                  >
                    {childItem.icon && (
                      <childItem.icon textColor={isActive ? 'text-white' : `text-gray-500`} />
                    )}

                    <span className={`text-sm  flex-1 ${isActive ? 'text-white' : 'text-gray-700'}`}>
                    {childItem.label}
                  </span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PanelSideBar;