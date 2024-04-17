import React from "react";
import ProjectHeader from "@/app/components/ui-elements/project-header/ProjectHeader";

export default function Home() {
  const projectInfo = {
    type: "Music Festival Website",
    role: "Frontend, UI",
    collaborators: ["Lucas Zago", "Caroline Thostrup"],
  };

  return (
    <main className={`px-4 xl:px-32 pt-12 min-h-[calc(100vh-3rem)]`}>
      <ProjectHeader
        year="2022"
        title="Vikingfest"
        bgpath="/vikingfest.jpg"
        projectInfo={projectInfo}
      />
    </main>
  );
}
