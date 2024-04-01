"use client";

import Button from "./components/ui-elements/button/button";
import Header from "./components/ui-elements/header/header";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <main>
          <Header />
        </main>
      </ThemeProvider>
    </>
  );
}
