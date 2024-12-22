import connectDB from "@/app/_config/database";
import NITrip from "@/app/_models/NITrip";
import NI_Card from "@/app/_components/NI_Card";

const NI_List = async () => {
  
  await connectDB();
  const osData = await NITrip.find({}).sort({ _id: 1 })
const adventure = 'Te Ika-a-Māui'
  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {osData.length === 0 ? (
        <p>Sorry no North south_island trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 ">
          {osData.map((os_trip) => (
            <NI_Card key={os_trip.id} os_trip={os_trip} adventure={adventure}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default NI_List;
