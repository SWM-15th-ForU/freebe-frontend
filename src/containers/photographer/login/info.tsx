import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoginButton from "@/components/buttons/login-button";
import { loginStyles } from "./login.css";

const LoginInfo = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [destination, setDestination] = useState("photographer");
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get("redirect");
    if (redirect) {
      const decodedUrl = decodeURIComponent(redirect);
      setDestination(
        decodedUrl.startsWith("/") ? decodedUrl.slice(1) : decodedUrl,
      );
      router.replace("/login/photographer");
    }
    setIsLoading(false);
  }, [searchParams, router]);

  return (
    <div className={loginStyles.container}>
      <span className={loginStyles.title}>사진작가의 든든한 업무 파트너</span>
      <span className={loginStyles.subtitle}>
        프리비와 함께 더 자유롭게 촬영하세요
      </span>
      {!isLoading && (
        <LoginButton roleType="photographer" destination={destination} />
      )}
    </div>
  );
};

export default LoginInfo;
