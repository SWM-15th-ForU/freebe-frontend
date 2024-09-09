import ky from "ky";
import { beforeRequest, beforeRetry } from "./interceptor";

export const api = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
    credentials: "include",
    mode: "cors",
  })
  .extend({
    hooks: {
      beforeRequest: [beforeRequest],
      beforeRetry: [beforeRetry],
      // TODO: 공통 에러 핸들러 추가
      afterResponse: [],
    },
  });
