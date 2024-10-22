"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainView from "@/containers/photographer/main";
import PhotographerSidebar from "@/containers/photographer/main/sidebar";
import { photographerStyles } from "./photographer.css";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOnTutorial, setIsOnTutorial] = useState(false);

  useEffect(() => {
    const urlParam = searchParams.get("url");
    const isTutorial = searchParams.get("tutorial");
    if (isTutorial) {
      setIsOnTutorial(true);
    }
    if (urlParam) {
      const decodedUrl = decodeURIComponent(urlParam);
      localStorage.setItem("url", decodedUrl);
      router.replace("/photographer");
      router.refresh();
    }
  }, [router, searchParams]);

  return (
    <div className={photographerStyles.body}>
      <PhotographerSidebar />
      <div className={photographerStyles.content}>
        <MainView tutorialParam={isOnTutorial} />
      </div>
    </div>
  );
}
