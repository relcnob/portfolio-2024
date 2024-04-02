import React, { useState } from "react";
import styles from "./dark-mode-toggle.module.scss";
import { PiMoonFill } from "react-icons/pi";
import { PiSunDimFill } from "react-icons/pi";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`border-2 border-secondary-100 dark:border-white cursor-pointer rounded-full w-16 h-8 p-0 flex items-center transition-all duration-300 ease-in-out`}
    >
      <span
        className={`text-xl flex align-center justify-center text-white dark:text-secondary-100 h-8 w-8 bg-secondary-100 dark:bg-white rounded-full transition-transform duration-300 ease-in-out dark:translate-x-full`}
      >
        {theme == "dark" ? <PiMoonFill /> : <PiSunDimFill />}
      </span>
    </div>
  );
};

export default DarkModeToggle;
