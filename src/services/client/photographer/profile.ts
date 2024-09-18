import { Join } from "profile-types";
import apiClient from "../core";

export async function postProfile(form: Join) {
  const formData = new FormData();
  const inputData = {
    instagramId: form.instagramId,
    termsOfServiceAgreement: form.serviceAgreement,
    privacyPolicyAgreement: form.privacyAgreement,
    marketingAgreement: form.marketingAgreement,
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );
  if (form.profileImg) {
    formData.append("image", form.profileImg);
  }

  const { data } = await apiClient
    .post("photographer/join", {
      body: formData,
      headers: { "content-type": "multipart/form-data" },
    })
    .json<{ data: string }>();
  return data;
}
