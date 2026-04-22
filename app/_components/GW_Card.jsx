import FlipCard from "@/app/_components/FlipCard";

function GW_Card({ os_trip, adventure }) {
  return (
    <FlipCard
      os_trip={os_trip}
      adventure={adventure}
      imageDir="great_walks"
      basePath="/greatwalks"
      overlayColor="bg-green-800"
      backColor="bg-green-800"
      iconColor="text-green-800"
      buttonVariant="green"
    />
  );
}

export default GW_Card;
