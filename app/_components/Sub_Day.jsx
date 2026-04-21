import GalleryTwelve from "@/app/_components/GalleryTwelve";
import VideoLinks from "@/app/_components/VideoLinks";
import MarkdownRenderer from "./MarkdownRenderer";

function Sub_Day({
  sub_title,
  sub_date,
  sub_comment,
  sub_image,
  sub_image_number,
  sub_image_alt,
  sub_video_link,
  sub_page,
}) {
  const day_images = [];
  for (let i = 1; i <= sub_image_number; i++) {
    day_images.push(`/img/galleries/overseas${sub_image}_${i}.webp`);
  }

  const isEven = sub_page === "Even";

  const imageGrid = (
    <div className="flex items-center">
      <div className={`grid ${sub_image_number > 3 ? "grid-cols-2" : "grid-cols-1"} gap-2 mb-4 lg:mb-0`}>
        {day_images.map((image, index) => (
          <GalleryTwelve
            src={image}
            alt={`${sub_image_alt} ${index + 1}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );

  const dayInfo = (
    <div>
      <h1 className="py-2 text-xl font-bold text-primary-800 lg:text-3xl lg:py-4">
        {sub_title}
      </h1>
      <p className="block text-lg font-normal text-primary-600 mb-6 tracking-[0.75px]">
        {sub_date}
      </p>
      <MarkdownRenderer
        content={sub_comment}
        className="mb-4 text-primary-800 lg:mb-0"
      />
      <VideoLinks video_link={sub_video_link} />
    </div>
  );

  return (
    <div className="pt-8 bg-white">
      <div className="grid px-8 py-2 mx-auto bg-gray-100 rounded-md gap-x-24 lg:grid-cols-2 lg:w-3/5 lg:py-12">
        {!isEven ? (
          <>
            {imageGrid}
            {dayInfo}
          </>
        ) : (
          <>
            <div className="order-1 lg:order-2">{imageGrid}</div>
            <div className="order-2 lg:order-1">{dayInfo}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sub_Day;
