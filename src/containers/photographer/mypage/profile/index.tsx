"use client";

import { useRouter } from "next/navigation";
import { PhotographerForm } from "profile-types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { putProfile } from "@/services/client/photographer/mypage/profile";
import { responseHandler } from "@/services/common/error";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import ProfileEdit from "./edit";
import { mypageStyles, profileStyles } from "./profile.css";
import Preview from "./preview";

const MyProfile = ({ profile }: { profile: PhotographerForm }) => {
  const router = useRouter();
  const profileSchema = z.object({
    message: z.string().optional(),
    contact: z
      .string()
      .min(1, { message: "연락처를 입력해 주세요." })
      .max(100, { message: "최대 100자까지 입력 가능합니다." }),
    linkInfos: z.array(
      z.object({
        name: z.string().min(1, { message: "표시될 이름을 입력해 주세요." }),
        src: z.string().min(1, { message: "링크를 입력해 주세요." }),
      }),
    ),
    bannerImg: z
      .object({
        url: z.string().url(),
        file: z.instanceof(File).optional(),
      })
      .optional(),
    profileImg: z
      .object({
        url: z.string().url(),
        file: z.instanceof(File).optional(),
      })
      .optional(),
  });
  const method = useForm<PhotographerForm>({
    defaultValues: { ...profile },
    resolver: zodResolver(profileSchema),
  });
  const { handleSubmit } = method;

  const onSubmit: SubmitHandler<PhotographerForm> = async (data) => {
    await responseHandler(
      putProfile(data),
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
    <div className={profileStyles.page}>
      <FormProvider {...method}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={profileStyles.form}
          encType="multipart/form-data"
        >
          <div className={profileStyles.formHeader}>
            <span className={mypageStyles.title}>내 프로필 관리</span>
            <CustomButton
              type="submit"
              styleType="primary"
              size="sm"
              title="프로필 저장"
              style={{ marginLeft: "auto", width: 96, height: 40 }}
            />
          </div>
          <div className={profileStyles.container}>
            <Preview />
            <ProfileEdit />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MyProfile;
