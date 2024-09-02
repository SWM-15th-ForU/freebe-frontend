import { countInputStyles } from "@/components/inputs/input.css";
import { BeforeRequestHook, BeforeRetryHook, HTTPError } from "ky";

export const beforeRequest: BeforeRequestHook = async (request) => {
  const response = await fetch("/auth", { method: "GET" });
  if (response.ok) {
    const data = await response.json();
    if (data.accessToken) {
      request.headers.set("Authorization", `Bearer ${data.accessToken}`);
    }
  }
  console.log(request);
};

export const beforeRetry: BeforeRetryHook = async ({ request, error }) => {
  if (error instanceof HTTPError && error.response.status === 401) {
    await fetch("/auth", { method: "PUT" });
  }
};
