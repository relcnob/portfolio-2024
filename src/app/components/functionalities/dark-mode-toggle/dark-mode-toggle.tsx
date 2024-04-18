"use client";
import React, { useEffect, useState } from "react";
import styles from "./dark-mode-toggle.module.scss";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import { AiOutlineLoading } from "react-icons/ai";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  useEffect(() => {
    if (theme && theme?.length > 0) {
      setIsThemeLoading(false);
    }
  }),
    [theme];

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`border-2 border-secondary-200 dark:border-white cursor-pointer rounded-full w-8  md:w-16 h-8 p-0 flex items-center transition-all duration-300 ease-in-out`}
    >
      <div
        className={`text-xl flex align-center justify-center text-white dark:text-secondary-200 h-8 w-8 ml-[-1px] bg-secondary-200 dark:bg-white rounded-full transition-transform duration-300 ease-in-out md:dark:translate-x-full`}
      >
        {isThemeLoading && <AiOutlineLoading className={`animate-spin`} />}
        {!isThemeLoading && theme == "dark" && <HiMoon />}
        {!isThemeLoading && theme == "light" && <HiSun />}
      </div>
    </div>
  );
};

export default DarkModeToggle;
