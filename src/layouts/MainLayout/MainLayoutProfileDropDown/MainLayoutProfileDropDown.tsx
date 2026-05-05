import LogoutIcon from "../../../components/svg/LogoutIcon"
import BankIcon from "../../../components/svg/BankIcon"
import {MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH} from "./index.constances";

export type ProfileDropDownProps = {
  closeDropDown: () => void;
  openLogoutModalHandler: () => void;
};

function MainLayoutProfileDropDown({closeDropDown, openLogoutModalHandler}: ProfileDropDownProps) {

  function logoutOnClick() {
    openLogoutModalHandler()
    closeDropDown();
  }

  return (
    <div className={`flex flex-col p-2 gap-y-2 w-full ${MAIN_LAYOUT_PROFILE_DROP_DOWN_MIN_WIDTH}`}>
      <div className='bg-gray-100 flex flex-col gap-y-2 p-2'>
        <p className='text-sm text-gray-700 pb-2 mb-2 border-b border-gray-200'>
          رئیس شعبه
        </p>

        <div className='flex flex-col gap-y-1'>
          <div className='flex items-center gap-x-1'>
            <BankIcon/>

            <span className='text-[11px] text-gray-700'>
              شعبه آزاد شهر (1293)
            </span>
          </div>

          <p className='text-gray-500 text-[11px]'>
            مدیریت شعب خراسان رضوی 09
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
