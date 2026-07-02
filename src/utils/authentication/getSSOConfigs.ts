import generateUUID from "../generateUUID.ts";
import {loadConfigFile} from "../../request/loadConfigFile/loadConfigFile.ts";


async function getSSOConfigs() {
  const config = await loadConfigFile();

  return {
    client_id: config.client_id,
    response_type: "id_token",
    scope: 'openid profile',
    redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : config.frontBaseUrl}auth/sso-login`,
    nonce: generateUUID(),
    state: generateUUID()
  } as const
}

export default getSSOConfigs;
