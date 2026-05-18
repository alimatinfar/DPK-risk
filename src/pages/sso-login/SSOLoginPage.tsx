import React, {useEffect, useState} from 'react';
import QUERY_PARAMS from "../../constances/queryParams";
import setToken from "../../utils/authentication/setToken.ts";
import {useLocation, useNavigate} from "react-router";
import getToken from "../../utils/authentication/getToken.ts";
import ROUTER_LINKS from "../../constances/routerLinks.ts";
import OverContainerLoading from "../../components/others/Loading/OverContainerLoading.tsx";
import {loadConfigFile} from "../../request/axiosInstance.ts";
import getSSOConfigs from "../../utils/authentication/getSSOConfigs.ts";


function SSOLoginPage() {

  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const navigate = useNavigate()

  const login = async () => {
    const config = await loadConfigFile();
    setLoading(true)

    const ssoConfigs = await getSSOConfigs()
    const params = new URLSearchParams(ssoConfigs);

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
