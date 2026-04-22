import FlipCard from "@/app/_components/FlipCard";

function NI_Card({ os_trip, adventure }) {
  return (
    <FlipCard
      os_trip={os_trip}
      adventure={adventure}
      imageDir="north_island"
      basePath="/north"
      overlayColor="bg-blue-800"
      backColor="bg-blue-800"
      iconColor="text-blue-800"
      buttonVariant="blue"
    />
  );
}

export default NI_Card;
