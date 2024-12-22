// import Carousels from "@/app/_components/Carousels";
import ALL_List from "@/app/_components/ALL_List";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export default function Page() {
  const imageArray = [
    { id: 1, src: "/img/main_image/NI-Taranaki.webp", alt: "Taranaki" },
    { id: 2, src: "/img/main_image/SI-Fiordland.webp", alt: "Fiordland" },
    { id: 3, src: "/img/main_image/Athens.webp", alt: "Athens" },
    { id: 4, src: "/img/main_image/Awaroa.webp", alt: "Awaroa" },
  ];
   return (
    <main>
     
      {/* <Carousels images={imageArray} /> */}
      {/* <div className="relative z-10 text-center ">
        <h2 className="flex justify-center mt-16 mb-16 text-lg font-bold text-center text-gray-500 md:text-4xl">
          Check out our trips
        </h2>
        <Suspense fallback={<Spinner />}>
          <ALL_List />
        </Suspense>
      </div> */}
      <div className="flex flex-col">
        <div className="mb-10 text-lg text-primary-600">
          {/* <h2 className="flex justify-center mt-8 text-lg font-bold text-center text-gray-500 md:text-4xl">
          Check out our trips
          </h2> */}
          <div className="flex justify-center mt-2 md:mt-6">
            <Suspense fallback={<Spinner />}>
            <ALL_List />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
