import {SIDEBAR_ITEMS} from "../PanelLayout.constances.ts";
import type {PanelSideBarItemsListType} from "../PanelLayout.types.ts";
import {useLocation} from "react-router";
import {useEffect, useMemo} from "react";


function useGetPageTitleFromSideBar() {

  const location = useLocation()

  function getPageTitleFromSideBarHandle() {
    let title = ''

    function findPageTitle(items: PanelSideBarItemsListType) {
      items.forEach(item => {
        if (item.link && location.pathname.includes(item.link || '')) {
          title = item.label
        }
        if (item?.children) findPageTitle(item.children)
      })
    }

    findPageTitle(SIDEBAR_ITEMS)

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