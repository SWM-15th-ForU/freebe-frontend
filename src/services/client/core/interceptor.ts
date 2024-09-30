import { BeforeRequestHook, BeforeRetryHook } from "ky";
import {
  reissueIfUnauthrized,
  setAuthorizationHeader,
} from "@/services/common";

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
  await reissueIfUnauthrized(error, async () => {
    await fetch("/auth", { method: "PUT" });
  });
};
