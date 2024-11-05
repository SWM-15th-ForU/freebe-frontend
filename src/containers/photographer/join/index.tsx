"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Join } from "profile-types";
import { sendGAEvent } from "@next/third-parties/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { MAX_LENGTHS } from "@/constants/common/schema";
import { ID_REGEX } from "@/constants/common/user";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import NoticeBanner from "@/containers/common/notice-banner";
import { postProfile } from "@/services/client/photographer/profile";
import { CUSTOMED_CODE, responseHandler } from "@/services/common/error";
import Profile from "./profile";
import { joinStyles } from "./join.css";

const RESERVED_PROFILE_NAMES = [
  ".env",
  "photographer",
  "customer",
  "api",
  "auth",
  "login",
];
const IS_RESERVED_PROFILE_NAME = "사용할 수 없는 아이디입니다.";

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
    contact: z
      .string()
      .min(1, { message: "연락처를 입력해 주세요." })
      .max(MAX_LENGTHS.TEXT, { message: "최대 100자까지 입력 가능합니다." }),
  });
  const defaultValues: Join = {
    contact: "",
    profileName: "",
  };
  const method = useForm<Join>({
    defaultValues,
    resolver: zodResolver(joinSchema),
  });
  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = method;

  function handleSubmitFail(message?: string) {
    if (
      message === CUSTOMED_CODE.PROFILE_NAME_ALREADY_EXISTS ||
      message === IS_RESERVED_PROFILE_NAME
    ) {
      setError(
        "profileName",
        { message: "아이디를 다시 설정해주세요." },
        { shouldFocus: true },
      );
    }
    popToast("다시 시도해 주세요.", message || "가입에 실패했습니다.", true);
  }

  function isReservedProfileName(profileName: string) {
    return RESERVED_PROFILE_NAMES.includes(profileName);
  }

  async function onSubmit(data: Join) {
    if (isReservedProfileName(data.profileName)) {
      handleSubmitFail(IS_RESERVED_PROFILE_NAME);
    } else {
      sendGAEvent("event", "enroll", { profile_name: data.profileName });
      await responseHandler(
        postProfile(data),
        (url) => {
          popToast("가입이 완료되었습니다!");
          router.push(`/photographer?url=${url}&tutorial=true`);
        },
        handleSubmitFail,
      );
    }
  }

  return (
    <FormProvider {...method}>
      <form className={joinStyles.container} onSubmit={handleSubmit(onSubmit)}>
        <NoticeBanner container={{ minWidth: "100%" }} target="join" />
        <span className={joinStyles.title}>
          가입을 위해 계정 설정을 완료해주세요!
        </span>
        <Profile />
        <CustomButton
          type="submit"
          size="md"
          styleType="primary"
          title="가입하기"
          loading={isSubmitting}
          style={{ marginTop: 30 }}
        />
      </form>
    </FormProvider>
  );
};

export default PhotographerJoin;
