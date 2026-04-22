import connectDB from "@/app/_config/database";
import OSTrip from "@/app/_models/OSTrip";
import OS_Card from "@/app/_components/OS_Card";

const OS_List = async () => {
  await connectDB();
  const trips = JSON.parse(
    JSON.stringify(await OSTrip.find({}).sort({ _id: 1 }).lean())
  );

  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {trips.length === 0 ? (
        <p>Sorry no overseas trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trips.map((os_trip) => (
            <OS_Card key={os_trip._id} os_trip={os_trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OS_List;
