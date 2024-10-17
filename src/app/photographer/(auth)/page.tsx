"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainView from "@/containers/photographer/main";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlParam = searchParams.get("url");
    if (urlParam) {
      const decodedUrl = decodeURIComponent(urlParam);
      localStorage.setItem("url", decodedUrl);
      router.replace("/photographer");
      router.refresh();
    }
  }, [router, searchParams]);
  return <MainView />;
}
