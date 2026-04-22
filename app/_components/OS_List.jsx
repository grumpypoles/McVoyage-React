import TripList from "@/app/_components/TripList";
import OSTrip from "@/app/_models/OSTrip";
import OS_Card from "@/app/_components/OS_Card";

const OS_List = () => (
  <TripList
    model={OSTrip}
    CardComponent={OS_Card}
    emptyMessage="Sorry no overseas trips yet."
  />
);

export default OS_List;
