"use client";

import ImageStack from "./image-stack";
import LoginInfo from "./info";

const Login = ({ images }: { images: string[] }) => {
  return (
    <div style={{ width: "100%", maxWidth: 1000 }}>
      <ImageStack images={images} />
      <LoginInfo />
    </div>
  );
};

export default Login;
