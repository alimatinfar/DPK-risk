/* eslint-disable no-undef */
import { use } from 'react';
import { baseService } from '../services/baseService'
export const helper = {
  isDebug,
  clientSet,
  clientGet,
  clientRemove,
  getUser,
  getCurrentDate,
  checkServerAuth
};
function isDebug() {
  return process.env.NODE_ENV === "development" ? true : false;
}
function clientSet(key: string, val: string) {
  sessionStorage.setItem(key, val);
}
function clientGet(key: string) {
  return sessionStorage.getItem(key);
}
function clientRemove(key: string) {
  sessionStorage.removeItem(key);
}
function checkServerAuth() {
  const t = clientGet('appToken')
  return t ? true : false
}
function getUser() {

  baseService.postServer('userprofile').then(r => {
    isDebug() &&
      console.log('getUser:userProfile:r', r)
    const user = {
      userInfo: {
        id: 0,
        userDisplayName: "احسان خلیلی",
        userPost: "",
        userType: "کاربر ادمین",
      },
      userLogOption: {
        branchCode: "0000",
        branchName: "----",
        reportDate: "----/--/--",
        reportTime: "--:--",
        countOnlineUserChiled: 1,
      },
    };
    if (r.success) {
        user.userInfo.id=r.data.id;
        user.userInfo.userDisplayName=r.data.displayName
        user.userInfo.userType=r.data.username
    }

    clientSet("userObj", JSON.stringify(user));
  });
  return clientGet("userObj");
}

function getCurrentDate() {
  const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  return jalaliDate;
}


