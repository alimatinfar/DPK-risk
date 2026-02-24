import { FC, useEffect, useState } from "react";
import { LabelValue } from "../../LabelValue";
import { helper } from "../../../utils/helper";
import { UserData, UserLogOption } from "./Footer.type";

const Footer: FC = () => {
  const [user, setUser] = useState<UserLogOption & { userType: string }>({
    branchCode: "",
    branchName: "",
    reportDate: "",
    reportTime: "",
    countOnlineUserChiled: 0,
    userType: "",
  });

  useEffect(() => {
    const storedUser = helper.getUser();
    if (storedUser) {
      try {
        const u: UserData = JSON.parse(storedUser);
        setUser({
          ...u.userLogOption,
          userType: u.userInfo.userType,
        });
      } catch (error) {
        console.error("خطا در پارس کردن اطلاعات کاربر:", error);
      }
    }
  }, []);

  return (
    <footer className="bg-primary-50 shadow-sm border-t">
      <div className="flex items-center justify-between flex-wrap gap-4 text-xs py-3 px-4 ">
        <LabelValue labelClassName="text-xs" valueClassName="text-xs font-medium" label="تاریخ روز" value={helper.getCurrentDate()} />
        <LabelValue labelClassName="text-xs" valueClassName="text-xs font-medium" label="تاریخ آخرین گزارش‌گیری" value={user.reportDate} />
        <LabelValue labelClassName="text-xs" valueClassName="text-xs font-medium" label="ساعت گزارش" value={user.reportTime} />
        <LabelValue
          labelClassName="text-xs"
          valueClassName="text-xs font-medium"
          label="کد شعبه صادر کننده گزارش"
          value={user.branchCode}
        />
        <LabelValue
          labelClassName="text-xs"
          valueClassName="text-xs font-medium"
          label="نام شعبه صادر کننده گزارش"
          value={user.branchName}
        />
        <LabelValue labelClassName="text-xs" valueClassName="text-xs font-medium" label="کاربر" value={user.userType} />
        <LabelValue
          labelClassName="text-xs"
          valueClassName="text-xs font-medium"
          label="تعداد کاربران فعال"
          value={user.countOnlineUserChiled.toString()}
        />
      </div>
    </footer>
  );
};

export default Footer;
