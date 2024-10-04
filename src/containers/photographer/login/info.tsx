import LoginButton from "@/components/buttons/login-button";
import { loginStyles } from "./login.css";

const LoginInfo = () => {
  return (
    <div className={loginStyles.container}>
      <span className={loginStyles.title}>사진작가의 든든한 업무 파트너</span>
      <span className={loginStyles.subtitle}>
        프리비와 함께 더 자유롭게 촬영하세요
      </span>
      <LoginButton roleType="photographer" destination="photographer" />
    </div>
  );
};

export default LoginInfo;
