import { Notice } from "profile-types";
import { api } from "../../core";

export async function getCurrentNotices(): Promise<Notice[]> {
  const { data } = await api
    .get("photographer/profile")
    .json<{ data: Notice[] | null }>();
  return data || [];
}
