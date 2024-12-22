import Image from "next/image";

function GalleryThree({ src, alt }) {
  return (
    <>
      <div className="overflow-hidden">
        <Image
          src={src}
          height={600}
          width={600}
          alt={alt}
          className="block w-[125%]  object-cover transition-transform duration-400 hover:scale-125"
        />
      </div>
    </>
  );
}

export default GalleryThree;



// // components/Composition.js
// import React from 'react';

// export default function Composition() {
//   return (
//     <div className="relative mt-20">
//       <div className="composition_photo composition_photo--p1 w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8">
//         {/* Photo 1 */}
//       </div>
//       <div className="composition_photo composition_photo--p2 w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8">
//         {/* Photo 2 */}
//       </div>
//       <div className="composition_photo composition_photo--p3 w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8">
//         {/* Photo 3 */}
//       </div>
//     </div>
//   );
// }

// <div className="relative mt-20">
//   <div className="w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8 top-[-2rem] left-0 tab-port:float-left tab-port:relative tab-port:w-[33.33%] tab-port:top-0 tab-port:scale-120">
//     {/* Photo 1 */}
//   </div>
//   <div className="w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8 top-[2rem] right-0 tab-port:top-[-1rem] tab-port:scale-130 tab-port:z-10">
//     {/* Photo 2 */}
//   </div>
//   <div className="w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-all duration-200 outline outline-offset-8 top-[10rem] left-[20%] tab-port:top-[1rem] tab-port:left-0 tab-port:scale-110">
//     {/* Photo 3 */}
//   </div>
// </div>


// <div className="relative mt-20 group">
//   <div className="composition_photo w-[55%] shadow-xl shadow-black/40 absolute z-10 transition-transform duration-200 outline outline-offset-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group-hover:scale-95">
//     {/* Photo 1 */}
//   </div>
//   {/* Repeat for other photos */}
// </div>


