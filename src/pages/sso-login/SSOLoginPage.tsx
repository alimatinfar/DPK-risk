import React, {useEffect, useState} from 'react';
import QUERY_PARAMS from "../../constances/queryParams";
import setToken from "../../utils/authentication/setToken.ts";
import {useLocation, useNavigate} from "react-router";
import getToken from "../../utils/authentication/getToken.ts";
import ROUTER_LINKS from "../../constances/routerLinks.ts";
import OverContainerLoading from "../../components/others/Loading/OverContainerLoading.tsx";


function SSOLoginPage() {

  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const navigate = useNavigate()

  const login = () => {
    setLoading(true)
    const params = new URLSearchParams({
      client_id: "87fdee9bdef647aa9c4cf820650fd2db",
      response_type: "id_token",
      scope: "openid profile",
      redirect_uri: "http://localhost:3030/auth/sso-login",
      nonce: crypto.randomUUID(),
      state: crypto.randomUUID()
    });

    window.location.href =
      "https://iip-server.dpkharazmi.com/connect/authorize?" + params;
  };

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
