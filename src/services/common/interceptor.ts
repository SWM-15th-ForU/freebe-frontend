import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BeforeRequestHook, BeforeRetryHook, HTTPError, KyRequest } from "ky";
import { tokenKeys } from "@/constants/auth";

const setAccessToken = (request: KyRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(tokenKeys.access)?.value;
  if (!accessToken) {
    throw new Error(`no ${tokenKeys.access}`);
  }
  request.headers.set("Authorization", `Bearer ${accessToken}`);
  request.headers.set("Access-Control-Allow-Credentials", `true`);
};

async function refreshAccessToken() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get(tokenKeys.refresh)?.value;
  if (!refreshToken) {
    throw new Error("no refresh token");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}reissue`, {
    headers: {
      refreshToken,
    },
  });
  if (response.ok) {
    const newAccessToken = response.headers.get("accessToken");
    const newRefreshToken = response.headers.get("refreshToken");
    if (!newAccessToken || !newRefreshToken) {
      throw new Error("failed to reissue");
    } else {
      cookieStore.set(tokenKeys.access, newAccessToken);
      cookieStore.set(tokenKeys.refresh, newRefreshToken);
    }
    return newAccessToken;
  }
  throw new Error("failed to reissue");
}

export const beforeRequest: BeforeRequestHook = (request) => {
  try {
    console.log("before request interceptor");
    setAccessToken(request);
    console.log(request);
  } catch (error) {
    console.log(error);
    // TODO: 에러 메시지 사용자측으로 보여 주기
  }
};

export const beforeRetry: BeforeRetryHook = async ({ request, error }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    try {
      const newAccessToken = await refreshAccessToken();
      request.headers.set("Authorization", `Bearer ${newAccessToken}`);
    } catch (refreshError) {
      console.log(refreshError);
      redirect("/login");
    }
  }
};