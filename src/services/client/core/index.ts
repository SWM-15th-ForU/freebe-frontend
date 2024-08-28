import ky from "ky";
import { beforeRequest, beforeRetry } from "./interceptor";

const apiClient = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
  })
  .extend({
    hooks: {
      beforeRequest: [beforeRequest],
      beforeRetry: [beforeRetry],
    },
  });

export default apiClient;
