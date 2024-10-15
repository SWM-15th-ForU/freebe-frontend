import { Notice } from "product-types";
import apiClient from "../core";

export async function getProductNotices(productId: string): Promise<Notice[]> {
  // const { data } = await apiClient
  //   .get(`customer/notice/${productId}`)
  //   .json<{ data: Notice[] | null }>();
  const data = [
    {
      title: "중요 업데이트",
      content: "이번 주말에 시스템 유지보수를 진행할 예정입니다.",
    },
    {
      title: "새로운 기능 발표",
      content: "애플리케이션에 새로운 기능이 추가될 예정입니다. 기대해 주세요!",
    },
    {
      title: "휴일 일정",
      content: "12월 24일부터 1월 1일까지 사무실이 휴무입니다.",
    },
  ];
  return data || [];
}
