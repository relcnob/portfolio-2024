import { AboutCardType } from "@/app/utils/types";
import React from "react";

const AboutCard = ({ id, title, description }: AboutCardType): JSX.Element => {
  return (
    <article
      className={
        "p-4 pr-8 2xl:pr-20 flex flex-col gap-4 h-full mb-0 border-2 rounded-lg rounded-tl-[3.8rem] bg-white dark:bg-secondary-000 border-primary-white dark:border-secondary-100"
      }
    >
      <h1
        className={`text-6xl p-4 text-primary-100 dark:text-primary-000 mb-4 bg-primary-white dark:bg-secondary-200 w-fit aspect-square flex items-center justify-center rounded-full`}
      >
        {id}
      </h1>
      <h2
        className={`text-4xl font-bold text-secondary-000 dark:text-primary-white`}
      >
        {title.toUpperCase()}
      </h2>
      <p className={`text-secondary-000 dark:text-primary-100 max-w-[48ch]`}>
        {description}
      </p>
    </article>
  );
};

export default AboutCard;
