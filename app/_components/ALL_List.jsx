import TripList from "@/app/_components/TripList";
import ALLTrip from "@/app/_models/ALLTrip";
import ALL_Card from "@/app/_components/ALL_Card";

const ALL_List = () => (
  <TripList
    model={ALLTrip}
    CardComponent={ALL_Card}
    emptyMessage="Sorry no trips recorded yet."
    gridCols="grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
  />
);

export default ALL_List;
