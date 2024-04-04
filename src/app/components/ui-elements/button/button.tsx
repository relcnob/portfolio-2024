"use client";

import styles from "./button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center px-4 py-2 h-8 border-2 rounded-full items-center font-bold transition duration-300 cursor-pointer hover:bg-secondary-200 hover:text-white dark:hover:bg-white dark:hover:text-secondary-200 dark:bg-transparent dark:text-white border-secondary-200 dark:border-white`}
    >
      {children}
    </button>
  );
};

export default Button;
