"use client";

import { useState } from "react";
import DarkModeToggle from "../../functionalities/dark-mode-toggle/dark-mode-toggle";
import Button from "../button/button";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

type Props = {
  isHome?: boolean;
};

const Header = ({ isHome }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`flex flex-row w-full px-4 md:px-8 lg:px-32 py-2 justify-between items-center mx-auto fixed top-0 left-[-50%] translate-x-1/2 z-50 bg-white dark:bg-secondary-200 md:bg-transparent md:dark:bg-transparent hover:bg-white dark:hover:bg-secondary-200 transition-background duration-500`}
      >
        <Link
          href="/"
          className={`font-sans text-xl font-bold tracking-wide flex flex-row group`}
        >
          <p
            className={`transition duration-300 ease-in-out group-hover:text-primary-200 group-hover:dark:text-primary-100`}
          >
            RELCNOB
          </p>
          <p
            className={`ml-4 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:text-primary-200 group-hover:dark:text-primary-100 group-hover:translate-x-[-0.5rem]`}
          >
            {"<"}
          </p>
        </Link>
        <section className={`flex flex-row gap-7`}>
          <Button onClick={() => window.open("mailto:contact@relcnob.com")}>
            Let&apos;s chat
          </Button>
          <DarkModeToggle />
          <div
            className={`grid grid-cols-2 grid-rows-2 w-8 h-8 items-center justify-center cursor-pointer transition duration-300 group`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`flex bg-secondary-200 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
            ></span>
            <span
              className={`flex bg-secondary-200 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-[-0.5rem] group-hover:translate-y-2`}
            ></span>
            <span
              className={`flex bg-secondary-200 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem]`}
            ></span>
            <span
              className={`flex bg-secondary-200 dark:bg-white w-2 h-2 rounded-full transition duration-300 group-hover:translate-x-[-0.5rem] group-hover:translate-y-[-0.5rem]`}
            ></span>
          </div>
        </section>
      </header>
      <nav
        className={`fixed flex items-center w-full h-[100vh] transition duration-500 ease-in-out z-20 bg-[rgba(0,0,0,0.1)] ${
          isMenuOpen
            ? "opacity-100 backdrop-blur-2xl"
            : "opacity-0 backdrop-blur-sm pointer-events-none"
        }`}
      >
        <ul
          className={`flex flex-col gap-4 text-6xl xl:text-8xl w-full group bg-transparent group hover:text-primary-200 hover:dark:text-primary-200`}
        >
          <Link
            onClick={() => isHome && setIsMenuOpen(false)}
            href={"/"}
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-200 dark:hover:border-primary-000 hover:text-secondary-200 hover:dark:text-primary-white transition duration-300`}
          >
            HOME
          </Link>
          <Link
            onClick={() => isHome && setIsMenuOpen(false)}
            href={`/#about`}
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-200 dark:hover:border-primary-000 hover:text-secondary-200 hover:dark:text-primary-white transition duration-300`}
          >
            ABOUT
          </Link>
          <Link
            onClick={() => isHome && setIsMenuOpen(false)}
            href={`/#works`}
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-200 dark:hover:border-primary-000 hover:text-secondary-200 hover:dark:text-primary-white transition duration-300`}
          >
            WORKS
          </Link>
          <Link
            onClick={() => isHome && setIsMenuOpen(false)}
            href={`/#contact`}
            className={`px-8 cursor-pointer border-b-2 border-transparent hover:border-secondary-200 dark:hover:border-primary-000 hover:text-secondary-200 hover:dark:text-primary-white transition duration-300`}
          >
            CONTACT
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
