import TripList from "@/app/_components/TripList";
import GWTrip from "@/app/_models/GWTrip";
import GW_Card from "@/app/_components/GW_Card";

const GW_List = () => (
  <TripList
    model={GWTrip}
    CardComponent={GW_Card}
    adventure="Great Walks"
    emptyMessage="Sorry no great walks trips yet."
  />
);

export default GW_List;
