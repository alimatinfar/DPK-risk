import { Link } from "react-router";
import {DarkmodToggle} from "../../DarkmodToggle";
import ProfileDropDown from "../../ProfileDropDown/ProfileDropDown";
import logo from "../../../assets/images/logo.png";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { IHeaderProps } from "./Header.type";
import { FC } from "react";

const Header: FC<IHeaderProps> = ({ toggleSidebar, sidebarisOpen,title='عنوان سامانه ...' }) => {
  return (
    <header className="bg-primary-50  shadow-sm border-b ">
      <div className="flex items-center justify-between py-2 px-2 mx-auto md:px-8">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              width={60}
              alt="Logo"
              className="dark:filter dark:brightness-0 dark:invert"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg"
            aria-label={sidebarisOpen ? "بستن منو" : "باز کردن منو"}
          >
            {sidebarisOpen ? (
              <BiMenuAltRight className="text-3xl" />
            ) : (
              <BiMenu className="text-3xl" />
            )}
          </button>
        </div>
        <div className="flex-1 flex px-4">
          <p className="">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <DarkmodToggle handleDrakMode={() => {}} />
          <ProfileDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
