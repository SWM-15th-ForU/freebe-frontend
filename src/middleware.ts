import { NextRequest, NextResponse } from "next/server";
import { tokenKeys } from "./constants/auth";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;

  const accessToken = request.cookies.get(tokenKeys.access);
  const roleType = request.cookies.get(tokenKeys.user)?.value;

  const isLoggedIn = accessToken !== undefined;
  const isPhotographer = roleType === "photographer" && isLoggedIn;

  const shouldNotPhotographer =
    pathname.startsWith("/login") || pathname.startsWith("/photographer/join");
  const shouldPhotographer =
    pathname.startsWith("/photographer") && pathname !== "/photographer/join";
  const shouldCustomer = pathname.startsWith("/customer");

  if (shouldNotPhotographer && isPhotographer) {
    return NextResponse.redirect(new URL("/photographer", request.url));
  }
  if (shouldPhotographer && !isPhotographer) {
    return NextResponse.redirect(
      new URL(
        `/login/photographer?redirect=${encodeURIComponent(pathname)}`,
        request.url,
      ),
    );
  }
  if (shouldCustomer && !isLoggedIn) {
    return NextResponse.redirect(
      new URL(
        `/login/customer?redirect=${encodeURIComponent(pathname)}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/photographer", "/photographer/:path*", "/customer/:path*"],
};
