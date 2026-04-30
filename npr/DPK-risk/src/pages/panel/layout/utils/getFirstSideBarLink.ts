import {SIDEBAR_ITEMS} from "../PanelLayout.constances.ts";


function getFirstSideBarLink() {
  return SIDEBAR_ITEMS?.[0]?.children?.[0]?.link || '#'
}

export default getFirstSideBarLink;