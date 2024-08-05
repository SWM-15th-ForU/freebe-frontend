import returnFetch from "return-fetch";
import ky from "ky";
import { tokenKeys } from "@/constants/auth";
import { cookies } from "next/headers";

export const api = ky
  .create({ prefixUrl: "https://api.freebe.co.kr/" })
  .extend({
    hooks: {
      beforeRequest: [
        (request) => {
          const accessToken = cookies().get(tokenKeys.access)?.value;
          if (accessToken) {
            request.headers.set("Authorization", `Bearer ${accessToken}`);
          }
        },
      ],
    },
  });

export const nextFetch = returnFetch({
  baseUrl: "https://api.freebe.co.kr/",
});
