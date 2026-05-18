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
      // client_id: config.client_id,
      client_id: '87fdee9bdef647aa9c4cf820650fd2db',
      response_type: "id_token",
      // scope: config.scope,
      scope: 'openid profile',
      // redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : config.frontBaseUrl}auth/sso-login`,
      redirect_uri: `${import.meta.env.DEV ? 'http://localhost:3030/' : 'http://172.16.20.35:8284/'}auth/sso-login`,
      nonce: generateUUID(),
      state: generateUUID()
    });

    window.location.href = `${config.ssoUrl}connect/authorize?` + params;
  }

  function navigateToSearchPage() {
    navigate(ROUTER_LINKS.SEARCH)
  }

  useEffect(function () {
    const savedToken = getToken()

    if (savedToken) {
      navigateToSearchPage()
    } else {
      const hash = location.hash.replace("#", "");
      const params = new URLSearchParams(hash);

      const idToken = params.get(QUERY_PARAMS.ID_TOKEN);

      if (idToken) {
        setToken(idToken)
        navigateToSearchPage()
      } else {
        login().then()
      }
    }
  }, [])

  return loading ? (
    <OverContainerLoading loading />
  ) : null
}

export default SSOLoginPage;
