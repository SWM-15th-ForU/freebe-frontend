import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Modal } from "@mantine/core";
import { mypageTabs } from "@/constants/photographer/mypage";
import { SERVICE_LINKS } from "@/constants/common/common";
import { logout } from "@/services/client/core/auth";
import MenuItem from "./menu-item";
import { itemStyles, linkStyles } from "./sidebar.css";
import LinkCopy from "./link-copy";

const links = [
  { name: "서비스 안내", src: SERVICE_LINKS.landingPage },
  { name: "고객센터", src: SERVICE_LINKS.help },
  { name: "공지사항", src: SERVICE_LINKS.notice },
];

const MenuList = ({ hasServiceLinks }: { hasServiceLinks?: boolean }) => {
  const router = useRouter();
  const currentTab = usePathname().split("/").pop();

  const [opened, setOpened] = useState(false);

  async function handleLogout() {
    const redirect = await logout();
    if (redirect) {
      router.push(redirect);
    }
  }

  function handleOpenTutorial() {
    router.replace("/photographer?tutorial=true", { scroll: true });
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
        <Link href="/photographer/profile">
          <MenuItem
            name="프로필 설정"
            icon={
              currentTab === "profile"
                ? "/icons/sidebar/profile-blue.svg"
                : "/icons/sidebar/profile.svg"
            }
            className={
              currentTab === "profile"
                ? itemStyles.selectedButton
                : itemStyles.button
            }
          />
        </Link>
        <MenuItem
          name="내 예약 페이지"
          icon={
            opened ? "/icons/sidebar/link-blue.svg" : "/icons/sidebar/link.svg"
          }
          className={opened ? itemStyles.selectedButton : itemStyles.button}
          onClick={() => setOpened((prev) => !prev)}
        />
        <Modal
          onClose={() => setOpened(false)}
          withCloseButton={false}
          opened={opened}
          centered
          overlayProps={{ backgroundOpacity: 0 }}
          classNames={{ content: linkStyles.dropdown }}
          lockScroll={false}
        >
          <LinkCopy />
        </Modal>
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
        <MenuItem
          name="튜토리얼 보기"
          className={`${itemStyles.button} ${itemStyles.mobileDisable}`}
          onClick={handleOpenTutorial}
        />
        <MenuItem
          name="로그아웃"
          onClick={handleLogout}
          icon="/icons/logout.svg"
          className={itemStyles.button}
        />
      </div>
    </div>
  );
};

export default MenuList;
