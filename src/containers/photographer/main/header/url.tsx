"use client";

import Image from "next/image";
import popToast from "@/components/common/toast";
import { urlStyles } from "./header.css";

const Url = ({ myUrl }: { myUrl: string }) => {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(myUrl);
      popToast(
        "링크를 공유해 고객에게 전달해 보세요!",
        "클립보드에 복사되었습니다.",
      );
    } catch (error) {
      popToast("다시 시도해 주세요.", "오류가 발생했습니다.");
    }
  }

  return (
    <div className={urlStyles.container}>
      <span className={urlStyles.content}>{myUrl}</span>
      <div className={urlStyles.icon}>
        <Image src="/icons/copy.svg" alt="복사하기" fill onClick={handleCopy} />
      </div>
    </div>
  );
};

export default Url;
