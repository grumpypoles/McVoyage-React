import ALL_Card from "@/app/_components/ALL_Card";
import connectDB from "@/app/_config/database";
import ALLTrip from "@/app/_models/ALLTrip";


const ALL_List = async () => {
  
  await connectDB();
  
  const osData = await ALLTrip.find({}).sort({ _id: 1 })
 
  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {osData.length === 0 ? (
        <p>Sorry no overseas trips recorded yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {osData.map((os_trip) => (
            <ALL_Card key={os_trip.id} os_trip={os_trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ALL_List;
