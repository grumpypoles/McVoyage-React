import React from "react";
import GalleryTwelve from "./GalleryTwelve";
import VideoLink from "./VideoLink";

function Even_Day({ day_number, day_title, day_date, day_comment, day_images, video_link }) {
  return (
    <div className="grid px-8 py-12 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5">
      <div className="flex items-center order-1 md:order-2">
        <div className="grid order-1 grid-cols-2 gap-2 mb-4 md:mb-0 ">
          {day_images.map((image, index) => (
            <GalleryTwelve
              src={image}
              alt={`Greece Day ${index + 1}`}
              key={index}
            />
          ))}
          
        </div>
        
      </div>
      <div className="order-2 md:order-1">
      <p className="text-3xl font-bold text-gray-500 md:text-7xl">{day_number}</p>
      <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
          {day_title}
        </h1>
        <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
          {day_date}
        </p>
        <p className="mb-4 text-primary-800 md:mb-0">{day_comment}</p>
      <div className="flex items-end pt-4">
         <VideoLink video_link={video_link}>First Day in Athens</VideoLink>
      </div>
      </div>
    </div>
  );
}

export default Even_Day;


{/* <div className="flex flex-col md:flex-row">
  <div className="order-2 md:order-1">Column 1</div>
  <div className="order-1 md:order-2">Column 2</div>
</div> */}