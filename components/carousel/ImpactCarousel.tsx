import React from 'react'

// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from "../../public/images/community_1.jpg"
import image2 from "../../public/images/community_2.jpg"
import image3 from "../../public/images/community_3.jpg"
import image4 from "../../public/images/community_4.jpg"
import image5 from "../../public/images/community_5.jpg"
import Image from 'next/image'
{/* <Image src={image1} width={500} height={400} alt='banner'></Image> */ }
import "./ImpactCarousel.css"
const ImpactCarousel = () => {
    const allBannerImg = [image1, image2, image3, image4, image5]
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {allBannerImg.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 ">
                        <Image src={image} width={800} height={500} className='w-full' alt='banner'></Image>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ImpactCarousel