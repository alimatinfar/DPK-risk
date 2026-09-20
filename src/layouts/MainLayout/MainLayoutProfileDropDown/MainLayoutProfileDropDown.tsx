import LogoutIcon from "../../../components/svg/LogoutIcon"
import BankIcon from "../../../components/svg/BankIcon"
import {MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH} from "./index.constances";
import type {ProfileResponseType} from "../index.types.ts";
import getTokenInfo from "../../../utils/authentication/getTokenInfo.ts";


export type ProfileDropDownProps = {
  closeDropDown: () => void;
  openLogoutModalHandler: () => void;
  profileData: ProfileResponseType | undefined;
};

function MainLayoutProfileDropDown(
  {
    closeDropDown, openLogoutModalHandler, profileData
  }: ProfileDropDownProps
) {

  const tokenInfo = getTokenInfo()
  const jobTitle = tokenInfo?.['dpk/AdditionalInfo/JobTitle'] || ''
  const branchName = profileData?.name
  const branchCode = tokenInfo?.['dpk/AdditionalInfo/BranchCode']
  const placeName = `${profileData?.provinceName || ''} ${profileData?.cityName || ''}`

  function logoutOnClick() {
    openLogoutModalHandler()
    closeDropDown();
  }

  return (
    <div className={`flex flex-col p-2 gap-y-2 w-full ${MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH}`}>
      <div className='bg-gray-100 flex flex-col p-2'>
        <p className='text-sm text-gray-700 pb-2 mb-2 border-b border-gray-200'>
          {jobTitle}
        </p>

        <div className='flex flex-col gap-y-1'>
          <div className='flex items-center gap-x-1'>
            <BankIcon/>

            <span className='text-[11px] text-gray-700'>
              {branchName} ({branchCode})
            </span>
          </div>

          <p className='text-gray-500 text-[11px]'>
            {placeName}
          </p>
        </div>
      </div>

      <div
        className='flex items-center gap-x-1 hover:bg-red-50 duration-200 cursor-pointer p-2 rounded-lg'
        onClick={logoutOnClick}
      >
        <LogoutIcon className="h-5 w-5"/>

        <span className="text-red-500 text-sm">خروج از حساب کاربری</span>
      </div>
    </div>
  );
}

export default MainLayoutProfileDropDown;
