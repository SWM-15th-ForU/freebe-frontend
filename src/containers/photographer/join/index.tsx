"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Join } from "profile-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ID_REGEX } from "@/constants/common/user";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import { postProfile } from "@/services/client/photographer/profile";
import { responseHandler } from "@/services/common/error";
import Profile from "./profile";
import Agreements from "./agreements";
import { joinStyles } from "./join.css";

const PhotographerJoin = () => {
  const router = useRouter();

  const joinSchema = z.object({
    profileName: z
      .string()
      .min(3, { message: "아이디는 3자 이상이어야 합니다." })
      .max(30, { message: "아이디는 최대 30자까지 사용할 수 있습니다." })
      .regex(ID_REGEX, {
        message: "아이디에는 특수문자를 포함할 수 없습니다.",
      }),
    marketingAgreement: z.boolean(),
    privacyAgreement: z.boolean(),
    serviceAgreement: z.boolean(),
    ageAgreement: z.boolean(),
  });
  const defaultValues: Join = {
    profileName: "",
    marketingAgreement: false,
    privacyAgreement: false,
    serviceAgreement: false,
    ageAgreement: false,
  };
  const method = useForm<Join>({
    defaultValues,
    resolver: zodResolver(joinSchema),
  });
  const { handleSubmit, watch } = method;
  const [ageAgreement, serviceAgreement, privacyAgreement] = watch([
    "ageAgreement",
    "serviceAgreement",
    "privacyAgreement",
  ]);

  async function onSubmit(data: Join) {
    await responseHandler(
      postProfile(data),
      (url) => {
        popToast("가입이 완료되었습니다!");
        router.push(`/photographer?url=${url}`);
      },
      (message) =>
        popToast("다시 시도해 주세요.", message || "가입에 실패했습니다."),
    );
  }

  return (
    <FormProvider {...method}>
      <form className={joinStyles.container} onSubmit={handleSubmit(onSubmit)}>
        <Profile />
        <Agreements />
        <CustomButton
          type="submit"
          size="md"
          styleType="primary"
          title="가입하기"
          disabled={!serviceAgreement || !privacyAgreement || !ageAgreement}
        />
      </form>
    </FormProvider>
  );
};

export default PhotographerJoin;
