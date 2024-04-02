"use client";

import Button from "./components/ui-elements/button/Button";
import Header from "./components/ui-elements/header/Header";
import Hero from "./components/ui-elements/hero/Hero";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <main>
          <Header />
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}
