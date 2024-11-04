import ky from "ky";
import { beforeError } from "@/services/common";
import { beforeRequest, beforeRetry } from "./interceptor";

export const api = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
    credentials: "include",
    mode: "cors",
    cache: "no-store",
    retry: {
      limit: 3,
      methods: ["get", "post", "put", "delete"],
      statusCodes: [401],
      backoffLimit: 1000,
    },
  })
  .extend({
    hooks: {
      beforeRequest: [beforeRequest],
      beforeError: [beforeError],
      beforeRetry: [beforeRetry],
    },
  });
