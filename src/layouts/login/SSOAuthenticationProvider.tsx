import type {ChildrenPropsType} from "../../types/ChildrenPropsType";
import {AuthProvider} from "react-oidc-context";


const oidcConfig = {
  authority: "https://iip-server.dpkharazmi.com",
  client_id: "87fdee9bdef647aa9c4cf820650fd2db",
  redirect_uri: "http://localhost:3030/auth/sso-login",
  scope: "openid profile email",
  automaticSilentRenew: true,
  // disablePKCE: true,
  response_type: 'token'
};

// const authConfig = {
//   clientId: "87fdee9bdef647aa9c4cf820650fd2db",
//   authorizationEndpoint: "https://iip-server.dpkharazmi.com/connect/authorize",
//   tokenEndpoint: "https://iip-server.dpkharazmi.com/connect/token",
//   redirectUri: "http://localhost:3030/auth/sso-login",
//   scope: "openid profile email",
//   autoLogin: true
// }

function SSOAuthenticationProvider(
  {children}: ChildrenPropsType
) {
  return (
    <AuthProvider {...oidcConfig}>
      {children}
    </AuthProvider>
  );
}

export default SSOAuthenticationProvider;
