import ky, { BeforeRetryHook, HTTPError } from "ky";
import { tokenKeys } from "@/constants/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DEFAULT_API_RETRY_LIMIT = 2;

export async function refreshAccessToken() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get(tokenKeys.refresh)?.value;
  if (!refreshToken) {
    throw new Error("no refresh token");
  }
  const response = await fetch("https://api.freebe.co.kr/reissue", {
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

const beforeRetry: BeforeRetryHook = async ({ request, error, retryCount }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    if (retryCount === DEFAULT_API_RETRY_LIMIT - 1) {
      return ky.stop;
    }
    try {
      const newAccessToken = await refreshAccessToken();
      request.headers.set("Authorization", `Bearer ${newAccessToken}`);
    } catch (refreshError) {
      console.log(refreshError);
      redirect("/login");
    }
  } else {
    return ky.stop;
  }
};

// TODO: 클라이언트측 토큰관리와 연결
const clientApi = ky.create({ prefixUrl: "https://api.freebe.co.kr/" });

export default clientApi;
