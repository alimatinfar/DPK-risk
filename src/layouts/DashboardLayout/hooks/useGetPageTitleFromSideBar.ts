import {useLocation} from "react-router";
import {useEffect, useMemo} from "react";
import type {DashboardSideBarProps} from "../DashboardSideBar.tsx";
import type {DashboardSideBarItemsListType} from "../index.types.ts";


function useGetPageTitleFromSideBar(
  {sideBarItems}: Pick<DashboardSideBarProps, 'sideBarItems'>
) {

  const location = useLocation()

  function getPageTitleFromSideBarHandle() {
    let title = ''

    function findPageTitle(items: DashboardSideBarItemsListType) {
      items.forEach(item => {
        if (item.link && location.pathname.includes(item.link || '')) {
          title = item.label
        }
        if (item?.children) findPageTitle(item.children)
      })
    }

    findPageTitle(sideBarItems)

    return title
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [location.pathname]);

  const pageTitle = useMemo(() => getPageTitleFromSideBarHandle(), [location.pathname])

  return {
    pageTitle
  }
}

export default useGetPageTitleFromSideBar;
