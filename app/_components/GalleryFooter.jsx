import Image from "next/image";

const GalleryFooter = ({ src, fName, bio }) => {
  const personal_image = `/img/galleries/main/${src}`;

  return (
    <div className="flex items-start gap-6 px-6 py-4">
      <Image
        src={personal_image}
        alt={fName}
        width={96}
        height={96}
        className="object-cover w-24 h-24 rounded-full shrink-0"
      />
      <div className="flex flex-col justify-center">
        <p className="text-sm leading-7 md:text-base">{bio}</p>
        <p className="mt-2 text-sm font-semibold text-gray-400 uppercase">
          — {fName}
        </p>
      </div>
    </div>
  );
};

export default GalleryFooter;
