"use client";
import { FaChevronDown } from "react-icons/fa6";

interface HeroProps {
  onClick: () => void;
}

const Hero = ({ onClick }: HeroProps): JSX.Element => {
  return (
    <section
      className={`flex w-full px-4 md:px-8 lg:px-16 2xl:px-32 items-center min-h-[100vh] bg-[url('/bg-white.png')] dark:bg-[url('/bg-black.png')] bg-cover bg-center relative overflow-hidden`}
    >
      <div className={`flex flex-row flex-wrap gap-0`}>
        <div className={`flex flex-col gap-0`}>
          <h1
            className={`font-serif font-light text-[3rem] md:text-[7rem] xl:text-[12rem] m-0 leading-[0.8] text-secondary-200 dark:text-primary-white`}
          >
            FRONTEND
          </h1>
          <h1
            className={`font-serif font-normal text-[3rem] md:text-[7rem] xl:text-[12rem] font-bold m-0 leading-[0.8] text-secondary-200 dark:text-primary-white`}
          >
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col gap-1 md:gap-[2px] md:text-2xl xl:text-5xl justify-end mb-[4px] xl:mb-[2px] pl-2 md:pl-0 2xl:pl-4 text-secondary-200 dark:text-primary-white">
          <p className={`xl:mb-[-2px] md:leading-none`}>UI/UX</p>
          <p className={`pl-[2px] xl:mb-[-2px] md:leading-none`}>FRONTEND</p>
          <p className={`md:leading-none`}>BACKEND</p>
        </div>
      </div>
      <span
        onClick={onClick}
        className={`text-4xl absolute bottom-12 lg:bottom-32 left-1/2 translate-x-[-50%] cursor-pointer border-2 border-secondary-200 dark:border-white rounded-full p-2 transition duration-300 hover:bg-secondary-200 dark:hover:bg-white dark:hover:text-secondary-200 hover:text-white dark:text-white`}
      >
        <FaChevronDown />
      </span>
    </section>
  );
};

export default Hero;
