export interface UserLogOption {
  branchCode: string;
  branchName: string;
  reportDate: string;
  reportTime: string;
  countOnlineUserChiled: number;
}

export interface UserInfo {
  userType: string;
}

export interface UserData {
  userLogOption: UserLogOption;
  userInfo: UserInfo;
}
