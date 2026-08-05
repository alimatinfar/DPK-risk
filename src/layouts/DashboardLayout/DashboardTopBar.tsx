import type {ChildrenAndClassNamePropsType} from "../../types/ChildrenPropsType.tsx";
import SidebarToggle from "../../components/svg/sidebar/SidebarToggle.tsx";
import MainLayoutProfileSection from "../MainLayout/MainLayoutProfileSection.tsx";
import useDashboardSidebar from "./hooks/useDashboardSidebar.tsx";


type Props = {
  children?: ChildrenAndClassNamePropsType['children'];
  title: string;
}

function DashboardTopBar(
  {children, title}: Props
) {

  const { toggleSidebar } = useDashboardSidebar();

  return (
    <div
      className={`
      w-full flex flex-col
    `}
    >
      <div className="flex items-center justify-between h-15 pl-4 py-2 border-b border-gray-200">
        <div className="flex items-center justify-between gap-2">
          <SidebarToggle
            onClick={() => {
              toggleSidebar();
            }}
          />

          <p className="text-primary font-semibold text-xl">{title}</p>
        </div>

        <MainLayoutProfileSection removeShadow />
      </div>

      {children}
    </div>
  );
}

export default DashboardTopBar;
