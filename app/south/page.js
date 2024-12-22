import Image from "next/image";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import bg from "@/public/img/galleries/south_island/south_island.jpg";
import SI_List from "@/app/_components/SI_List";

export default function Page() {
  return (
    <>
      <div>
        <div className="flex justify-center max-h-[35rem] bg-slate-100">
          <div className="h-[800px]  w-full">
            <div className="relative w-full h-full">
              <Image
                className="object-cover w-full h-2/3"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
                src={bg}
                alt="Fiordland"
              />
              <div
                className="absolute inset-0 opacity-50 bg-accent-800 h-2/3 "
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
              ></div>
              <div className=" absolute tracking-widest grid columns-1 w-full top-[70px] gap-y-10">
               
                <div className="flex items-center justify-center w-full text-3xl font-bold text-white uppercase md:text-6xl ">
                  South Island Walks
                </div>
                <div className="flex items-center justify-center w-full text-sm font-bold text-white uppercase md:text-xl ">
                  Paradise on Earth
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-10 text-lg text-primary-600">
            <h2 className="flex justify-center text-lg font-bold text-center text-accent-800 md:text-4xl">
              So Far We Have Walked
            </h2>

            <div className="flex justify-center m-2 md:my-6">
              <Suspense fallback={<Spinner />}>
                <SI_List/>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
