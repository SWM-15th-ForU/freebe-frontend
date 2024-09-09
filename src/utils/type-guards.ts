import { User } from "user-types";

export const isUser = (target: any): target is User => {
  return target === "photographer" || target === "customer";
};
