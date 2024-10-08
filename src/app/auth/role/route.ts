import { setUserRole } from "@/services/server/core/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const allowedOrigins = [process.env.NEXT_PUBLIC_DOMAIN];
  const origin = request.headers.get("origin")?.concat("/");

  if (origin && !allowedOrigins.includes(origin)) {
    console.log(origin);
    return new NextResponse("CORS Error: request from not allowed domain", {
      status: 403,
    });
  }
  try {
    const { role } = (await request.json()) as {
      role: "photographer" | "customer";
    };
    setUserRole(role);
  } catch (error) {
    return NextResponse.json({}, { status: 400 });
  }
  return NextResponse.json({}, { status: 200 });
}
