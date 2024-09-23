import { Photographer } from "profile-types";
import apiClient from "../../core";

export async function putProfile(
  form: Photographer,
  files: { bannerFile?: File; profileFile?: File },
) {
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
  if (files.bannerFile !== undefined) {
    formData.append("bannerImage", files.bannerFile);
  }
  if (files.profileFile !== undefined) {
    formData.append("profileImage", files.profileFile);
  }

  await apiClient.put("photographer/profile", {
    body: formData,
  });
}
