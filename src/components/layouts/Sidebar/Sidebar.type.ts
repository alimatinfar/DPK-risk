export interface IconComponentProps {
  size?: number | string;
}

export interface MenuIcon {
  component: React.ComponentType<IconComponentProps>;
  size?: number | string;
}

export interface MenuItem {
  id: string | number;
  title: string;
  icon?: MenuIcon;
  disabled?: boolean;
  submenu: SubMenuItem[];
}

export interface SubMenuItem {
  id: string | number;
  title: string;
  to?: string;
  disabled?: boolean;
  childrens: ChildMenuItem[];
}

export interface ChildMenuItem {
  id: string | number;
  title: string;
  to: string;
  disabled?: boolean;
}

export interface ISidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
