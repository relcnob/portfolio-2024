"use client";

import { useState } from "react";
import DarkModeToggle from "../../functionalities/dark-mode-toggle/dark-mode-toggle";
import Button from "../button/button";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`flex flex-row w-full max-w-screen-2xl	px-8 py-2 justify-between items-center mx-auto`}
      >
        <Link href="/">Relcnob</Link>
        <section className={`flex flex-row gap-7`}>
          <Button onClick={() => console.log("test")}>Let&apos;s chat</Button>
          <DarkModeToggle />
          <div
            className={`grid grid-cols-2 grid-rows-2 w-8 h-8 items-center justify-center cursor-pointer transition duration-300 group`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`flex bg-secondary-000 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
            ></span>
            <span
              className={`flex bg-secondary-000 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-[-0.5rem] group-hover:translate-y-2`}
            ></span>
            <span
              className={`flex bg-secondary-000 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem]`}
            ></span>
            <span
              className={`flex bg-secondary-000 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-[-0.5rem] group-hover:translate-y-[-0.5rem]`}
            ></span>
          </div>
        </section>
      </header>
      <nav
        className={`fixed flex items-center w-full h-[100vh] backdrop-blur-xl  transition duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
      >
        <ul
          className={`flex flex-col gap-4 text-8xl w-full group bg-transparent `}
        >
          <li
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-000 dark:hover:border-primary-000`}
          >
            HOME
          </li>
          <li
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-000 dark:hover:border-primary-000`}
          >
            ABOUT
          </li>
          <li
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-000 dark:hover:border-primary-000`}
          >
            WORKS
          </li>
          <li
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-000 dark:hover:border-primary-000`}
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
