"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { postUserRole } from "@/utils/apis/login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { User } from "user-types";

const RegisterPage = ({ params }: { params: { roleType: User } }) => {
  const router = useRouter();
  const { setUserInfo } = useUserInfo();
  const postUser = async () => {
    const result = await postUserRole(params.roleType);
    setUserInfo({
      userRole: params.roleType,
      userData: { profileUrl: result.data },
    });
    router.push("/photographer");
  };
  useEffect(() => {
    postUser();
  }, []);

  return <div />;
};

export default RegisterPage;
