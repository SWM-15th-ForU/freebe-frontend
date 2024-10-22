"use client";

import { useRouter } from "next/navigation";
import { Notice, NoticeForm } from "profile-types";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MAX_LENGTHS } from "@/constants/common/schema";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import { putNewNotices } from "@/services/client/photographer/mypage/notice";
import NoticeGuide from "./guide";
import NoticeEdit from "./edit";

const PhotographerNotice = ({ data }: { data: Notice[] }) => {
  const router = useRouter();
  const noticeSchema = z.object({
    notices: z.array(
      z.object({
        title: z
          .string()
          .min(1, { message: "제목을 비워둘 수 없습니다." })
          .max(MAX_LENGTHS.TITLE, { message: "30자 이내로 작성해주세요." }),
        content: z
          .string()
          .min(1, { message: "내용을 비워둘 수 없습니다." })
          .max(MAX_LENGTHS.LONG_TEXT, {
            message: "300자 이내로 작성해주세요.",
          }),
      }),
    ),
  });
  const method = useForm<NoticeForm>({
    defaultValues: { notices: data },
    resolver: zodResolver(noticeSchema),
  });
  const { handleSubmit } = method;

  async function onSubmit(form: NoticeForm) {
    responseHandler(
      putNewNotices(form),
      () => {
        popToast("저장이 완료되었습니다.");
        router.refresh();
      },
      (message) => {
        popToast(
          "다시 시도해 주세요.",
          message || "저장에 실패했습니다.",
          true,
        );
      },
    );
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NoticeGuide />
        <NoticeEdit />
      </form>
    </FormProvider>
  );
};

export default PhotographerNotice;
