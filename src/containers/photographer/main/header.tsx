"use client";

import Link from "next/link";
import Image from "next/image";
import useUserInfo from "@/hooks/useUserInfo";
import * as styles from "./header/header.css";
import Profile from "./header/profile";
import Url from "./header/url";

const Header = () => {
  const { userData, userRole } = useUserInfo();

  return (
    <header className={styles.headerContainer}>
      <Link href="/photographer" style={{ height: 20 }}>
        <Image
          src="/icons/freebe-logo.svg"
          width={100}
          height={20}
          alt="free:be"
        />
      </Link>
      {userRole === "photographer" && (
        <div>
          <Url myUrl={userRole === "photographer" ? userData.profileUrl : ""} />
          <Profile />
        </div>
      )}
    </header>
  );
};

export default Header;
