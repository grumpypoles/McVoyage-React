import GalleryTwelve from "@/app/_components/GalleryTwelve";
import VideoLinks from "@/app/_components/VideoLinks";

function Sub_Day({
  
  sub_title,
  sub_date,
  sub_comment,
  sub_image,
  sub_image_number,
  sub_image_alt,
  sub_video_link,
  sub_page,
  // sub_day,
}) {

 
  const day_images = [];
  for (let i = 1; i <= sub_image_number; i++) {
    day_images.push(`/img/galleries/overseas${sub_image}_${i}.webp`);
  }
  

  // Check if the day_number is even
  const isEven = sub_page === "Even";

  return (
    <>
      <div className="pt-8 bg-white">
        {!isEven ? (
          <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 md:py-12">
            {/* Video Link and Day Info first for even days */}

            <div className="flex items-center ">
            <div className={`grid ${sub_image_number > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mb-4 md:mb-0`}>
                {day_images.map((image, index) => (
                  <GalleryTwelve
                    src={image}
                    alt={`${sub_image_alt} ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="">
              <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
                {sub_title}
              </h1>
              <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
                {sub_date}
              </p>
              <p className=" text-primary-800">{sub_comment}</p>
            </div>
          <VideoLinks video_link={sub_video_link} />
          </div>
        ) : (
          <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 md:grid-cols-2 md:w-3/5 md:py-12">
            {/* Day Info and Images first for odd days */}
            <div className="flex items-center order-1 md:order-2">
            <div className={`grid ${sub_image_number > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mb-4 md:mb-0`}>
                {day_images.map((image, index) => (
                  <GalleryTwelve
                    src={image}
                    alt={`${sub_image_alt} ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="order-2 md:order-1">
             <h1 className="py-2 text-xl font-bold text-primary-800 md:text-3xl md:py-4">
                {sub_title}
              </h1>
              <p className="block text-lg font-normal  text-primary-600 mb-6 tracking-[0.75px]">
                {sub_date}
              </p>
              <p className="mb-4 text-primary-800 md:mb-0 ">{sub_comment}</p>
               <VideoLinks video_link={sub_video_link} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sub_Day;
