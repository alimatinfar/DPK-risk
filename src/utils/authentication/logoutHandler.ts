import removeToken from "./removeToken.ts";
import {loadConfigFile} from "../../request/loadConfigFile/loadConfigFile.ts";
import getSSOConfigs from "./getSSOConfigs.ts";


async function logoutHandler() {
  const config = await loadConfigFile();
  const ssoConfigs = await getSSOConfigs()

  const params = new URLSearchParams({
    // id_token_hint: getToken() || '',
    redirect_uri: ssoConfigs.redirect_uri,
  });

  removeToken()

  if (!window?.location) return
  window.location.href = `${config.ssoUrl}connect/endsession?` + params
}

export default logoutHandler;
