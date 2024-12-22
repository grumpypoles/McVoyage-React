import GalleryTwelve from "@/app/_components/GalleryTwelve";
import VideoLinks from "@/app/_components/VideoLinks";
import Sub_Day from "@/app/_components/Sub_Day";
import MyMap from "./MyMap";

function OS_Day({
  directory,
  day_number,
  day_title,
  day_date,
  day_comment,
  image,
  image_number,
  image_alt,
  video_link,
  day_page,
  sub_day,
  my_map,
}) 
{
  const day_images = [];
  for (let i = 1; i <= image_number; i++) {
    day_images.push(`/img/galleries/${directory}${image}_${i}.webp`);
  }

  // Check if the day_number is even
  const isEven = day_page === "Even";

  return (
    <>
      <div className="pt-8 bg-white">
        {!isEven ? (
          <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 md:py-12">
            {/* Video Link and Day Info first for even days */}

            <div className="flex items-center ">
              <div
                className={`grid ${
                  image_number > 3 ? "grid-cols-2" : "grid-cols-1"
                } gap-2 mb-4 md:mb-0`}
              >
                {day_images.map((image, index) => (
                  <GalleryTwelve
                    src={image}
                    alt={`${image_alt} ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="">
              <p className="text-3xl font-bold text-gray-500 md:text-7xl">
                {day_number}
              </p>
              <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
                {day_title}
              </h1>
              <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
                {day_date}
              </p>
              <p className=" text-primary-800">{day_comment}</p>
            </div>
            {/* <div className="grid items-end grid-cols-4 gap-2 pt-8 ">
              {video_link.length > 0 &&
                video_link.map((link, index) => (
                  <div key={index}>
                    <VideoLink
                      video_link={link.link}
                      video_icon={link.link_icon}
                    >
                      {" "}
                      {link.link_title}
                    </VideoLink>
                  </div>
                ))}
            </div> */}
            <VideoLinks video_link={video_link} />
          </div>
        ) : (
          <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 md:py-12">
            {/* Day Info and Images first for odd days */}
            <div className="flex items-center order-1 md:order-2">
              <div
                className={`grid ${
                  image_number > 3 ? "grid-cols-2" : "grid-cols-1"
                } gap-2 mb-4 md:mb-0`}
              >
                {day_images.map((image, index) => (
                  <GalleryTwelve
                    src={image}
                    alt={`${image_alt} ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="order-2 md:order-1 ">
              <p className="text-3xl font-bold text-gray-500 md:text-7xl">
                {day_number}
              </p>
              <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
                {day_title}
              </h1>
              <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
                {day_date}
              </p>
              <p className="mb-4 text-primary-800 md:mb-0 ">{day_comment}</p>
              {/* <div className="grid items-end grid-cols-4 gap-2 pt-8">
                {video_link.length > 0 &&
                  video_link.map((link, index) => (
                    <div key={index}>
                      <VideoLink
                        video_link={link.link}
                        video_icon={link.link_icon}
                      >
                        {" "}
                        {link.link_title}
                      </VideoLink>
                    </div>
                  ))}
              </div> */}
              <VideoLinks video_link={video_link} />
            </div>
          </div>
        )}
      </div>
      <div>
        {sub_day && sub_day.length > 0 && (
          <div>
            {sub_day.map((subDay, index) => {
              // Filter and map video links outside JSX
              const video_link = subDay.sub_link
                .filter((link) => link.link_icon.length > 0)
                .map((link) => ({
                  link: link.link,
                  link_title: link.link_title,
                  link_icon: link.link_icon,
                }));

              return (
                <Sub_Day
                  key={index} // Always include a unique key when rendering lists in React
                  sub_title={subDay.sub_title} // Use correct property names
                  sub_date={subDay.sub_date}
                  sub_comment={subDay.sub_comment}
                  sub_page={subDay.sub_page} // Ensure correct field name is used
                  sub_image={subDay.sub_image.image}
                  sub_image_number={subDay.sub_image.image_number}
                  sub_image_alt={subDay.sub_image.image_alt}
                  sub_video_link={video_link} // Pass the array of links
                />
              );
            })}
          </div>
        )}
      </div>
      {my_map && (
        <div className="py-8 bg-white">
          <MyMap my_map={my_map} />
        </div>
      )}
    </>
  );
}

export default OS_Day;
