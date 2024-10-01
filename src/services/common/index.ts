import { redirect } from "next/navigation";
import { BeforeErrorHook, HTTPError, KyRequest } from "ky";
import { CustomedError, getCustomedErrorMessage } from "./error";

export function setAuthorizationHeader(
  request: KyRequest,
  accessToken: string | undefined,
) {
  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }
}

async function getCustomedError(error: HTTPError) {
  const { response } = error;
  if (response.status >= 400 && response.status < 500) {
    const { code, message } = await response.json<{
      code?: string;
      message?: string;
    }>();
    const customedMessage = getCustomedErrorMessage(
      response.status,
      code,
      message,
    );
    if (customedMessage !== undefined) {
      const customedError: CustomedError = {
        ...error,
        customedMessage,
      };
      return customedError;
    }
  }
  return error;
}

export const beforeError: BeforeErrorHook = async (error) => {
  if (error.response.status === 401) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}auth`, {
      method: "PUT",
    });
    if (response.redirected) {
      redirect(response.url);
    }
  }
  const customedError = await getCustomedError(error);
  return customedError;
};
