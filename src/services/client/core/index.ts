import ky, { BeforeRetryHook, HTTPError } from "ky";
import { tokenKeys } from "@/constants/auth";
import { redirect } from "next/navigation";

const DEFAULT_API_RETRY_LIMIT = 2;

// TODO: 클라이언트측 토큰관리와 연결
const clientApi = ky
  .create({
    prefixUrl: "https://f4ac-221-148-248-129.ngrok-free.app/",
  })
  .extend({
    hooks: {
      beforeRequest: [
        (request) => {
          const accessToken =
            "eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiIyIiwibWVtYmVySWQiOiIyIiwiaWF0IjoxNzIzNDI3ODUwLCJleHAiOjE3MjQ2Mzc0NTB9.xCbeUkOWaklnoi5GP8U9dKcIRjPz9BTDZRv0RuWqiJxm8e6WSzW2r7eETbQ5lAKR";

          request.headers.set("Authorization", `Bearer ${accessToken}`);
        },
      ],
    },
  });

export default clientApi;
