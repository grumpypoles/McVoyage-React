import Image from "next/image";
import Link from "next/link";

import {
  IoCalendarOutline,
  IoLocationOutline,
  IoHourglassOutline,
  IoFootstepsOutline,
  IoCardOutline,
  IoPulseOutline,
} from "react-icons/io5";

import TripButton from "@/app/_components/TripButton";

function GW_Card({ os_trip, adventure }) {
  const card = os_trip.card

  const os_image = `/img/galleries/great_walks/${card.image}`;
 
  return (
    <div className="flex items-center justify-center min-h-[35rem] bg-slate-100">
    <div className="group h-[500px]  w-72 [perspective:1000px]">
      <div className="relative w-full h-full shadow-xl rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="relative w-full h-full">
          <Image
            className="object-cover w-full shadow-xl h-1/2 shadow-black/40 rounded-xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
            src={os_image}
            width={100}
            height={50}
            alt={`${card.title} Trip`}
          />
          <div
            className="absolute inset-0 bg-green-800 opacity-50 h-1/2 rounded-xl "
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
          ></div>
          <div className="grid grid-cols-2 gap-8 pt-16 pl-8 text-green-800">
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoLocationOutline className="text-xl" />
              {card.icons.location}
            </span>
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoCalendarOutline className="text-xl" />
              {card.icons.date}
            </span>
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoHourglassOutline className="text-xl" />
              {card.icons.duration}
            </span>
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoFootstepsOutline className="text-xl" />
              {card.icons.distance}
            </span>
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoCardOutline className="text-xl" />
              {card.icons.cost}
            </span>
            <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2 ">
              <IoPulseOutline className="text-xl" />
              {card.icons.level}
            </span>
           
          </div>
        </div>
        <div className="absolute top-[150px] left-[30px] text-white text-3xl  font-bold  [backface-visibility:hidden] z-10">
          {card.title}
        </div>

        <div className="absolute inset-0 w-full h-full px-12 text-center bg-green-800 rounded-xl text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center min-h-full">
            <h1 className="absolute text-lg top-[50px]">{adventure}</h1>
            <p className="absolute top-[100px] text-2xl">{card.slogan}</p>
            <p className="text-sm">{card.comment}</p>
            {/* <button className="absolute px-2 py-1 mt-2 text-sm bg-green-600 rounded-md bottom-12 hover:bg-primary-900">
              Read More
            </button> */}
            <Link
          href={
            os_trip.page_link && os_trip.page_link.length > 0
              ? `/greatwalks/${os_trip._id}/${os_trip.page_link}`
              : `/greatwalks/${os_trip._id}`
          }
          className="absolute flex items-center px-2 py-1 mt-2 text-sm font-semibold right-10 bottom-10"
        >
          <TripButton variant={"green"} animated={false}>
            Details
          </TripButton>
        </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default GW_Card;

