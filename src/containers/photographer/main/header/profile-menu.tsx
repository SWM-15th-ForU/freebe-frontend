"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, MenuDivider } from "@mantine/core";
import { mypageTabs } from "@/constants/photographer/mypage";
import { logout } from "@/services/client/core/auth";
import { menuStyles } from "./header.css";

const ProfileMenu = () => {
  const router = useRouter();

  async function handleLogout() {
    const redirect = await logout();
    if (redirect) {
      router.push(redirect);
    }
  }

  return (
    <Menu.Dropdown>
      {mypageTabs.map((tab) => {
        return (
          <Link
            key={tab.name}
            href={`/photographer/mypage/${tab.src}`}
            className={menuStyles.item}
          >
            <Menu.Item>
              <span>{tab.name}</span>
            </Menu.Item>
          </Link>
        );
      })}
      <MenuDivider />
      <Menu.Item onClick={handleLogout}>
        <span className={menuStyles.logout}>로그아웃</span>
      </Menu.Item>
    </Menu.Dropdown>
  );
};

export default ProfileMenu;
