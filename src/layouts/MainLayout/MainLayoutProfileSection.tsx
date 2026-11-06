import DropDown from "../../components/others/DropDown/DropDown.tsx";
import {useState} from "react";
import MainLayoutProfileDropDown from "./MainLayoutProfileDropDown/MainLayoutProfileDropDown.tsx";
import IconClickable from "../../components/others/Icon/IconClickable.tsx";
import ArrowIcon from "../../components/svg/ArrowIcon.tsx";
import useModalOpenBoolean from "../../hooks/modal/useModalOpenBoolean.ts";
import DisplayModal from "../../components/others/Modal/DisplayModal.tsx";
import MainLayoutProfileDropDownDeleteModal from "./MainLayoutProfileDropDown/MainLayoutProfileDropDownDeleteModal.tsx";
import UserIcon from "../../components/svg/UserIcon.tsx";
import {MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH} from "./MainLayoutProfileDropDown/index.constances";
import useMainLayoutProfileSection from "./hooks/useMainLayoutProfileSection.ts";
import getTokenInfo from "../../utils/authentication/getTokenInfo.ts";


type Props = {
  removeShadow?: boolean
}

function MainLayoutProfileSection(
  {removeShadow}: Props
) {

  const {
    profileData, profileLoading
  } = useMainLayoutProfileSection()

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const {
    openModalHandler: openLogoutModalHandler, shouldBeRemoved: logoutModalShouldBeRemoved,
    open: logoutModalOpen, closeModalHandler: closeLogoutModalHandler
  } = useModalOpenBoolean(false)

  const tokenInfo = getTokenInfo()
  const fullName = tokenInfo?.family_name || ''
  const userCode = tokenInfo?.['dpk/AdditionalInfo/PersonnelNo'] || ''

  return (
    <>
      <DropDown
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropDownElement={
          <MainLayoutProfileDropDown
            closeDropDown={() => setDropDownOpen(false)}
            openLogoutModalHandler={openLogoutModalHandler}
            profileData={profileData} profileLoading={profileLoading}
          />
        }
        origin="left" offset={5}
      >
        <IconClickable
          className={`
            flex items-center justify-between gap-x-2 px-1.5 bg-white dark:bg-dark-2 h-10 ${MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH} 
            ${removeShadow ? '' : 'shadow-base'}
          `}
          rounded='rounded-lg'
          hoverClass='hover:bg-slate-50 dark:hover:bg-dark-1'
        >
          <div className='flex items-center gap-x-1'>
            <div className='size-6 bg-primary dark:bg-transparent p-1 rounded-lg'>
              <UserIcon textColor="text-white" width='100%' height='100%' />
            </div>
            <span className="px-1 select-none text-sm">
              {fullName} ({userCode})
            </span>
          </div>
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
