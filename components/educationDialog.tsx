import { EducationDialogProps } from "@/utils/types";
import React from "react";

export default function EducationDialog({
  startYear,
  graduateYear,
  educationLevel,
  placeOfStudy,
  additionalDescription,
}: EducationDialogProps) {
  return (
    <div className="rounded-xl px-10 py-4 bg-neutral-900 min-h-20 max-w-md space-y-3">
      <p className="text-2xl font-extrabold text-yellow-500">
        {startYear} - {graduateYear}
      </p>
      <div className="space-y-2">
        <p className="text-xl font-medium tracking-wider">{educationLevel}</p>
        <p className="text-neutral-400">{placeOfStudy}</p>
      </div>
      <p className="text-neutral-300">{additionalDescription}</p>
    </div>
  );
}
