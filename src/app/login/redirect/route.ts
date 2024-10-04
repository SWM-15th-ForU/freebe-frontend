import { NextResponse, type NextRequest } from "next/server";
import { isUser } from "@/utils/type-guards";
import { login } from "@/services/server/login";
import { setTokens, setUserRole } from "@/services/server/core/auth";

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
      setUserRole("photographer");
      return "photographer/join";
    }
    if (responseMessage === "photographer login") {
      setUserRole("photographer");
      return `photographer?url=${data}`;
    }
    if (
      responseMessage === "customer login" ||
      responseMessage === "customer join"
    ) {
      setUserRole("customer");
      return destination as string;
    }
    return "login/error";
  }

  setTokens(accessToken, refreshToken);
  return NextResponse.redirect(
    new URL(getRedirectDestination(message), process.env.NEXT_PUBLIC_DOMAIN),
  );
}
