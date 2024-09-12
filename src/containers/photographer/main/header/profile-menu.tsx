import { mypageTabs } from "@/constants/photographer/mypage";
import { Menu, MenuDivider } from "@mantine/core";
import Link from "next/link";
import { menuStyles } from "./header.css";

const ProfileMenu = () => {
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
      <Menu.Item>
        <span className={menuStyles.logout}>로그아웃</span>
      </Menu.Item>
    </Menu.Dropdown>
  );
};

export default ProfileMenu;
