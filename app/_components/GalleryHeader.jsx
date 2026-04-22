import Image from "next/image";

const GalleryHeader = ({ src, title, position, text }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={title}
        quality={100}
        width={2000}
        height={32}
        className="object-cover w-full h-[30vh] md:h-[55vh]"
      />
      <div className={`absolute p-4 text-2xl md:text-4xl ${text} ${position} bg-opacity-50`}>
        {title}
      </div>
    </div>
  );
};

export default GalleryHeader;
