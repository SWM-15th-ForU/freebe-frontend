import { getAccessTokenFromCookies } from "@/utils/auth";
import { BeforeRequestHook, BeforeRetryHook, HTTPError, KyRequest } from "ky";

const setAccessToken = (request: KyRequest) => {
  const tokens = getAccessTokenFromCookies(document.cookie);
  if (!tokens.accessToken) {
    throw new Error();
  }
  request.headers.set("Authorization", `Bearer ${tokens.accessToken}`);
};

async function refreshAccessToken() {
  const { refreshToken } = getAccessTokenFromCookies(document.cookie);
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
      document.cookie = `accessToken=${newAccessToken}; refreshToken=${newRefreshToken}`;
    }
    return newAccessToken;
  }
  throw new Error("failed to reissue");
}

export const beforeRequest: BeforeRequestHook = (request) => {
  try {
    setAccessToken(request);
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
      window.location.href = `${process.env.NEXT_PUBLIC_DOMAIN}login`;
    }
  }
};
