"use client";

import styles from "./page.module.css";
import Button from "./components/ui-elements/button/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button onClick={() => console.log("test")}>Let&apos;s chat</Button>
    </main>
  );
}
