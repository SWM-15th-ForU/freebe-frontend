import { BeforeErrorHook, HTTPError, KyRequest } from "ky";
import { CustomedError, getCustomedErrorMessage } from "./error";

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

export async function getCustomedError(error: HTTPError) {
  const { response } = error;
  const { code, message } = await response.json<{
    code?: string;
    message?: string;
  }>();
  const customedMessage = getCustomedErrorMessage(code, message);
  const customedError: CustomedError = {
    ...error,
    customedMessage,
  };
  return customedError;
}

export const beforeError: BeforeErrorHook = async (error) => {
  const customedError = await getCustomedError(error);
  return customedError;
};
