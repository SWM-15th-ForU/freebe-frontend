"use client";

import LoginButton from "@/components/buttons/login-button";
import Script from "next/script";

const Page = () => {
  function kakaoSdkInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  return (
    <div>
      <Script
        rel="preload"
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        onLoad={kakaoSdkInit}
      />
      <h3>사진작가의 든든한 업무 파트너</h3>
      <h3>프리비와 함께 더 자유롭게 촬영하세요</h3>
      <LoginButton />
    </div>
  );
};

export default Page;
