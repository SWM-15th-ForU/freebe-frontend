import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mypageTabs } from "@/constants/photographer/mypage";
import MenuItem from "./menu-item";
import LinkCopy from "./link-copy";
import { itemStyles } from "./sidebar.css";

const MenuList = () => {
  const [linkOpened, setLinkOpened] = useState(false);
  const currentTab = usePathname().split("/").pop();

  return (
    <div className={itemStyles.container}>
      <div style={{ position: "relative", overflow: "visible" }}>
        <span className={itemStyles.title}>메뉴</span>
        <Link href="/photographer">
          <MenuItem
            name="메인페이지"
            icon={
              currentTab === "photographer"
                ? "/icons/sidebar/main-blue.svg"
                : "/icons/sidebar/main.svg"
            }
            className={
              currentTab === "photographer"
                ? itemStyles.selectedButton
                : itemStyles.button
            }
          />
        </Link>
        <Link href="/photographer/new-product">
          <MenuItem
            name="촬영 상품 등록"
            icon={
              currentTab === "new-product"
                ? "/icons/sidebar/camera-blue.svg"
                : "/icons/sidebar/camera.svg"
            }
            className={
              currentTab === "new-product"
                ? itemStyles.selectedButton
                : itemStyles.button
            }
          />
        </Link>
        <div style={{ position: "relative" }}>
          <MenuItem
            name="내 링크 복사"
            icon="/icons/sidebar/copy.svg"
            className={itemStyles.button}
            onClick={() => setLinkOpened((prev) => !prev)}
          />
          {linkOpened && <LinkCopy onClose={() => setLinkOpened(false)} />}
        </div>
      </div>
      <div>
        <span className={itemStyles.title}>마이페이지</span>
        {mypageTabs.map((tab) => (
          <Link href={`/photographer/mypage/${tab.src}`} key={tab.name}>
            <MenuItem
              name={tab.name}
              className={
                currentTab === tab.src
                  ? itemStyles.selectedButton
                  : itemStyles.button
              }
            />
          </Link>
        ))}
      </div>
      <MenuItem
        name="로그아웃"
        className={itemStyles.logoutButton}
        container={{ marginTop: "auto" }}
      />
    </div>
  );
};

export default MenuList;
