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
};

export const beforeRetry: BeforeRetryHook = async ({ error }) => {
  reissueIfUnauthrized(error, async () => {
    const response = await fetch("/auth", { method: "PUT" });
  });
};
