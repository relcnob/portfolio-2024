"use client";
import { FaChevronDown } from "react-icons/fa6";

interface HeroProps {
  onClick: () => void;
}

const Hero = ({ onClick }: HeroProps): JSX.Element => {
  return (
    <section
      className={`flex w-full px-4 md:px-8 lg:px-16 2xl:px-32 items-center min-h-[100vh] bg-[url('/bg-white.png')] dark:bg-[url('/bg-black.png')] bg-cover bg-center relative`}
    >
      <div className={`flex flex-row gap-0`}>
        <div className={`flex flex-col gap-0`}>
          <h1
            className={`text-[3rem] md:text-[8rem] xl:text-[12rem] m-0 leading-[0.8] text-primary-100 font-light`}
          >
            WEB
          </h1>
          <h1
            className={`text-[3rem] md:text-[8rem] xl:text-[12rem] font-bold m-0 leading-[0.8]`}
          >
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col gap-0 md:text-2xl xl:text-5xl justify-end leading-none mb-[-2px] pl-4 text-primary-100">
          <p>UI/UX</p>
          <p>FRONTEND</p>
          <p>BACKEND</p>
        </div>
      </div>
      <span
        onClick={onClick}
        className={`text-4xl absolute bottom-12 lg:bottom-32 left-1/2 translate-x-[-50%] cursor-pointer border-2 border-secondary-100 dark:border-white rounded-full p-2 transition duration-300 hover:bg-secondary-100 dark:hover:bg-white dark:hover:text-secondary-100 hover:text-white dark:text-white`}
      >
        <FaChevronDown />
      </span>
    </section>
  );
};

export default Hero;
