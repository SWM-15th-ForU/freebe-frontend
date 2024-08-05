"use client";

import Image from "next/image";
import { cookieKeys, cookieValues } from "@/constants/cookies";
import { Body15SB } from "../texts/texts";
import * as style from "./buttons.css";

const LoginButton = () => {
  function loginToKakao() {
    localStorage.setItem(
      cookieKeys.requestUser,
      cookieValues.requestUser.photographer,
    );
    window.location.href = `https://api.freebe.co.kr/oauth2/authorization/kakao`;
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
