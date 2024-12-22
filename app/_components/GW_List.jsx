import connectDB from "@/app/_config/database";
import GWTrip from "@/app/_models/GWTrip";
import GW_Card from "@/app/_components/GW_Card";

const GW_List = async () => {
  
  await connectDB();
  const osData = await GWTrip.find({}).sort({ _id: 1 })
const adventure = 'Great Walks'
  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {osData.length === 0 ? (
        <p>Sorry no great walks trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 ">
          {osData.map((os_trip) => (
            <GW_Card key={os_trip.id} os_trip={os_trip} adventure={adventure}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default GW_List;
