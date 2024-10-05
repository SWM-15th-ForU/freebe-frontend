import { NextRequest, NextResponse } from "next/server";
import { tokenKeys } from "./constants/auth";

export async function middleware(request: NextRequest) {
  console.log("middleware run");
  const url = request.nextUrl;
  const { pathname } = url;

  if (pathname.startsWith("/login/customer")) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get(tokenKeys.access);
  const roleType = request.cookies.get(tokenKeys.user)?.value;

  const isLoggedIn = accessToken !== undefined;
  const isPhotographer = roleType === "photographer";

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/photographer/join")
  ) {
    if (isLoggedIn && isPhotographer) {
      return NextResponse.redirect(new URL("/photographer", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/photographer")) {
    if (!isLoggedIn || !isPhotographer) {
      return NextResponse.redirect(new URL("/login/photographer", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/customer")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL(
          `/login/customer?redirect=${encodeURIComponent(pathname)}`,
          request.url,
        ),
      );
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/login/customer",
    "/login/photographer",
    "/photographer/:path*",
    "/customer/:path*",
  ],
};
