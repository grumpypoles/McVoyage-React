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

  // Desktop (lg+): the images float to one side and the comment wraps around
  // them, so once the text passes the bottom of the images it spreads to the
  // full width. The float is (50% - 3rem) wide with a 6rem gutter, matching the
  // old two-column grid. Mobile: single column, shown as images, heading, text.
  // (Full class strings so Tailwind can detect them.)
  const floatSide = isEven
    ? "lg:float-right lg:ml-24"
    : "lg:float-left lg:mr-24";
  const headerSide = isEven ? "" : "lg:ml-auto";

  const imageGrid = (
    <div className={`order-1 lg:w-[calc(50%-3rem)] ${floatSide}`}>
      <div className={`grid ${sub_image_number > 3 ? "grid-cols-2" : "grid-cols-1"} gap-2 mb-4 lg:mb-6`}>
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

  // Sits in the text column; the floated images start directly below it,
  // i.e. level with the comment.
  const dayHeader = (
    <div className={`order-2 lg:w-[calc(50%-3rem)] ${headerSide}`}>
      <h1 className="py-2 text-xl font-bold text-primary-800 lg:text-3xl lg:py-4">
        {sub_title}
      </h1>
      <p className="block text-lg font-normal text-primary-600 mb-6 tracking-[0.75px]">
        {sub_date}
      </p>
    </div>
  );

  const dayBody = (
    <div className="order-3">
      <MarkdownRenderer
        content={sub_comment}
        className="mb-4 text-primary-800 lg:mb-0"
      />
      <VideoLinks video_link={sub_video_link} />
    </div>
  );

  return (
    <div className="pt-8 bg-white">
      <div className="flex flex-col px-8 py-2 mx-auto bg-gray-100 rounded-md lg:flow-root lg:w-3/5 lg:py-12">
        {dayHeader}
        {imageGrid}
        {dayBody}
      </div>
    </div>
  );
}

export default Sub_Day;
