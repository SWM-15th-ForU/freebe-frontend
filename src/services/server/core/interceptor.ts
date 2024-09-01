import { BeforeRequestHook, BeforeRetryHook, HTTPError } from "ky";
import { getAccessToken, reissueTokens } from "./auth";

export const beforeRequest: BeforeRequestHook = (request) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  request.headers.set("Access-Control-Allow-Credentials", `true`);
  console.log(request);
};

export const beforeRetry: BeforeRetryHook = async ({ error }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    await reissueTokens();
  }
};
