"use client";

import { CustomButton } from "@/components/buttons/common-buttons";
import Image from "next/image";
import { handlerStyles } from "./root.css";

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={handlerStyles.sectionContainer}>
      <div className={handlerStyles.header}>
        <Image src="/icons/error.svg" width={24} height={24} alt="error" />
        <span className={handlerStyles.message}>오류가 발생했습니다.</span>
      </div>
      <CustomButton
        styleType="primary"
        size="md"
        title="재시도"
        onClick={() => reset()}
      />
    </div>
  );
}
