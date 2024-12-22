import Image from "next/image";

const GalleryFooter = ({src, fName, bio}) => {
  

    const personal_image = `/img/galleries/main/${src}`;   
   
    return (
      <div className="flex items-center pl-6">
        <div className="flex flex-col">
          {/* Self */}
          <div className="flex">
              <Image
              src={personal_image}
              alt={fName}
              width={96}
              height={96}
              className="object-cover w-24 h-24 mr-6 rounded-full"
            />
            {/* Text */}
            <p className="p-6 text-sm leading-7 md:text-lg">
              {bio}
            </p>
          </div>
          {/* Name */}
          <p className="mb-1 ml-40 font-semibold text-gray-400 text-sn lg:ml-60 md:uppercase md:text-base">
           {`-- ${fName}`}
          </p>
        </div>
        {/* One */}
        <div className="lg:col-span-1 lg:row-span-1">
          {/* Content for .one */}
        </div>
      </div>
    );
  };
  
  export default GalleryFooter;
  