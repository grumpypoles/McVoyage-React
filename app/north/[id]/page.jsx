"use client";
import { useParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

import GalleryHeader from "@/app/_components/GalleryHeader";
import GalleryTwelve from "@/app/_components/GalleryTwelve";
import MyMap from "@/app/_components/MyMap";
import OS_Day from "@/app/_components/OS_Day";
import GalleryThree from "@/app/_components/GalleryThree";

const Page = () => {
  const { id } = useParams();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripData = async () => {
      if (!id) return;

      try {
        const res = await fetch(`/api/ni_trips/${id}`);
        const osData = await res.json();

        setTripData(osData);
      } catch (error) {
        console.error("Error fetching trip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }
 
  const gallery_size = tripData.introduction.image_number ?? 9

  const trip_images = [];
  for (let i = 1; i <= gallery_size; i++) {
    trip_images.push(
      `/img/galleries/north_island${tripData.introduction.image}${i}.webp`
    );
  }

  
  const link_map = tripData.map;

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div>
          <GalleryHeader
            src={`/img/galleries/north_island${tripData.gallery_header.src}`}
            title={tripData.gallery_header.title}
            position={tripData.gallery_header.position}
            text={tripData.gallery_header.text_color}
          />
        </div>
        <div className="grid px-8 py-12 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 ">
          <div>
            <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
              {tripData.introduction.title}
            </h1>
            <p className=" text-primary-800">{tripData.introduction.text}</p>
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
            // Extracting the array of link objects from day.day_link
            const video_link = day.day_link
              .filter((link) => link.link_icon.length > 0) // filter links where link.link.length > 0
              .map((link) => ({
                link: link.link,
                link_title: link.link_title,
                link_icon: link.link_icon,
              }));

            return (
              <OS_Day
                directory={"north_island"}
                key={index} // Always include a unique key when rendering lists in React
                day_number={day.day_number}
                day_title={day.day_title} // Use correct property names
                day_date={day.day_date}
                day_comment={day.day_comment}
                day_page={day.page} // Ensure correct field name is used
                image={day.day_image.image}
                image_number={day.day_image.image_number}
                image_alt={day.day_image.image_alt}
                video_link={video_link} // Pass the array of links
              />
            );
          })}
        </div>

        <div className="py-8 bg-white ">
          <MyMap my_map={link_map} />
        </div>
      </Suspense>
    </>
  );
};
export default Page;
