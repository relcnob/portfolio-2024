import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface Props {
  title: string;
  linkTo: string;
  tags: string;
}

const ProjectCard = ({ title, linkTo, tags }: Props): JSX.Element => {
  return (
    <Link
      href={`/${linkTo}`}
      className={`w-full py-4 px-2 md:py-8 border-t border-primary-000 dark:border-secondary-000 hover:border-secondary-000 dark:hover:border-primary-000 transition ease-in-out duration-300 group flex flex-row justify-between items-center`}
      id={linkTo}
    >
      <div className={`pointer-events-none	`}>
        <h1 className={`font-bold text-lg md:text-2xl xl:text-5xl md:mb-2`}>
          {title}
        </h1>
        <p className={`text-primary-200 xl:text-lg`}>{tags}</p>
      </div>
      <div
        className={`p-2 border-2 rounded-full opacity-10 group-hover:opacity-100 transition duration-300 ease-in-out pointer-events-none`}
      >
        <FaChevronRight />
      </div>
    </Link>
  );
};

export default ProjectCard;
