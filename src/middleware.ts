import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");
  const response = NextResponse.next();
  if (accessToken && refreshToken) {
    response.cookies.set(accessToken);
    response.cookies.set(refreshToken);
  } else if (!request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
  }
  return response;
}

export const config = {
  matcher: ["/"],
};
