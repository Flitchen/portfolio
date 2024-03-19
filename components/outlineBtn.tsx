import { btnProps } from "@/utils/types";
import React from "react";

export default function OutlineBtn({ title }: btnProps) {
  return (
    <div className="max-w-40 text-white text-center border border-gray-300 focus:outline-none font-medium rounded-full text-base px-5 py-3 mb-2 ">
      <p>{title}</p>
    </div>
  );
}
