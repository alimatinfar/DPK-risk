import type {ChildrenPropsType} from "../../types/ChildrenPropsType";
import { AuthProvider } from "react-oauth2-code-pkce";


const authConfig = {
  clientId: "87fdee9bdef647aa9c4cf820650fd2db",
  authorizationEndpoint: "https://iip-server.dpkharazmi.com/connect/authorize",
  tokenEndpoint: "https://iip-server.dpkharazmi.com/connect/token",
  redirectUri: "http://localhost:3030/auth/sso-login",
  scope: "openid profile email",
  autoLogin: true
}

function SSOAuthenticationProvider(
  {children}: ChildrenPropsType
) {
  return (
    <AuthProvider authConfig={authConfig}>
      {children}
    </AuthProvider>
  );
}

export default SSOAuthenticationProvider;