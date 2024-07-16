"use client";

import styles from "@/styles/page.module.css";
import { useSession } from "next-auth/react";
import Page from "./_login/page";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.main}>
      {session && session.user ? (
        <div className={styles.center}>
          <h3>{session.user.name} 안녕하세요.</h3>
        </div>
      ) : (
        <Page />
      )}
    </div>
  );
}
