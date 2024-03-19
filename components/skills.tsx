import React from "react";
import SectionTitle from "./sectionTitle";
import SkillsDialog from "./skilsDialog";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center space-y-6 pt-16 ">
      <SectionTitle
        title="Skills"
        subtitle="Advancing creativity with the following toolbox crafted from the most recent developments in the creation of mobile and web applications."
      />
      <div className="block space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 py-4">
        <SkillsDialog
          skillTitle="Languages and Libraries"
          skills={["HTML", "CSS", "Javascript", "React"]}
        ></SkillsDialog>
        <SkillsDialog
          skillTitle="Frameworks"
          skills={["React Native", "Next Js", "Tailwind CSS"]}
        ></SkillsDialog>
      </div>
    </div>
  );
}
