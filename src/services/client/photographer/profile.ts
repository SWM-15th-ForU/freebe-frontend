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
      json: body,
    })
    .json<{ data: string }>();
  await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}auth/role`, {
    method: "POST",
    body: JSON.stringify({
      role: "photographer",
    }),
  });
  return data;
}
