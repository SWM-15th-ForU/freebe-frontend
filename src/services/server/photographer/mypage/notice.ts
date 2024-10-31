import { Notice } from "profile-types";
import { api } from "../../core";

export async function getCurrentNotices(): Promise<Notice[]> {
  // const { data } = await api
  //   .get("photographer/notice")
  //   .json<{ data: Notice[] }>();

  const data: Notice[] = [];

  const defaultData = [
    {
      title: "취소 및 환불 규정",
      content:
        "촬영일 기준 3일 전까지는 취소시 예약금을 환불해 드립니다. \n노쇼시 환불이 어렵습니다.",
    },
    {
      title: "예약 변경 규정",
      content:
        "예약 일정은  일 전까지만 변경 가능합니다. \n단, 우천시에 한해 당일 일정 변경이 가능합니다.",
    },
  ];

  return data?.length !== 0 ? data : defaultData;
}
