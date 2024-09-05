"use client";

import { SubmitButton } from "@/components/buttons/common-buttons";
import Image from "next/image";
import { useEffect } from "react";
import { handlerStyles } from "./root.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={handlerStyles.container}>
      <Image src="/icons/error.svg" width={24} height={24} alt="error" />
      <span className={handlerStyles.message}>오류가 발생했습니다.</span>
      <SubmitButton title="재시도" onClick={() => reset()} />
    </div>
  );
}
