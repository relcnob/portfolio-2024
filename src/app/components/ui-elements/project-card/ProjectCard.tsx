import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface Props {
  title: string;
  linkTo: string;
  tags: string;
  techstack: string[];
}

const ProjectCard = ({
  title,
  linkTo,
  tags,
  techstack,
}: Props): JSX.Element => {
  return (
    <Link
      href={`/${linkTo}`}
      className={`w-full py-4 px-2 md:py-8 border-t border-primary-000 dark:border-secondary-000 hover:border-secondary-000 dark:hover:border-primary-000 transition ease-in-out duration-300 group grid grid-cols-12 justify-between items-center group`}
      id={linkTo}
    >
      <div className={`pointer-events-none col-span-11 sm:col-span-7`}>
        <h1 className={`font-bold text-lg md:text-2xl xl:text-5xl md:mb-4`}>
          {title}
        </h1>
        <div className={`flex flex-row gap-2 text-sm flex-wrap`}>
          {techstack &&
            techstack.length &&
            techstack.map((tag) => (
              <p
                key={tag}
                className={`px-2 py-0 border border-primary-200 text-primary-200 group-hover:border-secondary-100 group-hover:text-secondary-100 group-hover:dark:text-primary-000 group-hover:dark:border-primary-000 transition rounded-full w-fit`}
              >
                {tag}
              </p>
            ))}
        </div>
      </div>
      <div
        className={`col-span-4 hidden sm:flex flex-row gap-2 text-sm flex-wrap pointer-events-none`}
      >
        <p
          className={`pointer-events-none text-primary-100 group-hover:text-secondary-100 group-hover:dark:text-primary-000 transition xl:text-lg`}
        >
          {tags}
        </p>
      </div>
      <div
        className={`p-2 border-2 w-12 h-12 rounded-full opacity-10 group-hover:opacity-100 transition duration-300 ease-in-out pointer-events-none aspect-square col-span-1 flex items-center justify-center justify-self-end`}
      >
        <FaChevronRight />
      </div>
    </Link>
  );
};

export default ProjectCard;
