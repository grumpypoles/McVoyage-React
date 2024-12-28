import connectDB from "@/app/_config/database";
import SITrip from "@/app/_models/SITrip";
import SI_Card from "@/app/_components/SI_Card";

const SI_List = async () => {
  
  await connectDB();
  const osData = await SITrip.find({}).sort({ _id: 1 })
const adventure = 'Te Waipounamu'
  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {osData.length === 0 ? (
        <p>Sorry no South Island trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10 ">
          {osData.map((os_trip) => (
            <SI_Card key={os_trip.id} os_trip={os_trip} adventure={adventure}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SI_List;
