import returnFetch from "return-fetch";
import ky from "ky";
import { tokenKeys } from "@/constants/auth";

export const api = ky
  .create({ prefixUrl: "https://api.freebe.co.kr/" })
  .extend({
    hooks: {
      beforeRequest: [
        (request) => {
          const accessToken = localStorage.getItem(tokenKeys.access);
          if (accessToken) {
            request.headers.set("access-token", accessToken);
          }
        },
      ],
    },
  });

export const nextFetch = returnFetch({
  // [TODO] switch to domain
  baseUrl: "https://api.freebe.co.kr/",
});
