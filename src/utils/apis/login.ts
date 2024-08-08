"use server";

import { cookieKeys, cookieValues } from "@/constants/cookies";
import { cookies } from "next/headers";
import { api } from "./core";

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

export async function postUserRole(roleType: string) {
  const res = await api.post("login/type", { json: { roleType } }).json();
  return res;
}
