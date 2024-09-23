import { Photographer } from "profile-types";
import apiClient from "../../core";

export async function putProfile(form: Photographer) {
  const formData = new FormData();
  const inputData = {
    instagramId: form.instagramId,
    introductionContent: form.message,
    linkInfos: form.linkInfos.map((link) => {
      return {
        linkTitle: link.name,
        linkUrl: link.src,
      };
    }),
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );

  // TODO: 업데이트된 request body 형식 확인 필요
  if (form.bannerFile !== undefined) {
    formData.append("bannerImage", form.bannerFile);
  }
  if (form.imgFile !== undefined) {
    formData.append("profileImage", form.imgFile);
  }

  await apiClient.put("photographer/profile", {
    body: formData,
  });
}
