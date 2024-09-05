import { HTTPError, KyRequest } from "ky";

export async function reissueIfUnauthrized(
  error: Error,
  reissue: () => Promise<void>,
) {
  if (error instanceof HTTPError && error.response.status === 401) {
    await reissue();
  }
}

export function setAuthorizationHeader(
  request: KyRequest,
  accessToken: string | undefined,
) {
  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }
}
