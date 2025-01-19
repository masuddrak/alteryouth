import React from "react";

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../public/images/community_1.jpg";
import image2 from "../../public/images/community_2.jpg";
import image3 from "../../public/images/community_3.jpg";
import image4 from "../../public/images/community_4.jpg";
import image5 from "../../public/images/community_5.jpg";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";

import "./ImpactCarousel.css";
import { StaticImageData } from "next/image";
interface ImpactCarouselProps {
  schoolImages: (string | StaticImageData)[];
  slider: string;
}
import data from "../../public/data/schools.json";
const ImpactCarousel: React.FC<ImpactCarouselProps> = ({
  schoolImages,
  slider,
}) => {
  const allBannerImg = [image1, image2, image3, image4, image5];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {slider === "comunitySlider" &&
            allBannerImg.map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 ">
                <Image
                  src={image}
                  width={800}
                  height={500}
                  className="w-full"
                  alt="banner"
                ></Image>
              </CarouselItem>
            ))}
          {slider === "schoolSlider" &&
            schoolImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4 bg-white"
              >
                <div className="">
                  <Image
                    src={image}
                    width={800}
                    height={500}
                    className="w-full rounded-md "
                    alt="banner"
                  ></Image>
                  <p className="font-semibold pt-3">{data[index].name}</p>
                  <div className="flex gap-1 items-center">
                    <IoLocation className="text-baseBg" />
                    <p className="text-sm text-gray-500">
                      {data[index].location}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ImpactCarousel;
