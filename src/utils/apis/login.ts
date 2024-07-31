"use server";

import { cookies } from "next/headers";

export async function customerKakaoLogin(postLogin: string) {
  const cookieStore = cookies();
  cookieStore.set("requestUserType", "customer");
  cookieStore.set("postLogin", postLogin);
}

export async function kakaoLogin() {
  const cookieStore = cookies();
  cookieStore.set("requestUserType", "photographer");
}
