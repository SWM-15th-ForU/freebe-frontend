import ky from "ky";
import { getAccessTokenFromCookies } from "@/utils/auth";

const DEFAULT_API_RETRY_LIMIT = 2;

const clientApi = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
  })
  .extend({
    hooks: {
      beforeRequest: [
        (request) => {
          const tokens = getAccessTokenFromCookies(document.cookie);
          if (!tokens.accessToken) {
            // TODO: 토큰 없을 경우의 에러 처리
          } else {
            request.headers.set(
              "Authorization",
              `Bearer ${tokens.accessToken}`,
            );
          }
        },
      ],
    },
  });

export default clientApi;
