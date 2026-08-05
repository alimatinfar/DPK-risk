import {getAdminSideBarItems} from "../index.constances.ts";


function getFirstAdminSideBarLink() {
  return getAdminSideBarItems()?.[0]?.children?.[0]?.link || '#'
}

export default getFirstAdminSideBarLink;
