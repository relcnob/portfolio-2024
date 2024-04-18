import React from "react";
import ProjectHeader from "@/app/components/ui-elements/project-header/ProjectHeader";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Home() {
  const projectInfo = {
    type: "Assignment portfolio",
    role: "Everything",
  };
  const projectLinks = {
    github: "https://github.com/relcnob/portfolio-2022",
    website: "https://relcnob.github.io/portfolio-2022/",
  };

  return (
    <main
      className={`px-4 xl:px-32 pt-12 min-h-[calc(100vh-3rem)] flex flex-col items-center mb-8`}
    >
      <ProjectHeader
        year="2022"
        title="portfolio"
        bgpath="/portfolio/portfolio.jpg"
        projectInfo={projectInfo}
        projectLinks={projectLinks}
      />
      <section className={`p-8 xl:p-16 lg:max-w-[96ch] lg:text-xl mb-8`}>
        <h2 className={`text-4xl font-bold mb-4`}>About</h2>
        The assignment portfolio is the previous iteration of this website.
        Coded using TailwindCSS and JavaScript. It showcases a number of
        assignments completed during my studies at KEA.
      </section>
      <section>
        <h2 className={`text-4xl font-bold mb-4`}>Gallery</h2>
        <Link href="/portfolio/portfolio.jpg" target="_blank">
          <Image
            src="/portfolio/portfolio.jpg"
            alt="portfolio"
            width={1920}
            height={1080}
            className={`rounded-xl w-full xl:w-full m-auto transition duration-500 ease-in-out hover:scale-105 origin-top`}
          />
        </Link>
        <div className={`grid grid-cols-2 gap-4 my-8 xl:gap-16 xl:my-16`}>
          <Link href="/portfolio/portfolio_2.jpg" target="_blank">
            <Image
              src="/portfolio/portfolio_2.jpg"
              alt="portfolio"
              width={1920}
              height={1080}
              className={`rounded-xl w-full m-auto transition duration-500 ease-in-out hover:scale-105 origin-top`}
            />
          </Link>
          <Link href="/portfolio/portfolio_3.jpg" target="_blank">
            <Image
              src="/portfolio/portfolio_3.jpg"
              alt="portfolio"
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
