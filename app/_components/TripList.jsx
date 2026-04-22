import connectDB from "@/app/_config/database";

/**
 * TripList — shared async server component for all trip list pages.
 *
 * Props:
 *   model         — Mongoose model to query
 *   CardComponent — Card component to render for each trip
 *   emptyMessage  — Text shown when no trips exist
 *   adventure     — Optional label passed to card (Great Walks, NI, SI)
 *   gridCols      — Tailwind classes for the grid columns (optional override)
 */
const TripList = async ({
  model,
  CardComponent,
  emptyMessage,
  adventure,
  gridCols = "grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10",
}) => {
  await connectDB();
  const trips = JSON.parse(
    JSON.stringify(await model.find({}).sort({ _id: 1 }).lean())
  );

  return (
    <div className="flex justify-end mt-10 text-2xl text-primary-200">
      {trips.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <div className={`grid ${gridCols}`}>
          {trips.map((trip) => (
            <CardComponent
              key={trip._id}
              os_trip={trip}
              {...(adventure && { adventure })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TripList;
