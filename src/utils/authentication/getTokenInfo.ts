import parseJWT from "./parseJWT.ts";
import getToken from "./getToken.ts";

function getTokenInfo() {
  return parseJWT(String(getToken()))
}

export default getTokenInfo;
