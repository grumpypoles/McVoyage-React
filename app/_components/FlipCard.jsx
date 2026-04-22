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

/**
 * FlipCard — shared flip card for Great Walks, North Island and South Island trips.
 *
 * Props:
 *   os_trip       — Mongoose trip document (plain object via .lean())
 *   adventure     — Section label shown on the card back e.g. "Great Walks"
 *   imageDir      — Image directory name e.g. "great_walks"
 *   basePath      — URL base e.g. "/greatwalks", "/north", "/south"
 *   overlayColor  — Tailwind bg class for the image overlay e.g. "bg-green-800"
 *   backColor     — Tailwind bg class for the card back e.g. "bg-green-800"
 *   iconColor     — Tailwind text class for the icons/stats e.g. "text-green-800"
 *   buttonVariant — TripButton variant e.g. "green", "blue", "accent"
 */
function FlipCard({
  os_trip,
  adventure,
  imageDir,
  basePath,
  overlayColor,
  backColor,
  iconColor,
  buttonVariant,
}) {
  const card = os_trip.card;
  const os_image = `/img/galleries/${imageDir}/${card.image}`;
  const href =
    os_trip.page_link && os_trip.page_link.length > 0
      ? `${basePath}/${os_trip._id}/${os_trip.page_link}`
      : `${basePath}/${os_trip._id}`;

  return (
    <div className="flex items-center justify-center min-h-[35rem] bg-slate-100">
      <div className="group h-[500px] w-72 [perspective:1000px]">
        <div className="relative w-full h-full shadow-xl rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* Front */}
          <div className="relative w-full h-full">
            <Image
              className="object-cover w-full shadow-xl h-1/2 shadow-black/40 rounded-xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
              src={os_image}
              alt={`${card.title} Trip`}
              width={288}
              height={250}
            />
            <div
              className={`absolute inset-0 ${overlayColor} opacity-50 h-1/2 rounded-xl`}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
            />
            <div className={`grid grid-cols-2 gap-8 pt-16 pl-8 ${iconColor}`}>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoLocationOutline className="text-xl" />
                {card.icons.location}
              </span>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoCalendarOutline className="text-xl" />
                {card.icons.date}
              </span>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoHourglassOutline className="text-xl" />
                {card.icons.duration}
              </span>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoFootstepsOutline className="text-xl" />
                {card.icons.distance}
              </span>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoCardOutline className="text-xl" />
                {card.icons.cost}
              </span>
              <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
                <IoPulseOutline className="text-xl" />
                {card.icons.level}
              </span>
            </div>
          </div>

          {/* Front title overlay */}
          <div className="absolute top-[150px] left-[30px] text-white text-3xl font-bold [backface-visibility:hidden] z-10">
            {card.title}
          </div>

          {/* Back */}
          <div className={`absolute inset-0 w-full h-full px-12 text-center ${backColor} rounded-xl text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
            <div className="flex flex-col items-center justify-center min-h-full">
              <h1 className="absolute text-lg top-[50px]">{adventure}</h1>
              <p className="absolute top-[100px] text-2xl">{card.slogan}</p>
              <p className="text-sm">{card.comment}</p>
              <Link
                href={href}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <TripButton variant={buttonVariant} animated={false} size="sm">
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

export default FlipCard;
