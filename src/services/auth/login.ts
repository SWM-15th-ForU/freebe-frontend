"use server";

import { api } from "../core/base";

interface RegisterResponse {
  data: string;
}

export async function postUserRole(
  roleType: string,
): Promise<RegisterResponse> {
  const response = await api.post("login/type", { json: { roleType } });
  return (await response.json()) as RegisterResponse;
}
