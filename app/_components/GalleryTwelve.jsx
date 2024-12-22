import Image from "next/image";

function GalleryTwelve({ src, alt }) {
  return (
    <>
      <div className="overflow-hidden">
        <Image
          src={src}
          height={400}
          width={400}
          alt={alt}
          className="block w-[125%] object-cover transition-transform duration-400 hover:scale-125"
        />
      </div>
    </>
  );
}

export default GalleryTwelve;
