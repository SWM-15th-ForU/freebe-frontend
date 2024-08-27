"use client";

import { LinkButton, LinkTab } from "@/components/buttons/common-buttons";
import { usePathname } from "next/navigation";
import { LinkType } from "profile-types";
import { navbarStyle } from "./mypage.css";

const Navbar = () => {
  const currentTab = usePathname().split("/").pop();
  const mypageTabs: LinkType[] = [
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
      name: "자주 묻는 질문 관리",
      src: "faqs",
    },
    {
      name: "예약 일정 오픈",
      src: "schedule",
    },
  ];

  return (
    <div className={navbarStyle.container}>
      <span className={navbarStyle.title}>마이페이지</span>
      <div className={navbarStyle.tabWrapper}>
        {mypageTabs.map((tab, index) => (
          <LinkTab key={index} selected={currentTab === tab.src} {...tab} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
