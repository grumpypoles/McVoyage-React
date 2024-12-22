import Link from "next/link";

import {
  IoVideocamOutline,
  IoBookOutline,
  IoMapOutline,
  IoCameraOutline,
} from "react-icons/io5";

function MyMap({ my_map }) {
  const { link_map, link_book, link_camera, link_video, link_folder } = my_map;

  return (
    <div className="grid px-8 py-4 mx-auto bg-gray-100  rounded-md gap-x-2 md:grid-cols-[10%_90%] md:py-8 md:w-3/5">
      <div className="w-full h-[500px] md:order-2 md:w-full">
        <iframe
          src={link_map}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-row py-2 text-blue-600 md:order-1 md:flex-col md:w-full md:pl-12 md:pt-16">
        {link_book && (
          <Link
            href={link_book}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 text-2xl font-semibold"
          >
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
              <IoBookOutline className="w-5 h-5 mr-2" />
            </span>
          </Link>
        )}
        {link_camera && (
          <Link
            href={link_camera}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 text-2xl font-semibold"
          >
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
              <IoCameraOutline className="w-5 h-5 mr-2" />
            </span>
          </Link>
        )}
        {link_video && (
          <Link
            href={link_video}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 text-2xl font-semibold"
          >
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
              <IoVideocamOutline className="w-5 h-5 mr-2" />
            </span>
          </Link>
        )}
        {link_folder && (
          <Link
            href={link_folder}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 text-2xl font-semibold"
          >
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
              <IoMapOutline className="w-5 h-5 mr-2" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MyMap;
