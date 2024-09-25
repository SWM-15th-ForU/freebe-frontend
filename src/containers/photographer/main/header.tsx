"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./header/header.css";
import Profile from "./header/profile";
import Url from "./header/url";

const Header = () => {
  const [url, setUrl] = useState<string | null>();

  useEffect(() => {
    const localData = localStorage.getItem("url");
    if (localData) {
      setUrl(localData);
    }
  });

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
      {url && (
        <>
          <Url myUrl={url} />
          <Profile />
        </>
      )}
    </header>
  );
};

export default Header;
