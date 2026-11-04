import getUserRoles from "./getUserRoles.ts";
import type {UserRolesType} from "./index.constances.ts";

function userHasRole(role: UserRolesType) {
  const userRoles = getUserRoles()

  // TODO

  return userRoles ? userRoles.includes(role) : "amlradminrole"
}

export default userHasRole;
