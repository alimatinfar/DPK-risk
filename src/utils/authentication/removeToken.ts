import Cookies from 'js-cookie'
import COOKIE_KEYS from "../../constances/cookieKeys.ts";

function removeToken() {
  Cookies.remove(COOKIE_KEYS.TOKEN)
}

export default removeToken;
