import React from "react";
import SectionTitle from "./sectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse lg:flex-row  lg:space-x-6 lg:items-start gap-6 items-center pt-16 "
    >
      <Image
        src="/images/hero.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <SectionTitle
        title="About me"
        subtitle="I'm a highly innovated employee with desire to take new challenges. Strong worth ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills."
      />
    </div>
  );
}
