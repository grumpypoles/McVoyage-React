import { notFound } from "next/navigation";
import connectDB from "@/app/_config/database";
import NITrip from "@/app/_models/NITrip";

import GalleryHeader from "@/app/_components/GalleryHeader";
import GalleryTwelve from "@/app/_components/GalleryTwelve";
import MyMap from "@/app/_components/MyMap";
import OS_Day from "@/app/_components/OS_Day";
import MarkdownRenderer from "@/app/_components/MarkdownRenderer";

export async function generateMetadata({ params }) {
  const tripData = await getTrip(params.id);
  if (!tripData) return {};
  return {
    title: tripData.introduction.title,
  };
}

async function getTrip(id) {
  await connectDB();
  const trip = await NITrip.findById(id).lean();
  if (!trip) return null;
  return JSON.parse(JSON.stringify(trip));
}

export default async function Page({ params }) {
  const tripData = await getTrip(params.id);

  if (!tripData) notFound();

  const gallery_size = tripData.introduction.image_number ?? 9;
  const trip_images = Array.from({ length: gallery_size }, (_, i) =>
    `/img/galleries/north_island${tripData.introduction.image}${i + 1}.webp`
  );

  return (
    <>
      <div>
        <GalleryHeader
          src={`/img/galleries/north_island${tripData.gallery_header.src}`}
          title={tripData.gallery_header.title}
          position={tripData.gallery_header.position}
          text={tripData.gallery_header.text_color}
        />
      </div>

      <div className="grid px-8 py-12 mx-auto bg-gray-100 rounded-md gap-x-24 lg:grid-cols-2 lg:w-3/5">
        <div>
          <h1 className="py-2 text-xl font-bold text-primary-800 lg:text-3xl lg:py-4">
            {tripData.introduction.title}
          </h1>
          <MarkdownRenderer
            content={tripData.introduction.text}
            className="text-primary-800"
          />
        </div>
        <div className="flex items-center">
          <div className="grid grid-cols-3 gap-2 pt-24">
            {trip_images.map((image, index) => (
              <GalleryTwelve
                src={image}
                alt={`${tripData.introduction.image_alt} ${index + 1}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-16">
        {tripData.days.map((day, index) => {
          const video_link = day.day_link
            .filter((link) => link.link_icon.length > 0)
            .map((link) => ({
              link: link.link,
              link_title: link.link_title,
              link_icon: link.link_icon,
            }));

          return (
            <OS_Day
              directory="north_island"
              key={index}
              day_number={day.day_number}
              day_title={day.day_title}
              day_date={day.day_date}
              day_comment={day.day_comment}
              day_page={day.page}
              image={day.day_image.image}
              image_number={day.day_image.image_number}
              image_alt={day.day_image.image_alt}
              video_link={video_link}
            />
          );
        })}
      </div>

      <div className="py-8 bg-white">
        <MyMap my_map={tripData.map} />
      </div>
    </>
  );
}
