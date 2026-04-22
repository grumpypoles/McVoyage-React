import TripList from "@/app/_components/TripList";
import SITrip from "@/app/_models/SITrip";
import SI_Card from "@/app/_components/SI_Card";

const SI_List = () => (
  <TripList
    model={SITrip}
    CardComponent={SI_Card}
    adventure="Te Waipounamu"
    emptyMessage="Sorry no South Island trips yet."
  />
);

export default SI_List;
