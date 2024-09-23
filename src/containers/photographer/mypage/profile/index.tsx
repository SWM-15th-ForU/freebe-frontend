"use client";

import { Photographer } from "profile-types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { putProfile } from "@/services/client/photographer/mypage/profile";
import popToast from "@/components/common/toast";
import ProfileEdit from "./edit";
import { profileStyles } from "./profile.css";
import Preview from "./preview";
import SubmitProfile from "./submit";

const MyProfile = ({ profile }: { profile: Photographer }) => {
  const profileSchema = z.object({
    linkInfos: z.array(
      z.object({
        name: z.string().min(1, { message: "표시될 이름을 입력해 주세요." }),
        src: z.string().min(1, { message: "링크를 입력해 주세요." }),
      }),
    ),
  });
  const method = useForm<Photographer>({
    defaultValues: profile,
    resolver: zodResolver(profileSchema),
  });
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={profileStyles.form}
        encType="multipart/form-data"
      >
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
