import { BeforeRequestHook, BeforeRetryHook, HTTPError } from "ky";
import { setAuthorizationHeader } from "@/services/common";

export const beforeRequest: BeforeRequestHook = async (request) => {
  const response = await fetch("/auth", { method: "GET" });
  if (response.ok) {
    const data = await response.json();
    setAuthorizationHeader(request, data.accessToken);
  }
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
      window.location.href = response.url;
    }
  }
};
