"use client";

import { tokenKeys } from "@/constants/auth";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get(tokenKeys.access);
  const refreshToken = searchParams.get(tokenKeys.refresh);

  function setToken() {
    if (accessToken) {
      localStorage.setItem(tokenKeys.access, accessToken);
    }
    if (refreshToken) {
      localStorage.setItem(tokenKeys.refresh, refreshToken);
    }
  }

  useEffect(() => {
    setToken();
  }, []);

  router.push("/login/send");
  return <div />;
};

export default RedirectPage;
