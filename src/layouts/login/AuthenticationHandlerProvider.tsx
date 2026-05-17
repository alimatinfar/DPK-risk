
import {useEffect} from "react";
import type {ChildrenPropsType} from "../../types/ChildrenPropsType";
import { useAuth } from "react-oidc-context";


function AuthenticationHandlerProvider(
  {children}: ChildrenPropsType
) {

  const auth = useAuth();
  console.log({auth})

  const login = () => {
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
    // auth.signinRedirect().then(response => console.log({response}))
  };


  if (auth.isLoading) {
    return <div>در حال ورود...</div>;
  }

  if (auth.error) {
    return <div>خطا: {auth.error.message}</div>;
  }

  // بعد از پردازش موفق، کاربر به مسیر اصلی هدایت می‌شود
  // می‌توانی از useEffect برای redirect استفاده کنی.

  return (
    <>
      {children}

      <button onClick={login}>
        click
      </button>
    </>
  );
}

export default AuthenticationHandlerProvider;
