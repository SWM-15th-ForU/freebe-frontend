"use client";

import { Body15SB } from "@/components/texts/texts";
import { urlContainer } from "./header.css";

const Url = ({ myUrl }: { myUrl: string }) => {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(myUrl);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <div className={urlContainer}>
      <Body15SB>{myUrl}</Body15SB>
      <button type="button" onClick={handleCopy}>
        복사하기
      </button>
    </div>
  );
};

export default Url;
