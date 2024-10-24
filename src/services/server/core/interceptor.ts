import { BeforeRequestHook, BeforeRetryHook, HTTPError } from "ky";
import { redirect } from "next/navigation";
import { setAuthorizationHeader } from "@/services/common";
import { getAccessToken } from "./auth";

export const beforeRequest: BeforeRequestHook = async (request) => {
  const accessToken = getAccessToken();
  setAuthorizationHeader(request, accessToken);
  if (!request.headers.has("Content-Type")) {
    request.headers.set("Content-Type", "application/json");
  }
};

export const beforeRetry: BeforeRetryHook = async ({ error }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}auth`, {
      method: "PUT",
    });
    if (response.redirected) {
      redirect(response.url);
    }
  }
};
