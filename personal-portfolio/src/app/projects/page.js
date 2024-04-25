"use client";
import { Boilerplate, ProjectTab } from "../index.js";
import projects from "./projects-info.js";

export default function Home() {
  return (
    <Boilerplate>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4">
        {projects.map((project) => (
          <ProjectTab
            key={project.title}
            title={project.title}
            year={project.year}
            desc={project.desc}
            link1={project.link1}
            link1Text={project.link1Text}
            link2={project.link2}
            link2Text={project.link2Text}
            baseIconPath={project.baseIconPath}
            iconNames={project.iconNames}
          />
        ))}
      </div>
    </Boilerplate>
  );
}
