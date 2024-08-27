import { tokenKeys } from "@/constants/auth";

export function getAccessTokenFromCookies(cookieString: string) {
  const auth: Partial<{ accessToken: string; refreshToken: string }> = {};
  cookieString.split("; ").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    if (key === tokenKeys.access) {
      auth.accessToken = value;
    } else if (key === tokenKeys.refresh) {
      auth.refreshToken = value;
    }
  });
  return auth;
}
