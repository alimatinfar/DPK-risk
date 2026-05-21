import {Outlet, useNavigate} from "react-router";
import useSaveNavigate from "../hooks/useSaveNavigate.ts";
import {useEffect} from "react";
import getToken from "../utils/authentication/getToken.ts";
import ROUTER_LINKS from "../constances/routerLinks.ts";


function GeneralLayout() {

  useSaveNavigate()

  const navigate = useNavigate()

  useEffect(function () {
    //TODO uncomment login with sso
    // const savedToken = getToken()
    //
    // if (!savedToken) navigate(ROUTER_LINKS.SSO_LOGIN)
  }, [])

  return (
    <Outlet/>
  )
}

export default GeneralLayout
