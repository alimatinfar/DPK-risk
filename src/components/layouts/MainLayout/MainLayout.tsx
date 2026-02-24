import { FC, useState } from "react";
import ToastContainer from "../../Toast/ToastContainer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { IMainLayoutProps, SidebarToggleProps } from "./MainLayout.type";

const MainLayout: FC<IMainLayoutProps> = ({ children, headerTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebar = (): void => {
    setSidebarOpen((prev) => !prev);
  };

  const sidebarProps: SidebarToggleProps = {
    sidebarisOpen: sidebarOpen,
    toggleSidebar: handleSidebar,
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-default">
      <Header title={headerTitle} {...sidebarProps} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebar} />
        <main className="flex-1 overflow-y-auto transition-all duration-500">
          <div className="min-h-full mx-auto">{children}</div>
        </main>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
