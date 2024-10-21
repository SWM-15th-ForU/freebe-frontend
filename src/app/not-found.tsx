"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitButton } from "@/components/buttons/common-buttons";
import { handlerStyles } from "./root.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className={handlerStyles.fullContainer}>
      <Image src="/icons/error.svg" width={24} height={24} alt="error" />
      <span className={handlerStyles.message}>존재하지 않는 페이지입니다.</span>
      <SubmitButton title="이전으로 돌아가기" onClick={() => router.back()} />
    </div>
  );
}
