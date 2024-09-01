import { cookies } from "next/headers";
import { tokenKeys } from "@/constants/auth";
import { redirect } from "next/navigation";

export const getAccessToken = () => {
  const cookieStore = cookies();
  return cookieStore.get(tokenKeys.access)?.value;
};

const getRefreshToken = () => {
  const cookieStore = cookies();
  return cookieStore.get(tokenKeys.refresh)?.value;
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  const cookieStore = cookies();
  cookieStore.set(tokenKeys.access, accessToken, {
    httpOnly: true,
    secure: true,
  });
  cookieStore.set(tokenKeys.refresh, refreshToken, {
    httpOnly: true,
    secure: true,
  });
};

export const reissueTokens = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    redirect("/login");
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}reissue`,
      {
        headers: {
          refreshToken,
        },
      },
    );
    if (response.ok) {
      const newAccessToken = response.headers.get("accessToken");
      const newRefreshToken = response.headers.get("refreshToken");
      if (!newAccessToken || !newRefreshToken) {
        redirect("/login");
      } else {
        setTokens(newAccessToken, newRefreshToken);
      }
    } else {
      redirect("/login");
    }
  }
};
