import { LinkType } from "profile-types";

export const mypageTabs: LinkType[] = [
  {
    name: "이전 예약",
    src: "previous",
  },
  {
    name: "내 상품 목록",
    src: "products",
  },
  {
    name: "내 프로필 관리",
    src: "profile",
  },
  {
    name: "공지사항 관리",
    src: "notice",
  },
  {
    name: "자주 묻는 질문 관리",
    src: "faqs",
  },
  {
    name: "예약 일정 오픈",
    src: "schedule",
  },
];

export const defaultLinks: LinkType[] = [
  { name: "상품 선택하기", src: "/products" },
  { name: "공지사항 확인하기", src: "/notices" },
  // { name: "일정 확인하기 ", src: "/schedules" },
  // { name: "자주 묻는 질문", src: "/faqs" },
];

export const SAMPLE_NOTICE = ["포트폴리오 사용", "보정본 작업 기간"];
export const REQUIRED_NOTICES_BOUND = 2;
