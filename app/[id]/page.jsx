import { notFound, redirect } from "next/navigation";
import connectDB from "@/app/_config/database";
import ALLTrip from "@/app/_models/ALLTrip";

async function getTrip(id) {
  await connectDB();
  const trip = await ALLTrip.findById(id).lean();
  if (!trip) return null;
  return JSON.parse(JSON.stringify(trip));
}

export default async function Page({ params }) {
  const tripData = await getTrip(params.id);

  if (!tripData) notFound();

  // Redirect server-side — no client JS needed
  if (tripData?.card?.page_link) {
    redirect(tripData.card.page_link);
  }

  // Fallback: no page_link configured
  return null;
}
