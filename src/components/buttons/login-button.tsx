"use client";

import Image from "next/image";

const LoginButton = () => {
  function handleKakaoLogin() {
    window.Kakao.Auth.authorize({
      // [TODO] redirect to backend
      redirectUri: "http://localhost:8080/login/oauth2/code/kakao",
    });
  }

  return (
    <button type="button" onClick={() => handleKakaoLogin()}>
      <Image
        src="/icons/kakao-logo.svg"
        alt="login-logo"
        height={12}
        width={12}
      />
      login with kakao
    </button>
  );
};

export default LoginButton;
