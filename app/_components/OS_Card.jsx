import Image from "next/image";
import Link from "next/link";
import {
  IoCalendarOutline, IoHourglassOutline, IoNavigateOutline
} from "react-icons/io5";
import TripButton from "@/app/_components/TripButton";

function OS_Card({ os_trip }) {
  const os_image = `/img/galleries/overseas/${os_trip.image}`;
  
  return (
    <div className="flex flex-col gap-10 text-lg bg-white rounded-t-xl ">
      <div className="relative overflow-hidden w-80 h-80 rounded-t-xl">
        {" "}
        {/* Fixed height container */}
        <Image
          src={os_image}
          alt={`${os_trip.title} Trip`}
          fill // Ensures the image covers the container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
          className="object-cover" // Maintain aspect ratio, fill the container
        />
      </div>
      <div className="">
        <div className="flex flex-row justify-center gap-4 mb-5">
          {os_trip.tag_1 && (
            <span className="inline-block px-4 py-1 text-xs font-black text-gray-800 uppercase bg-blue-400 rounded-full">
              {os_trip.tag_1}
            </span>
          )}
          {os_trip.tag_2 && (
            <span className="inline-block px-4 py-1 text-xs font-black text-gray-800 uppercase bg-yellow-300 rounded-full">
              {os_trip.tag_2}
            </span>
          )}
        </div>
        <p className="flex flex-row justify-center pl-4 text-3xl font-semibold text-gray-800">
          {os_trip.title}
        </p>
        <ul className="mt-6 mb-2 text-gray-800">
          <li className="flex pl-12 mb-4">
            <IoCalendarOutline className="w-6 h-6 mr-8 text-blue-800" />
            <span>{os_trip.date}</span>
          </li>
          <li className="flex pl-12 mb-4">
            <IoHourglassOutline className="w-6 h-6 mr-8 text-blue-800" />
            <span>{os_trip.duration}</span>
          </li>
          <li className="flex pl-12">
            <IoNavigateOutline className="w-6 h-6 mr-8 text-blue-800" />
            <span>{os_trip.transport}</span>
          </li>
        </ul>
        <Link
          href={
            os_trip.page_link && os_trip.page_link.length > 0
              ? `/overseas/${os_trip._id}/${os_trip.page_link}`
              : `/overseas/${os_trip._id}`
          }
          className="flex items-center mb-4 text-2xl font-semibold text-primary-300"
        >
          <TripButton variant={"white"} animated={false}>
            Details
          </TripButton>
        </Link>
      </div>
    </div>
  );
}

export default OS_Card;

