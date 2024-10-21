import { PhotographerForm } from "profile-types";
import apiClient from "../../core";

export async function putProfile(form: PhotographerForm) {
  const formData = new FormData();
  const inputData = {
    contact: form.contact,
    introductionContent: (form.message !== "" && form.message) || null,
    linkInfos: form.linkInfos.map((link) => {
      return {
        linkTitle: link.name,
        linkUrl: link.src,
      };
    }),
    existingBannerImageUrl:
      form.bannerImg === undefined || form.bannerImg.file !== undefined
        ? null
        : form.bannerImg.url,
    existingProfileImageUrl:
      form.profileImg === undefined || form.profileImg.file !== undefined
        ? null
        : form.profileImg.url,
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );

  if (form.bannerImg?.file !== undefined) {
    formData.append("bannerImage", form.bannerImg.file);
  }
  if (form.profileImg?.file !== undefined) {
    formData.append("profileImage", form.profileImg.file);
  }

  await apiClient.put("photographer/profile", {
    body: formData,
  });
}

async function deleteCookiesAfterLeave(retryCount: number) {
  const MAX_RETRY_COUNT = 5;
  try {
    await fetch("/auth/role", { method: "DELETE" });
  } catch {
    if (MAX_RETRY_COUNT > retryCount) {
      deleteCookiesAfterLeave(retryCount + 1);
    }
  }
}

export async function leaveService(reason: string) {
  await apiClient.post("unlink", { json: { reason } });
  await deleteCookiesAfterLeave(0);
}
