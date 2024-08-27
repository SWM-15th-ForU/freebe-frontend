import { tokenKeys } from "@/constants/auth";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { isUser } from "@/utils/type-guards";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (searchParams.get("error") || !code || !isUser(state)) {
    return NextResponse.redirect("/login");
  }

  // const { accessToken, refreshToken, message } = await login(state, code);

  const { accessToken, refreshToken, message } = {
    accessToken: "access",
    refreshToken: "refresh",
    message: "photographer login",
  };

  // TODO: 인증 처리 중 에러 시 리디렉션 페이지 구현
  function getRedirectDestination(responseMessage: string): string {
    if (responseMessage === "photographer join") {
      return "/photographer/join";
    }
    if (responseMessage === "photographer login") {
      return "/photographer";
    }
    if (
      responseMessage === "customer login" ||
      responseMessage === "customer join"
    ) {
      const photographerId = searchParams.get("photographerId");
      const productId = searchParams.get("productId");
      return `/${photographerId}/products/${productId}/reservation/reference`;
    }
    return "/login/error";
  }

  const cookieStore = cookies();
  cookieStore.set(tokenKeys.access, accessToken);
  cookieStore.set(tokenKeys.refresh, refreshToken);

  const res = NextResponse.redirect(
    new URL(getRedirectDestination(message), process.env.NEXT_PUBLIC_DOMAIN),
  );
  res.cookies.set("accessToken", accessToken, { httpOnly: true, secure: true });
  return res;
}
