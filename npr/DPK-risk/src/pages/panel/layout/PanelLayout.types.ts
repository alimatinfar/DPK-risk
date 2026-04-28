import type {IconFunctionType} from "../../../components/svg/IconPropsType.ts";

export type PanelSideBarItemType = {
  icon?: IconFunctionType;
  link?: string;
  label: string;
}

export type PanelSideBarItemsListType = (PanelSideBarItemType & {
  children?: PanelSideBarItemType[]
})[]