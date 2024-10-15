"use client";

import { handlerStyles } from "@/app/root.css";
import { CustomButton } from "@/components/buttons/common-buttons";
import Link from "next/link";

const LoginErrorPage = () => {
  return (
    <div className={handlerStyles.fullContainer}>
      <span className={handlerStyles.message}>로그인에 실패했습니다.</span>
      <Link href="/">
        <CustomButton title="메인으로 돌아가기" styleType="primary" size="sm" />
      </Link>
    </div>
  );
};

export default LoginErrorPage;
