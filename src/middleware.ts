import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookieKeys, cookieValues } from "./constants/cookies";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const currentUser = cookieStore.get(cookieKeys.requestUser)?.value;
  if (currentUser === cookieValues.currentUser.photographer) {
    return NextResponse.redirect(
      new URL("/photographer", "https://www.freebe.co.kr"),
    );
  }
  if (currentUser === cookieValues.currentUser.customer) {
    const redirectPath = cookieStore.get(cookieKeys.redirectRequest)?.value;
    return NextResponse.redirect(
      redirectPath
        ? new URL(redirectPath, "https://www.freebe.co.kr")
        : new URL("/", "https://www.freebe.co.kr"),
    );
  }
  return NextResponse.redirect(new URL("/", "https://www.freebe.co.kr"));
}

export const config = {
  // [TODO] 로그인 없이 접근 불가능한 모든 페이지 매칭 필요
  matcher: ["/login/send"],
};
