import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface ComunityFollowCardProps {
  title: string;
  navigetLink: string;
  image: StaticImageData;
}
const ComunityFollowCard: React.FC<ComunityFollowCardProps> = ({
  title,
  navigetLink,
  image,
}) => {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden group rounded-md">
      <Image
        src={image}
        alt="comunity image"
        layout="fill"
        objectFit="cover"
        className="transition-all duration-500 ease-in-out bg-left-top  group-hover:scale-110"
      />
      <div className=" bg-[#00000036] space-y-2 h-full absolute right-0 left-0 text-white p-3">
        <h3 className=" md:text-lg font-bold lg:text-xl w-3/4">{title}</h3>
        <Link href="" className="text-sm underline flex gap-2 items-center">
          {navigetLink}
          <FaArrowRightLong className="font-thin"></FaArrowRightLong>
        </Link>
      </div>
    </div>
  );
};

export default ComunityFollowCard;
