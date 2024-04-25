import { Boilerplate, ExperienceTab } from "../index.js";
import experiences from "./experiences-info.js";

export default function Home() {
  return (
    <Boilerplate>
      <div className="grid grid-cols-2 gap-4 p-4">
        {experiences.map((experience) => (
          <ExperienceTab
            key={experience.title}
            title={experience.title}
            position={experience.position}
            dateRange={experience.dateRange}
            desc={experience.desc}
            link1={experience.link1}
            link1Text={experience.link1Text}
            link2={experience.link2}
            link2Text={experience.link2Text}
            baseIconPath={experience.baseIconPath}
            iconNames={experience.iconNames}
          />
        ))}
      </div>
    </Boilerplate>
  );
}
