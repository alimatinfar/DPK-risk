import type {IconFunctionType} from "../../components/svg/IconPropsType.ts";

export type DashboardSideBarItemType = {
  icon?: IconFunctionType;
  link?: string;
  label: string;
}

export type DashboardSideBarItemByChildrenType = DashboardSideBarItemType & {
  children?: DashboardSideBarItemType[]
}

export type DashboardSideBarItemsListType = DashboardSideBarItemByChildrenType[]
