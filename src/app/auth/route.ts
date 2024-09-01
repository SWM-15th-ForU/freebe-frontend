import { getAccessToken, reissueTokens } from "@/services/server/core/auth";
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
  await reissueTokens();
  return NextResponse;
}
