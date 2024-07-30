"use client";

import Image from "next/image";
import { kakaoLogin } from "@/utils/apis/login";
import * as style from "./buttons.css";
import { Body15SB } from "../texts/texts";

const LoginButton = () => {
  function loginToKakao() {
    kakaoLogin();
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth2/authorization/kakao`;
  }

  return (
    <button
      type="button"
      onClick={loginToKakao}
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
