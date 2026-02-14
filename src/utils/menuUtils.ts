import {
  TbUserDollar,
  TbReportMoney,
  TbReportSearch,
  TbReport,
  TbZoomMoney,
  TbShieldDollar,
} from "react-icons/tb";
import { auth } from "../services/authService";
type IconKey = keyof typeof iconMap;

interface SubmenuItem {
  childrens?: SubmenuItem[];
}

interface MenuItem {
  icon: IconKey;
  submenu: SubmenuItem[];
}

const iconMap = {
  TbUserDollar,
  TbReportMoney,
  TbReportSearch,
  TbReport,
  TbZoomMoney,
  TbShieldDollar,
};

interface ProcessedSubmenuItem extends Omit<SubmenuItem, "childrens"> {
  childrens: SubmenuItem[];
}

export interface ProcessedMenuItem extends Omit<MenuItem, "icon" | "submenu"> {
  icon: { component: typeof TbUserDollar; size: number } | null;
  submenu: ProcessedSubmenuItem[];
}

export const getMenuItems = async (): Promise<ProcessedMenuItem[]> => {
  try {
    const response = await auth.getMenus();
  if (!response.success) {
      throw new Error(`HTTP error! status: ${response.errors}`);
    }
    
    const data: MenuItem[] = response.data;

    const processedData: ProcessedMenuItem[] = data.map((item) => ({
      ...item,
      icon: iconMap[item.icon]
        ? { component: iconMap[item.icon], size: 25 }
        : null,
      submenu: item.submenu.map((subItem) => ({
        ...subItem,
        childrens: subItem.childrens || [],
      })),
    }));
  
    return processedData;
  } catch (error) {
    console.error("Error loading menu items:", error);
    return [];
  }
};