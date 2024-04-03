import { AboutCardType } from "@/app/utils/types";
import React from "react";

const AboutCard = ({ id, title, description }: AboutCardType): JSX.Element => {
  return (
    <article
      className={
        "p-4 2xl:pr-20 flex flex-col gap-4 h-full mb-0 border-l-4 border-primary-000 dark:border-secondary-100"
      }
    >
      <h1
        className={`text-8xl font-bold ml-[-0.5rem] text-secondary-200 dark:text-primary-000 mb-4`}
      >
        {id}
      </h1>
      <h2 className={`text-4xl font-bold `}>{title.toUpperCase()}</h2>
      <p className={`text-secondary-000 dark:text-primary-200`}>
        {description}
      </p>
    </article>
  );
};

export default AboutCard;
