import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
interface AssociationCardProps {
  image: StaticImageData;
  title: string;
}
const AssociationCard: React.FC<AssociationCardProps> = ({ image, title }) => {
  return (
    <div
      className={`flex items-center justify-center gap-5 h-[20vh] p-10 ${
        title == "" ? "md:border-l-[1px] lg:border-x-[1px]" : ""
      }`}
    >
      <div
        className={`${
          title == "Asia Pacific SDG Enterprise Award"
            ? "flex-col justify-center items-center flex md:flex-row"
            : ""
        } md:flex   gap-5 items-center justify-center ${
          title == "Winner of Google Business Group Stories"
            ? "text-center flex flex-col justify-center"
            : ""
        }`}
      >
        <Image
          src={image}
          width={400}
          height={400}
          alt="association image"
          className="w-[100px]  h-full"
        ></Image>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default AssociationCard;
