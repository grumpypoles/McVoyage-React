// components/VideoLinks.js
import React from "react";
import VideoLink from "@/app/_components/VideoLink";

const VideoLinks = ({ video_link }) => {
  return (
    <div className="">
      <div
        className={`grid items-end gap-2 pt-8 ${
          video_link.some((link) => link.link_title.length > 0)
            ? "grid-cols-3"
            : "grid-cols-4"
        }`}
      >
        {video_link.length > 0 &&
          video_link.map((link, index) => (
            <div key={index}>
              <VideoLink video_link={link.link} video_icon={link.link_icon}>
                {link.link_title}
              </VideoLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoLinks;
