import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const response = NextResponse.next();
  if (
    !request.nextUrl.pathname.startsWith("/login") &&
    !cookieStore.has("accessToken")
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
