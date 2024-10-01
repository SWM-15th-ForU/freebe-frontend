import ky from "ky";
import { beforeError } from "@/services/common";
import { beforeRequest } from "./interceptor";

const apiClient = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
    credentials: "include",
    mode: "cors",
    cache: "no-store",
  })
  .extend({
    hooks: {
      beforeRequest: [beforeRequest],
      beforeError: [beforeError],
    },
  });

export default apiClient;
