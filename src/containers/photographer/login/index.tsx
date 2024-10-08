"use client";

import ImageStack from "@/containers/common/image-stack/image-stack";
import LoginInfo from "./info";
import { loginStyles } from "./login.css";

const Login = ({ images }: { images: string[] }) => {
  return (
    <div className={loginStyles.layout}>
      <ImageStack images={images} />
      <LoginInfo />
    </div>
  );
};

export default Login;
