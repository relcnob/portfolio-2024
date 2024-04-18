import React from "react";
import ProjectHeader from "@/app/components/ui-elements/project-header/ProjectHeader";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Home() {
  const projectInfo = {
    type: "Music festival website",
    role: "Frontend, UI",
    collaborators: ["Lucas Zago", "Caroline Thostrup"],
  };
  const projectLinks = {
    github: "https://github.com/relcnob/vikingfest",
    website: "https://vikingfest.netlify.app/",
  };

  return (
    <main
      className={`px-4 xl:px-32 pt-12 min-h-[calc(100vh-3rem)] flex flex-col items-center mb-8`}
    >
      <ProjectHeader
        year="2022"
        title="Vikingfest"
        bgpath="/vikingfest/vikingfest.jpg"
        projectInfo={projectInfo}
        projectLinks={projectLinks}
      />
      <section className={`p-8 xl:p-16 lg:max-w-[96ch] lg:text-xl mb-8`}>
        <h2 className={`text-4xl font-bold mb-4`}>About</h2>
        Vikingfest is a collaborative project created as a conclusion of the 3rd
        semester of Multimedia Design degree at KEA. My main responsibilities
        were to create a FIGMA prototype as well as design and create reusable
        frontend components, ensuring a consistent design throughout the
        website. As the part of the project we also developed a mobile webapp
        available from the header of the website.
      </section>
      <section>
        <h2 className={`text-4xl font-bold mb-4`}>Gallery</h2>
        <Link href="/vikingfest/vikingfest.jpg" target="_blank">
          <Image
            src="/vikingfest/vikingfest.jpg"
            alt="Vikingfest"
            width={1920}
            height={1080}
            className={`rounded-xl w-full xl:w-full m-auto transition duration-500 ease-in-out hover:scale-105 origin-top`}
          />
        </Link>
        <div className={`grid grid-cols-2 gap-4 my-8 xl:gap-16 xl:my-16`}>
          <Link href="/vikingfest/vikingfest_2.jpg" target="_blank">
            <Image
              src="/vikingfest/vikingfest_2.jpg"
              alt="Vikingfest"
              width={1920}
              height={1080}
              className={`rounded-xl w-full m-auto transition duration-500 ease-in-out hover:scale-105 origin-top`}
            />
          </Link>
          <Link href="/vikingfest/vikingfest_3.jpg" target="_blank">
            <Image
              src="/vikingfest/vikingfest_3.jpg"
              alt="Vikingfest"
              width={1920}
              height={1080}
              className={`rounded-xl w-full m-auto transition duration-500 ease-in-out hover:scale-105 origin-top`}
            />
          </Link>
        </div>
        <Link
          href={"/#works"}
          className={`text-3xl text-center md:text-6xl tracking-tight flex flex-row items-center justify-center gap-2 md:gap-4 m-auto justify-self-center w-fit group text-primary-200 hover:text-secondary-200 dark:text-primary-200 dark:hover:text-white`}
        >
          <p
            className={
              "opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out group-hover:translate-x-[0.75rem]"
            }
          >
            {">"}
          </p>
          <p
            className={`transition duration-500 ease-in-out tracking-tight group-hover`}
          >
            BACK TO PROJECTS
          </p>
          <p
            className={
              "opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out group-hover:translate-x-[-0.75rem]"
            }
          >
            {"<"}
          </p>
        </Link>
      </section>
    </main>
  );
}
