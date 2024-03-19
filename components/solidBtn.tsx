import { btnProps } from "@/utils/types";
import React from "react";

export default function SolidBtn({ title }: btnProps) {
  return (
    <div className="max-w-40 text-black bg-yellow-600 focus:outline-none font-medium rounded-full text-base px-5 py-3 text-center mb-2 ">
      <p>{title}</p>
    </div>
  );
}
