import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import OS_List from "@/app/_components/OS_List";
import GalleryImage from "../_components/GalleryImage";

export const metadata = {
  title: "Overseas Trips",
};

const Page = async () => {

  return (
    <>
      <div className="grid place-content-center min-h-[30rem] mb-10 bg-gray-200 md:mb-20">
        <div className="grid gap-[1rem] w-screen h-[55vh] grid-cols-[repeat(5,auto)]">
          <GalleryImage
            src="/img/galleries/overseas/gal-1.webp"
            alt="The Ferreres Aqueduct, also known as the Pont del Diable"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-2.webp"
            alt="Forest in Tarragona in Catalonia, Spain."
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-3.webp"
            alt="Historic Center of Prague"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-4.webp"
            alt="Tourist in the mountains"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-5.webp"
            alt="Ruins of the castle"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-6.webp"
            alt="Neptun fountain in Old Town of Gdansk"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-7.webp"
            alt="Ring of Brodgar - Orkney Islands"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-8.webp"
            alt="Amalfi view from the above clifs"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-9.webp"
            alt="Capri - stone steps towards the beach"
          />
          <GalleryImage
            src="/img/galleries/overseas/gal-10.webp"
            alt="The Casa de les Punxes or Casa Terradas  - Barcelona"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-10 text-lg text-primary-600">
          <h2 className="flex justify-center text-lg font-bold text-center text-gray-500 md:text-4xl">
            So Far We Have Visited
          </h2>
          <div className="flex justify-center mt-2 md:mt-6">
            <Suspense fallback={<Spinner />}>
              <OS_List />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
