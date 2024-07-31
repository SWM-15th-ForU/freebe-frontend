"use server";

import { cookieKeys, cookieValues } from "@/constants/cookies";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

const RedirectPage = async () => {
  const cookieStore = cookies();
  const requestUserType = cookieStore.get(cookieKeys.requestUser)?.value;
  if (requestUserType === cookieValues.requestUser.photographer) {
    redirect("/");
  } else if (requestUserType === cookieValues.requestUser.customer) {
    const redirectRequest = cookieStore.get(cookieKeys.redirectRequest)?.value;
    if (redirectRequest) {
      redirect(redirectRequest);
    } else {
      redirect("/customer");
    }
  } else {
    notFound();
  }
};

export default RedirectPage;
