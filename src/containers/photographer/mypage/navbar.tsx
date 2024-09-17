"use client";

import { usePathname } from "next/navigation";
import { LinkTab } from "@/components/buttons/common-buttons";
import Dropdown from "@/components/common/dropdown";
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
      <div className={navbarStyle.tabDropdown}>
        <Dropdown
          placeholder="마이페이지"
          datas={mypageTabs}
          container={{ margin: 0, height: 40 }}
          onClickItem={() => {}}
          renderItem={(tab) => {
            return <LinkTab selected={currentTab === tab.src} {...tab} />;
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
