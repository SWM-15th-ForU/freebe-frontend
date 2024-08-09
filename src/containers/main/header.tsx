"use client";

import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import * as styles from "./header/header.css";
import Profile from "./header/profile";
import Url from "./header/url";

const Header = () => {
  // [TODO] 회원가입 후 api 요청과 연결
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
