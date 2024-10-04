"use client";

import Image from "next/image";
import buttonStyles from "./buttons.css";

const LoginButton = ({
  type,
}: {
  type:
    | {
        roleType: "customer";
        destination: string;
      }
    | {
        roleType: "photographer";
      };
}) => {
  const { roleType } = type;
  const redirectUri = `${process.env.NEXT_PUBLIC_DOMAIN}login/redirect`;
  const stateValue =
    roleType === "photographer"
      ? { roleType }
      : {
          roleType,
          destination: `${process.env.NEXT_PUBLIC_DOMAIN}${type.destination}`,
        };

  function loginToKakao() {
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
