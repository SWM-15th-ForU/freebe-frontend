"use client";

import { LinkButton } from "@/components/buttons/common-buttons";
import { usePathname } from "next/navigation";
import { LinkType } from "profile-types";

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
    <div>
      {mypageTabs.map((tab, index) => (
        <LinkButton key={index} selected={currentTab === tab.src} {...tab} />
      ))}
    </div>
  );
};

export default Navbar;
