import { PropsWithChildren } from "react";

export interface IMainLayoutProps extends PropsWithChildren {
  children: React.ReactNode;
  headerTitle: string;
}

export interface SidebarToggleProps {
  sidebarisOpen: boolean;
  toggleSidebar: () => void;
}

export interface SidebarProps extends SidebarToggleProps {
  isOpen: boolean;
}
