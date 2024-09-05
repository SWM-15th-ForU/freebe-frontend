import { BeforeRequestHook, BeforeRetryHook, HTTPError } from "ky";
import {
  reissueIfUnauthrized,
  setAuthorizationHeader,
} from "@/services/common";
import { getAccessToken, reissueTokens } from "./auth";

export const beforeRequest: BeforeRequestHook = (request) => {
  const accessToken = getAccessToken();
  setAuthorizationHeader(request, accessToken);
};

export const beforeRetry: BeforeRetryHook = async ({ error }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    reissueIfUnauthrized(error, reissueTokens);
  }
};
