import { ServiceDialogProps } from "@/utils/types";
import React from "react";

export default function ServiceDialog({
  skill,
  description,
  children,
}: ServiceDialogProps) {
  return (
    <div className="rounded-xl px-10 py-4 bg-neutral-900 min-h-52 max-w-md space-y-6 flex flex-col items-center ">
      <p className="text-center text-xl font-extrabold text-neutral-400">
        {skill}
      </p>
      <div className="space-y-2 flex flex-col items-center">
        {children}
        <p className="text-center text-neutral-300">{description}</p>
      </div>
    </div>
  );
}
