import {Outlet} from "react-router";
import useSaveNavigate from "../hooks/useSaveNavigate.ts";
import SSOAuthenticationProvider from "./login/SSOAuthenticationProvider";
import AuthenticationHandlerProvider from "./login/AuthenticationHandlerProvider";


function GeneralLayout() {

  useSaveNavigate()

  return (
    <SSOAuthenticationProvider>
      <AuthenticationHandlerProvider>
        <Outlet/>
      </AuthenticationHandlerProvider>
    </SSOAuthenticationProvider>
  )
}

export default GeneralLayout