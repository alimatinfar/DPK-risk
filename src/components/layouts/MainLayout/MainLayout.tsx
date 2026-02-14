import { FC, useState, } from "react";
import ToastContainer from "../../Toast/ToastContainer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { IMainLayoutProps, SidebarToggleProps } from "./MainLayout.type";
const MainLayout: FC<IMainLayoutProps> = ({ serverless=false,children,headerTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
 

  const handleSidebar = (): void => {
    setSidebarOpen((prev) => !prev);
  };

  const sidebarProps: SidebarToggleProps = {
    sidebarisOpen: sidebarOpen,
    toggleSidebar: handleSidebar,
  };

  return (
    <div className="flex flex-col min-h-screen bg-default">
      <Header title={headerTitle} {...sidebarProps} />

      <div className="flex flex-1 overflow-hidden pt-[74px] pb-14">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebar}/>

        <main
          className={`flex-1 overflow-hidden transition-all duration-500 ${
            sidebarOpen ? "mr-60" : "mr-12"
          }`}
        >
          <div className="h-full mx-auto px-1 py-2">{children}</div>
        </main>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
