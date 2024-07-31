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

export const cookieValues: {
  currentUser: { [key in User]: string };
  requestUser: { [key in User]: string };
} = {
  currentUser: userValues,
  requestUser: userValues,
};
