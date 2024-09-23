"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Join } from "profile-types";
import { zodResolver } from "@hookform/resolvers/zod";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import { postProfile } from "@/services/client/photographer/profile";
import Profile from "./profile";
import Agreements from "./agreements";
import { joinStyles } from "./join.css";

const PhotographerJoin = () => {
  const router = useRouter();

  const joinSchema = z.object({
    instagramId: z
      .string()
      .min(1, { message: "인스타그램 아이디를 입력해주세요." }),
  });
  const defaultValues: Join = {
    instagramId: "",
    marketingAgreement: false,
    privacyAgreement: false,
    serviceAgreement: false,
  };
  const method = useForm<Join>({
    defaultValues,
    resolver: zodResolver(joinSchema),
  });
  const { handleSubmit, watch } = method;
  const [profileImg, setProfileImg] = useState<File>();
  const [serviceAgreement, privacyAgreement] = watch([
    "serviceAgreement",
    "privacyAgreement",
  ]);

  async function onSubmit(data: Join) {
    try {
      const url = await postProfile(data, profileImg);
      popToast("가입이 완료되었습니다!", "");
      router.push(`/photographer?url=${url}`);
    } catch (error) {
      popToast("가입에 실패했습니다.", "다시 시도해주세요.");
    }
  }

  return (
    <FormProvider {...method}>
      <form
        className={joinStyles.container}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <Profile profileImg={profileImg} setProfileImg={setProfileImg} />
        <Agreements />
        <CustomButton
          type="submit"
          size="md"
          styleType="primary"
          title="가입하기"
          disabled={!serviceAgreement || !privacyAgreement}
        />
      </form>
    </FormProvider>
  );
};

export default PhotographerJoin;
