import React from "react";
import SectionTitle from "./sectionTitle";
import EducationDialog from "./educationDialog";
import SolidBtn from "./solidBtn";
import ServiceDialog from "./serviceDialog";
import { PiArrowsMergeBold, PiCodeBold, PiDeviceMobile } from "react-icons/pi";

export default function Services() {
  return (
    <div id="services" className="flex flex-col items-center space-y-6 pt-16 ">
      <SectionTitle
        title="Services"
        subtitle="I offer custom mobile app development, responsive web development, and API integration services tailored to your business needs."
      />

      {/* List of education levels attained */}
      <div className="block space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 py-4">
        <ServiceDialog
          skill="Mobile App development"
          description=" Creating efficient mobile experiences that improve your business presence."
        >
          <PiDeviceMobile className="text-yellow-500" size={50} />
        </ServiceDialog>
        <ServiceDialog
          skill="Web development"
          description="Converting your ideas into attractive, useful websites that draw visitors in."
        >
          <PiCodeBold className="text-yellow-500" size={50} />
        </ServiceDialog>

        <ServiceDialog
          skill="API Integration"
          description="Integrating your systems to improve functionality and efficiency."
        >
          <PiArrowsMergeBold className="text-yellow-500" size={50} />
        </ServiceDialog>
      </div>
    </div>
  );
}
