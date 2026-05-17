import Cookies from 'js-cookie'
import COOKIE_KEYS from "../../constances/cookieKeys.ts";


function getToken(): string | undefined {
  const cookieToken = Cookies.get(COOKIE_KEYS.TOKEN)

  if (!cookieToken) return

  try {
    // const decryptedToken = decrypt(cookieToken)
    // return JSON.parse(cookieToken)
    console.log({cookieToken})
    return cookieToken
  } catch (err) {
    return
  }
}

export default getToken;
