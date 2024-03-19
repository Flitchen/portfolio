import { TitleProps } from "@/utils/types";
import React from "react";

export default function SectionTitle({ title, subtitle }: TitleProps) {
  return (
    <div className="w-full text-center space-y-4">
      <p className="text-white tracking-wider text-3xl lg:text-6xl font-extrabold lg:font-bold">
        {title}
      </p>
      <p className="text-neutral-500 text-lg">{subtitle}</p>
    </div>
  );
}
