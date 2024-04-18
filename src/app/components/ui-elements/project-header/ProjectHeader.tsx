"use client";
import Image from "next/image";
import React from "react";
import Button from "../button/button";

type Props = {
  year: string;
  title: string;
  bgpath: string;
  projectInfo: {
    type: string;
    role: string;
    collaborators?: string[];
    client?: string;
  };
  projectLinks: {
    github: string;
    website: string;
  };
};

const ProjectHeader = ({
  year,
  title,
  bgpath,
  projectInfo,
  projectLinks,
}: Props) => {
  return (
    <section
      className={`flex flex-col justify-center items-center py-24 relative w-full mb-8`}
    >
      <div className="flex flex-row gap-2 items-center">
        <span
          className={`w-1 h-1 bg-secondary-200 dark:bg-white rounded-full flex mb-1 bg-clip-content`}
        ></span>
        <h2
          className={`text-md text-secondary-200 dark:text-white font-bold bg-clip-text`}
        >
          {year}
        </h2>
        <span
          className={`w-1 h-1 bg-secondary-200 dark:bg-white rounded-full flex mb-1 bg-clip-content`}
        ></span>
      </div>
      <h1
        className={`font-serif text-7xl xl:text-9xl text-secondary-200 dark:text-primary-white tracking-tighter`}
      >
        {title.toUpperCase()}
      </h1>
      <div>
        <ul className={`text-sm font-bold mt-8 flex flex-col gap-1`}>
          <li>PROJECT TYPE: {projectInfo.type}</li>
          <li>ROLE: {projectInfo.role}</li>
          {projectInfo.collaborators?.length && (
            <li className={`flex flex-row gap-1`}>
              COLLABORATORS:{" "}
              {projectInfo.collaborators?.map((collaborator, i) => {
                return (
                  <p key={i}>
                    {collaborator}
                    {projectInfo.collaborators &&
                    i + 1 < projectInfo.collaborators.length
                      ? ","
                      : ""}
                  </p>
                );
              })}
            </li>
          )}
        </ul>
        <div
          className={`flex flex-row items-center justify-center gap-4 xl:gap-8 mt-6`}
        >
          <Button
            onClick={() => window.open(`${projectLinks.github}`, "_blank")}
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open(`${projectLinks.website}`, "_blank")}
          >
            Demo Website
          </Button>
        </div>
      </div>
      <div
        className={`absolute z-[-5] w-full h-full top-0 bg-gradient-to-b from-transparent through-transparent to-white backdrop-blur dark:to-secondary-200`}
      >
        {" "}
      </div>
      <Image
        src={bgpath}
        alt={title}
        width={1920}
        height={1080}
        className={`object-cover object-top absolute z-[-10] w-full h-full opacity-50 top-0`}
      />
    </section>
  );
};

export default ProjectHeader;
