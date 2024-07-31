import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookieKeys, cookieValues } from "./constants/cookies";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const currentUser = cookieStore.get(cookieKeys.currentUser)?.value;
  const response = NextResponse.next();
  if (
    // 인증되지 않은 유저
    !cookieStore.has(cookieKeys.accessToken) ||
    // 고객측으로 로그인하고 작가측 페이지 접근
    (request.nextUrl.pathname.startsWith("/main") &&
      currentUser !== cookieValues.currentUser.customer)
  ) {
    return NextResponse.redirect(
      new URL("/login", process.env.NEXT_PUBLIC_DOMAIN_BASE),
    );
  }
  return response;
}

export const config = {
  // [TODO] 로그인 없이 접근 불가능한 모든 페이지 매칭 필요
  matcher: ["/"],
};
