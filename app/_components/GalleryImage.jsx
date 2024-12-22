import Image from "next/image";

function GalleryImage({ src, alt }) {
    return (
        <Image
        src={src}
        height="400"
        width="400"
        alt={alt}
        className="w-0 h-0 min-h-full min-w-full object-cover cursor-pointer transition-all duration-300 ease-linear hover:w-[calc(100vh*0.8/2)] hover:h-[calc(100vw*0.8/5)]"
      />
    )
}

export default GalleryImage
