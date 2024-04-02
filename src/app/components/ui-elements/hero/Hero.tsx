"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={`flex w-full px-4 md:px-8 lg:px-32 items-center min-h-[100vh] bg-white dark:bg-secondary-100 bg-[url('/bg-white.png')] dark:bg-[url('/bg-black.png')] bg-cover bg-center`}
    >
      <div className={`flex flex-row gap-0`}>
        <div className={`flex flex-col gap-0`}>
          <h1
            className={`text-[12rem] m-0 leading-[0.8] text-primary-100 font-light`}
          >
            WEB
          </h1>
          <h1 className={`text-[12rem] font-bold m-0 leading-[0.8]`}>
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col gap-0 text-5xl justify-end leading-none mb-[-2px] pl-4 text-primary-100">
          <p>UI/UX</p>
          <p>FRONTEND</p>
          <p>BACKEND</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
