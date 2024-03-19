import React from "react";
import SolidBtn from "./solidBtn";
import SectionTitle from "./sectionTitle";
import EducationDialog from "./educationDialog";

export default function Resume() {
  return (
    <div id="resume" className="flex flex-col items-center space-y-6 pt-16 ">
      <SectionTitle
        title="Resume"
        subtitle="Experienced software engineer with a proven track record of delivering high-quality solutions. Skilled in full-stack development, mobile app development, and project management."
      />

      {/* List of education levels attained */}
      <div className="block space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 py-6">
        <EducationDialog
          startYear={2021}
          graduateYear={2024}
          educationLevel={"Bachelor's Degree in I.C.T.M"}
          placeOfStudy="Mzumbe University, Morogoro"
          additionalDescription="Completed Bachelor of Science in Information and CommunicationTechnology with Management"
        />
        <EducationDialog
          startYear={2019}
          graduateYear={2021}
          educationLevel={"Advanced Level Education"}
          placeOfStudy="Chidya Boys High School, Mtwara"
          additionalDescription="Completed Advanced level of Education"
        />
        <EducationDialog
          startYear={2015}
          graduateYear={2018}
          educationLevel={"O-Level Education"}
          placeOfStudy="Mwandege Boys, Pwani"
          additionalDescription="Completed Ordinary Level of Education "
        />
        <EducationDialog
          startYear={2021}
          graduateYear={2024}
          educationLevel={"Primary Level Education"}
          placeOfStudy="St. Mary's primary School, Dar es Salaam"
          additionalDescription="Completed Primary level of Education"
        />
      </div>
      <SolidBtn title="Download CV" />
    </div>
  );
}
