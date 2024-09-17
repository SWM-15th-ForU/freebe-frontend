"use client";

import { Photographer } from "profile-types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { putProfile } from "@/services/client/photographer/mypage/profile";
import popToast from "@/components/common/toast";
import ProfileEdit from "./edit";
import { profileStyles } from "./profile.css";
import Preview from "./preview";
import SubmitProfile from "./submit";

const MyProfile = ({ profile }: { profile: Photographer }) => {
  const method = useForm<Photographer>({ defaultValues: profile });
  const { handleSubmit } = method;

  const onSubmit: SubmitHandler<Photographer> = async (data) => {
    try {
      await putProfile(data);
      popToast("저장이 완료되었습니다.", "");
    } catch {
      popToast("저장에 실패했습니다.", "다시 시도해 주세요.");
    }
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)} className={profileStyles.form}>
        <div className={profileStyles.container}>
          <Preview />
          <ProfileEdit />
        </div>
        <SubmitProfile />
      </form>
    </FormProvider>
  );
};

export default MyProfile;
