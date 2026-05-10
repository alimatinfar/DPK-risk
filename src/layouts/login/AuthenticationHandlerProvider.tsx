
import {useEffect} from "react";
import type {ChildrenPropsType} from "../../types/ChildrenPropsType";
import { useAuthContext } from "react-oauth2-code-pkce";


function AuthenticationHandlerProvider(
  {children}: ChildrenPropsType
) {

  const {token, logIn, tokenData, idToken, idTokenData} = useAuthContext()

    console.log({token, tokenData, idToken, idTokenData})
  useEffect(() => {
    // if (!token) return logIn()

  }, [token]);

  return (
    <>
      {children}

      <button onClick={() => logIn()}>
        click
      </button>
    </>
  );
}

export default AuthenticationHandlerProvider;