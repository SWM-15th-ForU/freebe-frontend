"use client";

import Image from "next/image";
import { User } from "user-types";
import buttonStyles from "./buttons.css";

const LoginButton = ({
  roleType,
  product,
  id,
}: {
  roleType: User;
  product?: number;
  id?: number;
}) => {
  const redirectUri = `${process.env.NEXT_PUBLIC_DOMAIN}login/redirect`;
  const stateValue =
    roleType === "photographer"
      ? { roleType }
      : {
          roleType,
          destination: `${process.env.NEXT_PUBLIC_DOMAIN}${id}/products/${product}/reservation/reference`,
        };

  function loginToKakao() {
    window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_DOMAIN}oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_AUTH_KAKAO_KEY}&redirect_uri=${redirectUri}&state=${JSON.stringify(stateValue)}&scope=account_email,name,birthday,birthyear,phone_number`;
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
