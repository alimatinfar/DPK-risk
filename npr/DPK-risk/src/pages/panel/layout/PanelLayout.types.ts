import type {IconFunctionType} from "../../../components/svg/IconPropsType.ts";

export type PanelSideBarItemType = {
  icon?: IconFunctionType;
  link?: string;
  label: string;
}

export type PanelSideBarItemByChildrenType = PanelSideBarItemType & {
  children?: PanelSideBarItemType[]
}

export type PanelSideBarItemsListType = PanelSideBarItemByChildrenType[]