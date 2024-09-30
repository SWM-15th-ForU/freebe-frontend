import ky from "ky";
import { beforeError } from "@/services/common";
import { beforeRequest, beforeRetry } from "./interceptor";

export const api = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
    credentials: "include",
    mode: "cors",
    cache: "no-store",
  })
  .extend({
    hooks: {
      beforeRequest: [beforeRequest],
      beforeRetry: [beforeRetry],
      beforeError: [beforeError],
    },
  });
