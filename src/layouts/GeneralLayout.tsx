import {Outlet, useNavigate} from "react-router";
import useSaveNavigate from "../hooks/useSaveNavigate.ts";
import {useEffect} from "react";
import getToken from "../utils/authentication/getToken.ts";
import ROUTER_LINKS from "../constances/routerLinks.ts";


function GeneralLayout() {

  useSaveNavigate()

  const navigate = useNavigate()

  useEffect(function () {
    const savedToken = getToken()

    //TODO uncomment sso login
    // if (!savedToken) navigate(ROUTER_LINKS.SSO_LOGIN)
  }, [])

  return (
    <Outlet/>
  )
}

export default GeneralLayout
