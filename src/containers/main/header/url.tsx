"use client";

import Image from "next/image";
import { urlStyles } from "./header.css";

const Url = ({ myUrl }: { myUrl: string }) => {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        "https://www.freebe.co.kr/soma_photo",
      );
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <div className={urlStyles.container}>
      <span className={urlStyles.content}>
        https://www.freebe.co.kr/soma_photo
      </span>
      <Image
        src="/icons/copy.svg"
        alt="복사하기"
        height={16}
        width={16}
        onClick={handleCopy}
      />
    </div>
  );
};

export default Url;
