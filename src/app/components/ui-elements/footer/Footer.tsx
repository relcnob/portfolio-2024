import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`flex flex-col px-4 py-1 xl:px-32 text-sm text-primary-200`}
    >
      <p>
        <Link
          href={"https://github.com/relcnob"}
          className={`hover:text-additional-green transition ease-in-out duration-300`}
        >
          fryderyk boncler
        </Link>{" "}
        &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
