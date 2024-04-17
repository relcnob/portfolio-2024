"use client";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";

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
};

const ProjectHeader = ({ year, title, bgpath, projectInfo }: Props) => {
  return (
    <section className={`flex flex-col justify-center items-center py-24`}>
      <div className="flex flex-row gap-2 items-center">
        <span
          className={`w-1 h-1 bg-primary-200 rounded-full flex mb-1`}
        ></span>
        <h2 className={`text-md text-primary-200`}>{year}</h2>
        <span
          className={`w-1 h-1 bg-primary-200 rounded-full flex mb-1`}
        ></span>
      </div>
      <h1 className={`font-serif text-9xl text-secondary-200 tracking-tighter`}>
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
        <Button
          onClick={() =>
            window.open("https://github.com/relcnob/vikingfest", "_blank")
          }
        >
          GitHub
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/relcnob/vikingfest", "_blank")
          }
        >
          Website
        </Button>
      </div>
    </section>
  );
};

{
  /* <Image
        src={bgpath}
        alt={title}
        width={960}
        height={200}
        className={`object-fit`}
      /> */
}

export default ProjectHeader;
