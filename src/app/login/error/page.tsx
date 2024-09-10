"use client";

import { handlerStyles } from "@/app/root.css";
import { FinishButton } from "@/components/buttons/common-buttons";
import Link from "next/link";

const LoginErrorPage = () => {
  return (
    <div className={handlerStyles.fullContainer}>
      <span>로그인에 실패했습니다.</span>
      <Link href="/login">
        <FinishButton onClick={() => {}} title="메인으로 돌아가기" />
      </Link>
    </div>
  );
};

export default LoginErrorPage;
