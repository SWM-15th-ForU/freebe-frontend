import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import popToast from "@/components/common/toast";
import { mypageTabs } from "@/constants/photographer/mypage";
import { SERVICE_LINKS } from "@/constants/common/common";
import MenuItem from "./menu-item";
import { itemStyles } from "./sidebar.css";

const links = [
  { name: "서비스 안내", src: SERVICE_LINKS.landingPage },
  { name: "고객센터", src: SERVICE_LINKS.help },
];

const MenuList = ({ hasServiceLinks }: { hasServiceLinks?: boolean }) => {
  const [url, setUrl] = useState<string>("");
  const currentTab = usePathname().split("/").pop();

  useEffect(() => {
    const localData = localStorage.getItem("url");
    if (localData) {
      setUrl(`${process.env.NEXT_PUBLIC_DOMAIN}${localData}`);
    }
  });

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      popToast(
        "복사한 링크를 고객에게 전달해보세요!",
        "클립보드에 복사되었습니다.",
      );
    } catch (error) {
      popToast("다시 시도해 주세요.", "오류가 발생했습니다.");
    }
  }

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
        <MenuItem
          name="내 링크 복사"
          icon="/icons/sidebar/copy.svg"
          className={itemStyles.button}
          onClick={handleCopy}
        />
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
      <div style={{ marginTop: "auto" }}>
        {hasServiceLinks && (
          <>
            {links.map((link) => (
              <Link key={link.name} href={link.src} target="_blank">
                <MenuItem name={link.name} className={itemStyles.button} />
              </Link>
            ))}
          </>
        )}
        <MenuItem name="로그아웃" className={itemStyles.logoutButton} />
      </div>
    </div>
  );
};

export default MenuList;
