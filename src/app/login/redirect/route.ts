import { tokenKeys } from "@/constants/auth";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { isUser } from "@/utils/type-guards";
import { login } from "@/services/server/login";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (searchParams.get("error") || !code || !state) {
    return NextResponse.redirect(
      new URL("login/error", process.env.NEXT_PUBLIC_DOMAIN),
    );
  }

  const { roleType, destination } = JSON.parse(state);
  if (!isUser(roleType)) {
    return NextResponse.redirect(
      new URL("login/error", process.env.NEXT_PUBLIC_DOMAIN),
    );
  }

  const { accessToken, refreshToken, message, data } = await login(
    roleType,
    code,
  );

  function getRedirectDestination(responseMessage: string): string {
    if (responseMessage === "photographer join") {
      return "photographer/join";
    }
    if (responseMessage === "photographer login") {
      return `photographer?url=${data}`;
    }
    if (
      responseMessage === "customer login" ||
      responseMessage === "customer join"
    ) {
      return destination as string;
    }
    return "login/error";
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
