import { Join } from "profile-types";
import apiClient from "../core";

export async function postProfile(form: Join, profileImg?: File) {
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
  if (profileImg !== undefined) {
    formData.append("image", profileImg);
  }

  const { data } = await apiClient
    .post("photographer/join", {
      body: formData,
    })
    .json<{ data: string }>();
  return data;
}
