"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Photographer } from "profile-types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { putProfile } from "@/services/client/photographer/mypage/profile";
import { responseHandler } from "@/services/common/error";
import popToast from "@/components/common/toast";
import ProfileEdit from "./edit";
import { mypageStyles, profileStyles } from "./profile.css";
import Preview from "./preview";
import SubmitProfile from "./submit";

const MyProfile = ({ profile }: { profile: Photographer }) => {
  const router = useRouter();
  const profileSchema = z.object({
    message: z.string(),
    linkInfos: z.array(
      z.object({
        name: z.string().min(1, { message: "표시될 이름을 입력해 주세요." }),
        src: z.string().min(1, { message: "링크를 입력해 주세요." }),
      }),
    ),
  });
  const method = useForm<Photographer>({
    defaultValues: { ...profile },
    resolver: zodResolver(profileSchema),
  });
  const { handleSubmit } = method;
  const [profileFile, setProfileFile] = useState<File>();
  const [bannerFile, setBannerFile] = useState<File>();

  const onSubmit: SubmitHandler<Photographer> = async (data) => {
    await responseHandler(
      putProfile(data, { bannerFile, profileFile }),
      () => {
        router.refresh();
        popToast("저장이 완료되었습니다.");
      },
      (message) =>
        popToast(
          "다시 시도해 주세요.",
          message || "저장에 실패했습니다.",
          true,
        ),
    );
  };

  return (
    <div className={mypageStyles.container}>
      <span className={mypageStyles.title}>내 프로필 관리</span>

      <FormProvider {...method}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={profileStyles.form}
          encType="multipart/form-data"
        >
          <div className={profileStyles.container}>
            <Preview />
            <ProfileEdit
              setBannerFile={setBannerFile}
              setProfileFile={setProfileFile}
            />
          </div>
          <SubmitProfile />
        </form>
      </FormProvider>
    </div>
  );
};

export default MyProfile;
