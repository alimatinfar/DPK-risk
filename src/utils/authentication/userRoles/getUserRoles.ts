import getTokenInfo from "../getTokenInfo.ts";

function getUserRoles() {
  const tokenInfo = getTokenInfo()
  if (!tokenInfo) return []

  return tokenInfo['dpk/Roles']?.split(',')
}

export default getUserRoles;
