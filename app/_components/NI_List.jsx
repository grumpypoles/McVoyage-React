import TripList from "@/app/_components/TripList";
import NITrip from "@/app/_models/NITrip";
import NI_Card from "@/app/_components/NI_Card";

const NI_List = () => (
  <TripList
    model={NITrip}
    CardComponent={NI_Card}
    adventure="Te Ika-a-Māui"
    emptyMessage="Sorry no North Island trips yet."
  />
);

export default NI_List;
