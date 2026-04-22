import Image from "next/image";
import Link from "next/link";
import TripButton from "@/app/_components/TripButton";

function ALL_Card({ os_trip }) {
  const os_image = `/img/galleries/main/${os_trip.card.image}`;

  return (
    <div className="flex flex-col gap-10 text-lg bg-gray-300 rounded-t-xl">
      <div className="relative overflow-hidden w-96 rounded-t-xl">
        <div className="flex flex-col items-center">
          <h1 className="py-4 mx-auto mt-8 mb-4 text-3xl font-semibold text-center text-white bg-green-600 rounded-md w-72">
            {os_trip.card.title}
          </h1>

          <div className="relative overflow-hidden w-96 h-80">
            <Image
              src={os_image}
              alt={`${os_trip.card.title} Trip`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-64 p-8 text-base text-center text-gray-800">
            <p>{os_trip.card.comment}</p>
          </div>

          <div className="flex justify-center py-4">
            <Link href={`/${os_trip._id}`}>
              <TripButton variant={"green"} animated={false} size="sm">
                Details
              </TripButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ALL_Card;
