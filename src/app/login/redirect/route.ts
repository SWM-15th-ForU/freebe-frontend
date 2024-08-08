import { tokenKeys } from "@/constants/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, basePath } = request.nextUrl;
  const accessToken = searchParams.get(tokenKeys.access);
  const refreshToken = searchParams.get(tokenKeys.refresh);
  const cookieStore = cookies();
  if (accessToken) {
    cookieStore.set("accessToken", accessToken);
  }
  if (refreshToken) {
    cookieStore.set("refreshToken", refreshToken);
  }
  redirect(`${basePath}/login//photographer/register`);
}
