"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkType } from "profile-types";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CloseButton from "@/components/buttons/close-button";
import * as styles from "./header/header.css";
import MenuList from "./sidebar/menu-list";

const Header = ({
  isOnboarding,
  links,
}: {
  isOnboarding?: boolean;
  links?: LinkType[];
}) => {
  const [opened, { close, open }] = useDisclosure(false);

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
      {links && (
        <div className={styles.linkWrapper}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.src}
              target="_blank"
              className={styles.linkText}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      {!isOnboarding && (
        <>
          <button
            type="button"
            onClick={open}
            className={styles.menuStyles.button}
          >
            <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
          </button>
          <Drawer
            size="xs"
            withCloseButton={false}
            onClose={close}
            opened={opened}
            position="right"
          >
            <CloseButton
              onClick={close}
              size={16}
              container={{ position: "absolute", right: 40, top: 50 }}
            />
            <MenuList hasServiceLinks />
          </Drawer>
        </>
      )}
    </header>
  );
};

export default Header;
