import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const response = NextResponse.next();
  if (accessToken) {
    response.cookies.set(accessToken);
  } else if (!request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
  }
  return response;
}

export const config = {
  matcher: [
    "/",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|.*\\.svg$).*)",
  ],
};
