import { Join } from "profile-types";
import apiClient from "../core";

export async function postProfile(form: Join) {
  const body = {
    profileName: form.profileName,
    termsOfServiceAgreement: form.serviceAgreement,
    privacyPolicyAgreement: form.privacyAgreement,
    marketingAgreement: form.marketingAgreement,
  };
  const { data } = await apiClient
    .post("photographer/join", {
      body: JSON.stringify(body),
    })
    .json<{ data: string }>();
  return data;
}
