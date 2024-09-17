import Image from "next/image";
import { Menu } from "@mantine/core";
import ProfileImage from "@/components/images/profile-image";
import ProfileMenu from "./profile-menu";
import { menuStyles, profileContainer } from "./header.css";

const Profile = () => {
  return (
    <div className={profileContainer}>
      <Image src="/icons/alarm.svg" alt="알림" width={20} height={24} />
      <Menu
        position="top-end"
        classNames={{
          dropdown: menuStyles.dropdown,
          itemLabel: menuStyles.item,
        }}
      >
        <Menu.Target>
          <div
            style={{ display: "flex", alignItems: "center", gap: 8, width: 50 }}
          >
            <ProfileImage />
            <Image
              src="/icons/down-skyblue.svg"
              alt="내 프로필"
              width={10}
              height={5}
            />
          </div>
        </Menu.Target>
        <ProfileMenu />
      </Menu>
    </div>
  );
};

export default Profile;
