import { User } from "user-types";

type Cookies =
  | "currentUser"
  | "accessToken"
  | "requestUser"
  | "redirectRequest";

export const cookieKeys: { [key in Cookies]: string } = {
  accessToken: "accessToken",
  currentUser: "currentUser",
  redirectRequest: "redirectRequest",
  requestUser: "requestUser",
};

const userValues: { [key in User]: string } = {
  customer: "customer",
  photographer: "photographer",
};

export const cookieValues: { [key in Cookies]?: object } = {
  currentUser: userValues,
  requestUser: userValues,
};
