"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LinkType } from "profile-types";
import { Drawer, FocusTrap, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SERVICE_LINKS } from "@/constants/common/common";
import CloseButton from "@/components/buttons/close-button";
import * as styles from "./header/header.css";
import MenuList from "./sidebar/menu-list";
import { menuStyles } from "./header/header.css";
import { customDrawerStyles } from "./main.css";
import MobileTutorial from "./tutorial/mobile";

const Header = ({
  isOnboarding,
  links,
}: {
  isOnboarding?: boolean;
  links?: LinkType[];
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [opened, { close, open }] = useDisclosure(false);
  const [isOnTutorial, { close: closeTutorial, open: openTutorial }] =
    useDisclosure(false, {
      onClose: () => {
        router.replace("/photographer");
      },
    });

  useEffect(() => {
    const tutorialParam = searchParams.get("tutorial");
    if (tutorialParam) {
      openTutorial();
    } else {
      closeTutorial();
    }
  }, [searchParams]);

  useEffect(() => {
    close();
  }, [pathName]);

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
        <Link href="/photographer" style={{ height: 20, cursor: "pointer" }}>
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
      {isOnboarding ? (
        <div className={menuStyles.mobileDisplay}>
          <Menu
            classNames={{
              dropdown: menuStyles.dropdown,
              itemLabel: menuStyles.item,
            }}
          >
            <Menu.Target>
              <Image
                src="/icons/down-skyblue.svg"
                alt="메뉴"
                width={15}
                height={10}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Link
                href={SERVICE_LINKS.landingPage}
                className={menuStyles.item}
                target="_blank"
              >
                <Menu.Item>
                  <span>서비스 안내</span>
                </Menu.Item>
              </Link>
              <Link
                href={SERVICE_LINKS.help}
                className={menuStyles.item}
                target="_blank"
              >
                <Menu.Item>
                  <span>고객센터</span>
                </Menu.Item>
              </Link>
              <Link
                href={SERVICE_LINKS.notice}
                className={menuStyles.item}
                target="_blank"
              >
                <Menu.Item>
                  <span>공지사항</span>
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
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
            opened={opened || isOnTutorial}
            position="right"
            autoFocus={false}
            classNames={{ ...customDrawerStyles }}
          >
            <FocusTrap.InitialFocus />
            <MobileTutorial close={closeTutorial} opened={isOnTutorial} />
            <CloseButton
              onClick={close}
              size={16}
              container={{ position: "absolute", right: 40, top: 34 }}
            />
            <MenuList hasServiceLinks />
          </Drawer>
        </>
      )}
    </header>
  );
};

export default Header;
