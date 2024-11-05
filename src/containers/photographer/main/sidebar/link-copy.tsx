"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import InfoCaption from "@/components/common/info-caption";
import { linkStyles } from "./sidebar.css";

const LinkCopy = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const localData = localStorage.getItem("url");
    if (localData) {
      setUrl(`${process.env.NEXT_PUBLIC_DOMAIN}${localData}`);
    }
  });

  async function handleCopy() {
    try {
      sendGAEvent("event", "copy_link", { url });
      await navigator.clipboard.writeText(url);
      popToast(
        "원하는 곳에 공유해 프리비로 예약을 받아 보세요!",
        "링크가 복사되었습니다.",
      );
    } catch (error) {
      popToast("다시 시도해 주세요.", "오류가 발생했습니다.");
    }
  }

  return (
    <div>
      <span className={linkStyles.title}>내 예약 페이지</span>
      <InfoCaption information="링크를 복사해 인스타그램 프로필에 게시해보세요. 내가 등록한 상품을 고객이 확인하고 예약을 시작할 수 있어요." />
      <div className={linkStyles.container}>
        <span className={linkStyles.content}>{url}</span>
      </div>
      <div className={linkStyles.buttonWrapper}>
        <Link href={url} target="_blank">
          <CustomButton styleType="line" size="xs" title="바로가기" />
        </Link>
        <CustomButton
          styleType="primary"
          size="xs"
          title="복사하기"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
};

export default LinkCopy;
