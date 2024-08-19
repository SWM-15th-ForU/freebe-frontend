"use client";

import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import * as styles from "./header/header.css";
import Profile from "./header/profile";
import Url from "./header/url";

const Header = () => {
  const { userData, userRole } = useUserInfo();

  return (
    <header className={styles.headerContainer}>
      <Link href="/photographer">
        <div>메인</div>
      </Link>
      <Profile name="ForU" />
      <Url myUrl={userRole === "photographer" ? userData.profileUrl : ""} />
    </header>
  );
};

export default Header;
