import React from "react";
import GalleryTwelve from "./GalleryTwelve";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import VideoLink from "./VideoLink";

function Odd_Day({ day_number, day_title, day_date, day_comment, day_images, video_link }) {
  return (
    <>
    <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 md:py-12">
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-2 mb-4 md:mb-0">
          {day_images.map((image, index) => (
            <GalleryTwelve
              src={image}
              alt={`Greece Day ${index + 1}`}
              key={index}
            />
          ))}
        </div>
        
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-500 md:text-7xl">{day_number}</p>
        <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
          {day_title}
        </h1>
        <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
          {day_date}
        </p>
        <p className=" text-primary-800">{day_comment}</p>
      </div>
      <div className="flex items-end pt-4 md:pt-0">
         <VideoLink video_link={video_link}>First Day in Athens</VideoLink>
      </div>
    </div>
    </>
  );
}

export default Odd_Day;

{
  /* <VideoCameraIcon className="w-5 h-5 mr-2 text-blue-400" /> */
}
