import generateUUID from "../generateUUID.ts";
import {loadConfigFile} from "../../request/axiosInstance.ts";


async function getSSOConfigs() {
  //TODO get this parameters from data.json
  const config = await loadConfigFile();

  return {
    // client_id: config.client_id,
    client_id: '87fdee9bdef647aa9c4cf820650fd2db',
    response_type: "id_token",
    // scope: config.scope,
    scope: 'openid profile',
    // redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : config.frontBaseUrl}auth/sso-login`,
    redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : 'http://172.16.20.35:8284/'}auth/sso-login`,
    nonce: generateUUID(),
    state: generateUUID()
  } as const
}

export default getSSOConfigs;
