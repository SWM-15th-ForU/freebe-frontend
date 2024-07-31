"use server";

import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

const USER_TYPE_COOKIE = "requestUserType";

const RedirectPage = async () => {
  const cookieStore = cookies();
  const requestUserType = cookieStore.get(USER_TYPE_COOKIE)?.value;
  if (requestUserType === "photographer") {
    redirect("/");
  } else if (requestUserType === "customer") {
    const redirectRequest = cookieStore.get("redirectRequest")?.value;
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
