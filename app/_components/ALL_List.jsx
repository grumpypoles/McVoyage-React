import connectDB from "@/app/_config/database";
import ALLTrip from "@/app/_models/ALLTrip";
import ALL_Card from "@/app/_components/ALL_Card";

const ALL_List = async () => {
  await connectDB();
  const trips = JSON.parse(
    JSON.stringify(await ALLTrip.find({}).sort({ _id: 1 }).lean())
  );

  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {trips.length === 0 ? (
        <p>Sorry no trips recorded yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {trips.map((os_trip) => (
            <ALL_Card key={os_trip._id} os_trip={os_trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ALL_List;
