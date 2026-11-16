import Image from "next/image";

function GalleryTwelve({ src, alt }) {
  return (
    <div className="overflow-hidden">
      <Image
        src={src}
        height={400}
        width={400}
        alt={alt}
        // h-auto: width is changed by w-[125%], so height must follow the aspect ratio
        className="block w-[125%] h-auto object-cover transition-transform duration-400 hover:scale-125"
      />
    </div>
  );
}

export default GalleryTwelve;
