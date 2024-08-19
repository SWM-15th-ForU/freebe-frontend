"use server";

import { cookieKeys, cookieValues } from "@/constants/cookies";
import { cookies } from "next/headers";
import { api } from ".";

export async function customerKakaoLogin(postLogin: string) {
  const cookieStore = cookies();
  cookieStore.set(cookieKeys.requestUser, cookieValues.requestUser.customer);
  cookieStore.set(cookieKeys.redirectRequest, postLogin);
}

export async function kakaoLogin() {
  const cookieStore = cookies();
  cookieStore.set(
    cookieKeys.requestUser,
    cookieValues.requestUser.photographer,
  );
}
interface RegisterResponse {
  data: string;
}

export async function postUserRole(
  roleType: string,
): Promise<RegisterResponse> {
  const response = await api.post("login/type", { json: { roleType } });
  return (await response.json()) as RegisterResponse;
}
