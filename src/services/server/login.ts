"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AfterResponseHook } from "ky";
import { User } from "user-types";
import { cookieKeys, cookieValues } from "@/constants/cookies";
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
interface RegisterResponse {
  data: string;
}

export async function postUserRole(
  roleType: string,
): Promise<RegisterResponse> {
  const response = await api.post("login/type", { json: { roleType } });
  return (await response.json()) as RegisterResponse;
}

interface LoginResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  data?: string;
}

export async function login(
  roleType: User,
  code: string,
): Promise<LoginResponse> {
  const handleLoginError: AfterResponseHook = () => {
    redirect("error");
  };

  const response = await api.post("login", {
    json: { roleType: roleType.toUpperCase(), code },
    hooks: { afterResponse: [handleLoginError] },
  });

  const accessToken = response.headers.get("accessToken");
  const refreshToken = response.headers.get("refreshToken");
  const { data, message } = (await response.json()) as {
    data?: string;
    message: string;
  };

  if (!accessToken || !refreshToken) {
    throw new Error("failed login");
  } else {
    return { message, accessToken, refreshToken, data } as LoginResponse;
  }
}
