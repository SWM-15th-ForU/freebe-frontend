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
    const tutorialParam = searchParams.get("tutorial");
    if (urlParam) {
      const decodedUrl = decodeURIComponent(urlParam);
      localStorage.setItem("url", decodedUrl);
      router.replace(
        tutorialParam ? "/photographer?tutorial=true" : "/photographer",
      );
      router.refresh();
    }
    if (tutorialParam) {
      setIsOnTutorial(true);
    } else {
      setIsOnTutorial(false);
    }
  }, [router, searchParams]);

  return (
    <div className={photographerStyles.body}>
      <PhotographerSidebar tutorialParam={isOnTutorial} />
      <div className={photographerStyles.content}>
        <MainView tutorialParam={isOnTutorial} />
      </div>
    </div>
  );
}
