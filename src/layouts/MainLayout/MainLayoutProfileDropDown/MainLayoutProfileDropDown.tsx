import LogoutIcon from "../../../components/svg/LogoutIcon"
import BankIcon from "../../../components/svg/BankIcon"
import {MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH} from "./index.constances";
import type {ProfileResponseType} from "../index.types.ts";
import getTokenInfo from "../../../utils/authentication/getTokenInfo.ts";
import Loading from "../../../components/others/Loading/Loading.tsx";


export type ProfileDropDownProps = {
  closeDropDown: () => void;
  openLogoutModalHandler: () => void;
  profileData: ProfileResponseType | undefined;
  profileLoading?: boolean;
};

function MainLayoutProfileDropDown(
  {
    closeDropDown, openLogoutModalHandler, profileData, profileLoading
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
      <div className='bg-slate-100 dark:bg-dark-1 flex flex-col p-2 rounded-lg'>
        <p className='text-sm text-slate-700 dark:text-custom-gray-1 pb-2 mb-2 border-b border-slate-200 dark:border-dark-2'>
          {jobTitle}
        </p>

        {profileLoading ? <Loading size='sm'/> : (
          <div className='flex flex-col gap-y-1'>
            <div className='flex items-center gap-x-1'>
              <BankIcon/>

              <span className='text-[11px] text-slate-700 dark:text-custom-gray-1'>
                {branchName} ({branchCode})
              </span>
            </div>

            <p className='text-slate-500 dark:text-gray-400 text-[11px]'>
              {placeName}
            </p>
          </div>
        )}
      </div>

      <div
        className='flex items-center gap-x-1 hover:bg-red-50 dark:hover:bg-dark-1 duration-200 cursor-pointer p-2 rounded-lg'
        onClick={logoutOnClick}
      >
        <LogoutIcon className="h-5 w-5" textColor='text-red-500 dark:text-white'/>

        <span className="text-red-500 dark:text-white text-sm">خروج از حساب کاربری</span>
      </div>
    </div>
  );
}

export default MainLayoutProfileDropDown;
