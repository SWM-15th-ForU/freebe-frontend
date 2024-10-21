"use client";

import { useState, useEffect } from "react";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import InfoCaption from "@/components/common/info-caption";
import CloseButton from "@/components/buttons/close-button";
import { linkStyles } from "./sidebar.css";

const LinkCopy = ({ onClose }: { onClose: () => void }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const localData = localStorage.getItem("url");
    if (localData) {
      setUrl(`${process.env.NEXT_PUBLIC_DOMAIN}${localData}`);
    }
  });

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      popToast("클립보드에 복사되었습니다.");
    } catch (error) {
      popToast("다시 시도해 주세요.", "오류가 발생했습니다.");
    }
  }

  return (
    <div className={linkStyles.dropdown}>
      <CloseButton
        onClick={onClose}
        size={16}
        container={{ position: "absolute", top: 20, right: 20 }}
      />
      <InfoCaption information="링크를 복사해 고객에게 전달해보세요." />
      <div className={linkStyles.container}>
        <span className={linkStyles.content}>{url}</span>
        <CustomButton
          styleType="primary"
          size="sm"
          title="복사하기"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
};

export default LinkCopy;
