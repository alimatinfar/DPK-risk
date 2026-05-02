import React, {type ReactNode, useMemo} from "react";
import LogoutIcon from "../../../../components/svg/LogoutIcon.tsx";
import type {ProfileDropDownProps} from "../MainLayoutProfileDropDown.tsx";

type DropDownWithLinkItem = {
  link: string;
  onClick?: undefined;
};

type DropDownWithOnClickItem = {
  link?: undefined;
  onClick: () => void;
};

type DropDownItemsType = {
  name: string | ReactNode;
  icon: ReactNode;
} & (DropDownWithLinkItem | DropDownWithOnClickItem);

function useMainLayoutProfileDropDown(
  {openLogoutModalHandler}: Pick<ProfileDropDownProps, 'openLogoutModalHandler'>
) {

  const dropDownItems: DropDownItemsType[] = useMemo(function () {
    return [
      {
        name: <span className="text-red-500">خروج از حساب کاربری</span>,
        icon: <LogoutIcon className="h-5 w-5" />,
        onClick: openLogoutModalHandler,
      },
    ]
  }, [openLogoutModalHandler]);

  return {
    dropDownItems
  }
}

export default useMainLayoutProfileDropDown;