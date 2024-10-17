"use client";

import Image from "next/image";
import { User } from "user-types";
import { sendGAEvent } from "@next/third-parties/google";
import buttonStyles from "./buttons.css";

const LoginButton = ({
  roleType,
  destination,
}: {
  roleType: User;
  destination: string;
}) => {
  const redirectUri = `${process.env.NEXT_PUBLIC_DOMAIN}login/redirect`;
  const stateValue = {
    roleType,
    destination: `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
  };

  function loginToKakao() {
    sendGAEvent("event", "login", { method: "kakao", roleType, destination });
    window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_DOMAIN}oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_AUTH_KAKAO_KEY}&redirect_uri=${redirectUri}&state=${JSON.stringify(stateValue)}`;
  }

  return (
    <button type="button" onClick={loginToKakao} className={buttonStyles.kakao}>
      <Image
        src="/icons/kakao-logo.svg"
        alt="login-logo"
        height={20}
        width={20}
      />
      카카오로 시작하기
    </button>
  );
};

export default LoginButton;
