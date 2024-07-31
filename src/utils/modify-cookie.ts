"use server";

import { Cookies } from "@/constants/cookies";
import { cookies } from "next/headers";

const cookieStore = cookies();

export const deleteCookieAction = async (key: Cookies) => {
  if (cookieStore.has(key)) {
    cookieStore.delete(key);
  }
};

export const setCookieAction = async (key: Cookies, value: string) => {
  cookieStore.set(key, value);
};
