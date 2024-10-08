import {
  deleteTokens,
  getAccessToken,
  logout,
  reissueTokens,
} from "@/services/server/core/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const allowedOrigins = [process.env.NEXT_PUBLIC_DOMAIN];
  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse("CORS Error: request from not allowed domain", {
      status: 403,
    });
  }
  const accessToken = getAccessToken();
  return NextResponse.json({ accessToken }, { status: 200 });
}

export async function PUT() {
  try {
    await reissueTokens();
    return new NextResponse();
  } catch (error) {
    deleteTokens();
    return NextResponse.redirect(
      new URL("login", process.env.NEXT_PUBLIC_DOMAIN),
    );
  }
}

export async function DELETE() {
  try {
    const response = await logout();
    if (response.redirected) {
      const redirectUrl = response.url;
      if (redirectUrl) {
        return NextResponse.redirect(redirectUrl);
      }
      if (response.status === 403) {
        deleteTokens();
        return NextResponse.redirect(
          new URL("login", process.env.NEXT_PUBLIC_DOMAIN),
        );
      }
    }
    return response;
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}
