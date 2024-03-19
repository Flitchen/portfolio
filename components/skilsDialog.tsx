import { SkillsDialogProps } from "@/utils/types";
import React from "react";

export default function SkillsDialog({
  skillTitle,
  skills,
}: SkillsDialogProps) {
  return (
    <div className=" group rounded-xl px-20 py-8 bg-neutral-900 min-h-52 min-w-80 max-w-md space-y-6 flex flex-col hover:bg-amber-500 text-amber-500 hover:text-white">
      <p className="text-center text-xl font-extrabold group-hover:text-neutral-200/100">
        {skillTitle}
      </p>
      <div className="space-y-2 flex flex-col ">
        <ul className="px-4 space-y-2">
          {skills?.map((skill, index) => (
            <li key={index} className="flex flex-row space-x-2 items-center">
              <div className="h-4 w-4 rounded-full bg-white group-hover:bg-neutral-200"></div>
              <p className="tracking-widest text-base text-neutral-400 group-hover:text-white">
                {skill}
              </p>
            </li>
          ))}
        </ul>
        {/* <p className="text-center text-neutral-300">{description}</p> */}
      </div>
    </div>
  );
}
