"use client";

import { FinishButton } from "@/components/buttons/common-buttons";
import Link from "next/link";

const LoginErrorPage = () => {
  return (
    <div>
      <span>로그인에 실패했습니다.</span>
      <Link href="/login">
        <FinishButton onClick={() => {}} title="메인으로 돌아가기" />
      </Link>
    </div>
  );
};

export default LoginErrorPage;
