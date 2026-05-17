import Cookies from 'js-cookie'
import {encrypt} from "./EncryptDecrypt";
import COOKIE_KEYS from "../../constances/cookieKeys.ts";


async function setToken(token:string, isMainServer?: boolean) {
  if (!token) return
  // const encryptedToken = encrypt(JSON.stringify(token));

  const config:any = {
    ...isMainServer ? {
      secure: true,
      sameSite: 'strict',
    } : {},
    expires: 1
  }

  Cookies.set(COOKIE_KEYS.TOKEN, token, config)
}

export default setToken;
