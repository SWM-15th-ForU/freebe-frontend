import Link from "next/link";
import LoginButton from "@/components/buttons/login-button";
import { loginStyles } from "./login.css";

const LoginInfo = () => {
  return (
    <div className={loginStyles.container}>
      <span className={loginStyles.title}>
        내가 원하는 스냅사진을 더 편리하게
      </span>
      <span className={loginStyles.subtitle}>
        프리비와 함께 예약부터 촬영까지 시작해보세요
      </span>
      <LoginButton roleType="customer" />
      <Link href="/login/photographer" className={loginStyles.caption}>
        <span>작가로 로그인하기</span>
      </Link>
    </div>
  );
};

export default LoginInfo;
