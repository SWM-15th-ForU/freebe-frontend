"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkType } from "profile-types";
import * as styles from "./header/header.css";
import Profile from "./header/profile";
import Url from "./header/url";

const Header = ({
  isOnboarding,
  link,
}: {
  isOnboarding?: boolean;
  link?: LinkType;
}) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const localData = localStorage.getItem("url");
    if (localData) {
      setUrl(`${process.env.NEXT_PUBLIC_DOMAIN}${localData}`);
    }
  });

  return (
    <header className={styles.headerContainer}>
      {isOnboarding ? (
        <Image
          src="/icons/freebe-logo.svg"
          width={100}
          height={20}
          alt="free:be"
        />
      ) : (
        <Link href="/photographer" style={{ height: 20 }}>
          <Image
            src="/icons/freebe-logo.svg"
            width={100}
            height={20}
            alt="free:be"
          />
        </Link>
      )}
      {!isOnboarding && (
        <>
          <Url myUrl={url} />
          <Profile />
        </>
      )}
      {link && (
        <Link href={link.src} target="_blank" className={styles.linkText}>
          {link.name}
        </Link>
      )}
    </header>
  );
};

export default Header;
