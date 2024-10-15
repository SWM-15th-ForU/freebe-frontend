import { Notice } from "profile-types";
import { api } from "../../core";

export async function getCurrentNotices(): Promise<Notice[]> {
  const { data } = await api
    .get("photographer/notice")
    .json<{ data: Notice[] }>();
  return data?.length !== 0
    ? data
    : [
        { title: "취소 및 환불 규정", content: "" },
        { title: "예약 변경 규정", content: "" },
      ];
}
