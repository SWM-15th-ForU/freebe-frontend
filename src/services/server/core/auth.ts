import { cookies } from "next/headers";
import { tokenKeys } from "@/constants/auth";
import { redirect } from "next/navigation";
import { User } from "user-types";

export const setUserRole = (role: User) => {
  const cookieStore = cookies();
  cookieStore.set(tokenKeys.user, role);
};

export const getAccessToken = () => {
  const cookieStore = cookies();
  return cookieStore.get(tokenKeys.access)?.value;
};

export const deleteTokens = () => {
  const cookieStore = cookies();
  Object.values(tokenKeys).forEach((key) => {
    if (cookieStore.has(key)) {
      cookieStore.delete(key);
    }
  });
  console.log("delete tokens and user role from cookies");
};

export const getRefreshToken = () => {
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

export const reissueTokens = async (callback?: () => Promise<any>) => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error();
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}reissue`,
      {
        method: "POST",
        headers: {
          refreshToken,
        },
      },
    );
    if (response.ok) {
      const newAccessToken = response.headers.get("accessToken");
      const newRefreshToken = response.headers.get("refreshToken");
      if (!newAccessToken || !newRefreshToken) {
        throw new Error();
      } else {
        setTokens(newAccessToken, newRefreshToken);
      }
      if (callback) {
        callback();
      }
    } else {
      throw new Error();
    }
  }
};

export const logout = async () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}logout`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      refreshToken: refreshToken || "",
    },
    method: "POST",
  });
  if (response.status === 401) {
    try {
      await reissueTokens(logout);
    } catch {
      deleteTokens();
      redirect("/");
    }
  }
  if (response.ok || response.redirected) {
    deleteTokens();
  }
  return response;
};
