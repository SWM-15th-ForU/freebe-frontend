"use client";

import Script from "next/script";
import styles from "@/styles/page.module.css";
import Page from "./_login/page";

export default function Home() {
  function kakaoSdkInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  return (
    <div className={styles.main}>
      <Script
        rel="preload"
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        onLoad={kakaoSdkInit}
      />
      <Page />
    </div>
  );
}
