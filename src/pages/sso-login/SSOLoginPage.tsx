import React, {useEffect, useState} from 'react';
import QUERY_PARAMS from "../../constances/queryParams";
import setToken from "../../utils/authentication/setToken.ts";
import {useLocation, useNavigate} from "react-router";
import getToken from "../../utils/authentication/getToken.ts";
import ROUTER_LINKS from "../../constances/routerLinks.ts";
import OverContainerLoading from "../../components/others/Loading/OverContainerLoading.tsx";
import generateUUID from "../../utils/generateUUID.ts";
import {loadConfigFile} from "../../request/axiosInstance.ts";


function SSOLoginPage() {

  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const navigate = useNavigate()

  const login = async () => {
    const config = await loadConfigFile();
    setLoading(true)
    const params = new URLSearchParams({
      client_id: config.client_id,
      response_type: "id_token",
      scope: config.scope,
      redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : config.frontBaseUrl}auth/sso-login`,
      nonce: generateUUID(),
      state: generateUUID()
    });

    window.location.href = `${config.ssoUrl}connect/authorize?` + params;
  }

  useEffect(function () {
    const savedToken = getToken()

    if (savedToken) {
      navigate(ROUTER_LINKS.SEARCH)
    } else {
      const hash = location.hash.replace("#", "");
      const params = new URLSearchParams(hash);

      const idToken = params.get(QUERY_PARAMS.ID_TOKEN);

      if (idToken) {
        setToken(idToken).then()
      } else {
        login()
      }
    }
  }, [])

  return loading ? (
    <OverContainerLoading loading />
  ) : null
}

export default SSOLoginPage;
