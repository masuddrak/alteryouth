"use client";

import React, { useRef, useState } from "react";
import "./IntroApp.css"; // Add a separate CSS file for styling
import intronImage from "../../public/images/ay_video_poster.jpg";
import Image from "next/image";
const IntroApp = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 xl:gap-20 items-center py-10 ">
      <div className="video-container h-[300px] md:h-[380px]  lg:h-[400px] xl:h-[500px] relative rounded-lg">
        <video
          ref={videoRef}
          src="/videos/ay_explainer.mp4"
          className="custom-video rounded-lg"
          onClick={togglePlay}
        ></video>
        {!isPlaying && (
          <div>
            <Image
              src={intronImage}
              width={500}
              height={500}
              alt="intro image"
              className="absolute h-full w-full top-0 rounded-lg"
            ></Image>
            <button className="play-button" onClick={togglePlay}>
              ▶
            </button>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl lg:text-2xl font-semibold">
          The scholarship app
        </h3>
        <p>
          In Bangladesh, while 98% of children enroll in school, 2 million
          children drop out to work before achieving literacy in order to
          support their families financially. On the flipside, Bangladesh has a
          diaspora population of 10 million in advanced economies who wish to
          make an impact on their homeland. AlterYouth, imagine Uber for
          scholarships, is a C2C scholarship app enabling users from around the
          world to start scholarships directly for financially struggling
          students in Government Primary Schools of Bangladesh, through digital
          banking.
        </p>
      </div>
    </div>
  );
};

export default IntroApp;
