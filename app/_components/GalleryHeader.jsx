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
        // Hero image is above the fold and is the LCP element: load it immediately
        loading="eager"
        fetchPriority="high"
        // Always full viewport width, so don't let the browser assume a smaller slot
        sizes="100vw"
        className="object-cover w-full h-[30vh] md:h-[55vh]"
      />
      <div className={`absolute p-4 text-2xl md:text-4xl ${text} ${position} bg-opacity-50`}>
        {title}
      </div>
    </div>
  );
};

export default GalleryHeader;
