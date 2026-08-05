import getUserRoles from "./getUserRoles.ts";
import type {UserRolesType} from "./index.constances.ts";

function userHasRole(role: UserRolesType) {
  const userRoles = getUserRoles()

  return userRoles.includes(role)
}

export default userHasRole;
