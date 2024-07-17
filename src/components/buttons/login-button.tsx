"use client";

import Image from "next/image";
import * as style from "./buttons.css";
import { Body15SB } from "../texts/texts";

const LoginButton = () => {
  function handleKakaoLogin() {
    window.Kakao.Auth.authorize({
      // [TODO] redirect to backend
      redirectUri: "http://localhost:8080/login/oauth2/code/kakao",
    });
  }

  return (
    <button
      type="button"
      onClick={() => handleKakaoLogin()}
      className={style.kakaoContainer}
    >
      <Image
        src="/icons/kakao-logo.svg"
        alt="login-logo"
        height={12}
        width={12}
      />
      <Body15SB>카카오 로그인</Body15SB>
    </button>
  );
};

export default LoginButton;
