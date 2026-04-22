import connectDB from "@/app/_config/database";
import NITrip from "@/app/_models/NITrip";
import NI_Card from "@/app/_components/NI_Card";

const NI_List = async () => {
  await connectDB();
  const trips = JSON.parse(
    JSON.stringify(await NITrip.find({}).sort({ _id: 1 }).lean())
  );
  const adventure = "Te Ika-a-Māui";

  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {trips.length === 0 ? (
        <p>Sorry no North Island trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10">
          {trips.map((os_trip) => (
            <NI_Card key={os_trip._id} os_trip={os_trip} adventure={adventure} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NI_List;
