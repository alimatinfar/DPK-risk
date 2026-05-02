import {getSideBarItems} from "../PanelLayout.constances.ts";


function getFirstSideBarLink() {
  return getSideBarItems()?.[0]?.children?.[0]?.link || '#'
}

export default getFirstSideBarLink;