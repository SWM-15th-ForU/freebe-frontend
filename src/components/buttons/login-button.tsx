"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  async function handleKakaoLogin() {
    signIn("kakao", { redirect: true, callbackUrl: "/" });
  }
  return (
    <button type="button" onClick={() => handleKakaoLogin()}>
      login with kakao
    </button>
  );
};

export default LoginButton;
