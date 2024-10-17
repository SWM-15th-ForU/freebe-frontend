import { BeforeRequestHook } from "ky";
import { setAuthorizationHeader } from "@/services/common";
import { getAccessToken } from "./auth";

export const beforeRequest: BeforeRequestHook = async (request) => {
  const accessToken = getAccessToken();
  setAuthorizationHeader(request, accessToken);
  if (!request.headers.has("Content-Type")) {
    request.headers.set("Content-Type", "application/json");
  }
};
