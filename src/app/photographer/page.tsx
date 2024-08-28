"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import styles from "@/styles/page.module.css";

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
  return (
    <div className={styles.main}>
      <h3>안녕하세요.</h3>
    </div>
  );
}
