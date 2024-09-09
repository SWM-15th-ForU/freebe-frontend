"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import MainView from "@/containers/photographer/main";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const { setUserInfo } = useUserInfo();

  useEffect(() => {
    if (typeof searchParams.url === "string") {
      setUserInfo({
        userRole: "photographer",
        userData: { profileUrl: searchParams.url },
      });
      router.replace("/photographer");
    }
  }, [router, setUserInfo, searchParams]);

  return <MainView />;
}
