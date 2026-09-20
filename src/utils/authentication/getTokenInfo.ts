import parseJWT from "./parseJWT.ts";
import getToken from "./getToken.ts";

type TokenInfoType = {
  "nbf": number
  "exp": number
  "iss": string;
  "aud": string;
  "nonce": string;
  "iat": number
  "s_hash": string;
  "sid": string;
  "sub": string;
  "auth_time": number
  "idp": string;
  "name": string;
  "family_name": string;
  "dpk/AdditionalInfo/PersonnelNo": string;
  "dpk/AdditionalInfo/JobCode": string;
  "dpk/AdditionalInfo/JobTitle": string;
  "dpk/AdditionalInfo/ZoneCode": string;
  "dpk/AdditionalInfo/DomainCode": string;
  "dpk/AdditionalInfo/BranchCode": string;
  "dpk/AdditionalInfo/regionCode": string;
  "dpk/AdditionalInfo/ExpireDate": string;
  "dpk/AdditionalInfo/StatusJob": string;
  "dpk/Roles": string;
  "dpk/Permissions": string;
  "uid": string;
  "pwdMC": string;
  "amr": string[]
}

function getTokenInfo(): TokenInfoType {
  return parseJWT(String(getToken()))
}

export default getTokenInfo;
