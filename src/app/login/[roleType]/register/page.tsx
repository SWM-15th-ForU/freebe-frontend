"use client";

import { postUserRole } from "@/utils/apis/login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterPage = ({ params }: { params: { roleType: string } }) => {
  const router = useRouter();
  const postUser = async () => {
    const data = await postUserRole(params.roleType);
    router.push("/photographer");
  };
  useEffect(() => {
    postUser();
  });

  return <div />;
};

export default RegisterPage;
