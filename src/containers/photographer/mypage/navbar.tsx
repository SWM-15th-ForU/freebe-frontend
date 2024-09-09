"use client";

import { usePathname } from "next/navigation";
import { LinkTab } from "@/components/buttons/common-buttons";
import { mypageTabs } from "@/constants/photographer/mypage";
import { navbarStyle } from "./mypage.css";

const Navbar = () => {
  const currentTab = usePathname().split("/").pop();

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
