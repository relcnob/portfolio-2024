"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./components/ui-elements/button/Button";
import Header from "./components/ui-elements/header/Header";
import Hero from "./components/ui-elements/hero/Hero";
import { ThemeProvider } from "next-themes";
import { AboutCardType } from "./utils/types";
import AboutCard from "./components/ui-elements/about-card/AboutCard";
import ProjectCard from "./components/ui-elements/project-card/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/ui-elements/footer/Footer";
import CustomCursor from "./components/functionalities/custom-cursor/Custom-cursor";
import { GoLinkExternal } from "react-icons/go";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const aboutArr: AboutCardType[] = [
    {
      id: "01",
      title: "About me",
      description:
        "Passionate web developer with a knack for crafting clean, efficient and user-friendly digital experiences. With keen eye for design I create seamless blends between form and function.",
    },
    {
      id: "02",
      title: "Approach",
      description:
        "From simple wireframes, through research, prototyping and finishing with a solution. In these simple steps I can bring your ideas to life.",
    },
    {
      id: "03",
      title: "Techstack",
      description:
        "In crafting my projects, I leverage contemporary frameworks and libraries to ensure swift, efficient, and optimized outcomes.",
    },
  ];

  const scrollToAbout = () => {
    const section = aboutRef.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ThemeProvider attribute="class">
        <CustomCursor />
        <main>
          <Header isHome={true} />
          <Hero onClick={scrollToAbout} />
          <section
            id="about"
            ref={aboutRef}
            className="grid lg:grid-cols-3 px-4 xl:px-32 gap-12 xl:gap-24 xl:gap-32 py-24 xl:py-48 bg-gradient-to-b from-primary-white through-white to-white dark:from-secondary-000 dark:through-secondary-200 dark:to-secondary-200"
          >
            {aboutArr.map((about) => (
              <AboutCard key={about.id} {...about} />
            ))}
          </section>
          <section
            id="works"
            ref={worksRef}
            className={`flex flex-col px-4 xl:px-32 mb-32 gap-4 lg:gap-8`}
          >
            <h1 className={`text-6xl lg:text-9xl mb-12 flex gap-4 lg:gap-8`}>
              <span
                className={`h-[3rem] w-[1rem] lg:h-[7rem] lg:w-[2rem] rounded aspect-square bg-secondary-200 dark:bg-white flex`}
              ></span>
              Works
            </h1>
            <ProjectCard
              linkTo={"comwell"}
              title="Hotel management dashboard"
              tags={"UX, UI, Frontend, Backend"}
              techstack={[`Next.js`, `TypeScript`, `TailwindCSS`, `Nest.js`]}
            />
            <ProjectCard
              linkTo={"parky"}
              title="Parking web application"
              tags={"UI, Frontend"}
              techstack={[`Next.js`, `TypeScript`, `TailwindCSS`, `Prisma`]}
            />
            <ProjectCard
              linkTo={"vikingfest"}
              title="Music festival website"
              tags={"UI, Frontend"}
              techstack={[`Next.js`, `CSS`]}
            />
            <ProjectCard
              linkTo={"portfolio"}
              title="Assignment portfolio"
              tags={"UI, Frontend"}
              techstack={[`JavaScript`, `TailwindCSS`]}
            />
          </section>
          <section
            ref={contactRef}
            className={`flex flex-col px-4 xl:px-32 mb-32 group`}
          >
            <h1 className={`text-6xl lg:text-9xl mb-12 flex gap-4 lg:gap-8`}>
              <span
                className={`h-[3rem] w-[1rem] lg:h-[7rem] lg:w-[2rem] rounded aspect-square bg-secondary-200 dark:bg-white flex`}
              ></span>
              Contact
            </h1>
            <div
              className={`grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-content-center`}
            >
              <div
                className={`relative flex w-64 h-64 max-w-full aspect-square m-auto`}
              >
                <span
                  className={`absolute flex w-12 h-12 rounded-full bg-additional-green right-[4%] top-[4%] border-8 border-white dark:border-secondary-200 z-10`}
                ></span>
                <Image
                  src="/profile.png"
                  alt="fryderyk-boncler"
                  height={720}
                  width={720}
                  className={`rounded-full w-64 h-64 object-cover aspect-square max-w-full grayscale group-hover:grayscale-0	transition duration-500`}
                />
              </div>
              <div className={`max-w-64 mx-auto md:max-w-full`}>
                <h2 className={`text-xl md:text-4xl mb-6 font-bold`}>Hey</h2>
                <p className={`mb-4`}>
                  If you are interested in my work or just simply want to chat
                  don&apos;t hesistate to reach out!
                </p>
                <Button
                  onClick={() =>
                    window.open("mailto:contact@relcnob.com", "_blank")
                  }
                >
                  Let&apos;s chat
                </Button>
              </div>
              <div className={`mx-auto max-w-64 w-64`}>
                <h2 className={"text-xl md:text-4xl mb-6 font-bold"}>
                  Find me
                </h2>
                <div className={`flex flex-col gap-4`}>
                  <Link
                    href={"mailto:contact@relcnob.com"}
                    target="_blank"
                    className={`text-lg cursor pointer hover:text-primary-200 w-fit py-1 transition duration-300 ease-in-out flex flex-row gap-1`}
                  >
                    contact@relcnob.com
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/fryderyk-boncler/"}
                    target="_blank"
                    className={`text-lg cursor pointer hover:text-primary-200 w-fit py-1 transition duration-300 ease-in-out flex flex-row gap-1`}
                  >
                    LinkedIn <GoLinkExternal />
                  </Link>
                  <Link
                    href={"https://www.github.com/relcnob/"}
                    target="_blank"
                    className={`text-lg cursor pointer hover:text-primary-200 w-fit py-1 transition duration-300 ease-in-out flex flex-row gap-1`}
                  >
                    GitHub <GoLinkExternal />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
