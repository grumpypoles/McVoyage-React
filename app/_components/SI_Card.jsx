import FlipCard from "@/app/_components/FlipCard";

function SI_Card({ os_trip, adventure }) {
  return (
    <FlipCard
      os_trip={os_trip}
      adventure={adventure}
      imageDir="south_island"
      basePath="/south"
      overlayColor="bg-accent-800"
      backColor="bg-accent-900"
      iconColor="text-accent-900"
      buttonVariant="accent"
    />
  );
}

export default SI_Card;
