import DropDown from "../../components/others/DropDown/DropDown.tsx";
import {useState} from "react";
import MainLayoutProfileDropDown from "./MainLayoutProfileDropDown/MainLayoutProfileDropDown.tsx";
import IconClickable from "../../components/others/Icon/IconClickable.tsx";
import ArrowIcon from "../../components/svg/ArrowIcon.tsx";
import UserCircleIcon from "../../components/svg/UserCircleIcon.tsx";
import useModalOpenBoolean from "../../hooks/modal/useModalOpenBoolean.ts";
import DisplayModal from "../../components/others/Modal/DisplayModal.tsx";
import MainLayoutProfileDropDownDeleteModal from "./MainLayoutProfileDropDown/MainLayoutProfileDropDownDeleteModal.tsx";
import UserIcon from "../../components/svg/UserIcon.tsx";
import Button from "../../components/Form/Button/Button.tsx";


function MainLayoutProfileSection() {

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const {
    openModalHandler: openLogoutModalHandler, shouldBeRemoved: logoutModalShouldBeRemoved,
    open: logoutModalOpen, closeModalHandler: closeLogoutModalHandler
  } = useModalOpenBoolean(false)

  return (
    <>
      <DropDown
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropDownElement={
          <MainLayoutProfileDropDown
            closeDropDown={() => setDropDownOpen(false)}
            openLogoutModalHandler={openLogoutModalHandler}
          />
        }
        origin="left" offset={23}
      >
        <IconClickable
          className="flex items-center space-x-1 px-1" rounded='rounded-md'
          hoverClass='hover:bg-gray-200'
        >
          <div className='size-8 bg-primary p-1 rounded-lg'>
            <UserIcon textColor="text-white"/>
          </div>
          <span className="px-1 select-none">
            کاربر سامانه
          </span>
          <ArrowIcon/>
        </IconClickable>
      </DropDown>

      <DisplayModal shouldBeRemoved={logoutModalShouldBeRemoved}>
        <MainLayoutProfileDropDownDeleteModal onClose={closeLogoutModalHandler} open={logoutModalOpen}/>
      </DisplayModal>
    </>
  );
}

export default MainLayoutProfileSection;