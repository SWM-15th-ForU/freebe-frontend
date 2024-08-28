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
      // TODO: 공통 에러 핸들러 추가
      afterResponse: [],
    },
  });

export default apiClient;
