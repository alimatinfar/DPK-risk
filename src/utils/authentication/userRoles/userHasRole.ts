import getUserRoles from "./getUserRoles.ts";
import type {UserRolesType} from "./index.constances.ts";

function userHasRole(role: UserRolesType) {
  const userRoles = getUserRoles()

  // TODO if dosent have 'dpk/Roles' return true for now

  return userRoles ? userRoles.includes(role) : true
  
  // TODO chenge it when dont have eny userRoles dosent crash

  // return userRoles?.includes(role)
  // return userRoles.includes(role)
}

export default userHasRole;
