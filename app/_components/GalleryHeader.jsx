import Image from "next/image";

const GalleryHeader = ({ src, title, position, text }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={title}
        quality={100}
        width={2000}
        height={32} // Adjust the aspect ratio as needed
        className="object-cover w-full h-[10vh] md:h-[55vh]" // Adjust height as per requirement
      />
      <div className={`absolute p-4 text-4xl ${text} ${position}  bg-opacity-50 hidden md:block`}>
        {title}
      </div>
    </div>
  );
};

export default GalleryHeader;
