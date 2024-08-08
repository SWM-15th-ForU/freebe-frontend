import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  return new NextResponse();
}

export const config = {};
