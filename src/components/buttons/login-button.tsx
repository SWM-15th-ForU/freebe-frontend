"use client";

import Image from "next/image";
import { cookieKeys, cookieValues } from "@/constants/cookies";
import buttonStyles from "./buttons.css";

const LoginButton = () => {
  function loginToKakao() {
    localStorage.setItem(
      cookieKeys.requestUser,
      cookieValues.requestUser.photographer,
    );
    window.location.href = `https://api.freebe.co.kr/oauth2/authorization/kakao`;
  }

  return (
    <button type="button" onClick={loginToKakao} className={buttonStyles.kakao}>
      <Image
        src="/icons/kakao-logo.svg"
        alt="login-logo"
        height={12}
        width={12}
      />
      카카오로 시작하기
    </button>
  );
};

export default LoginButton;
