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
  const { id } = await params;
  const tripData = await getTrip(id);

  if (!tripData) notFound();

  if (tripData?.card?.page_link) {
    redirect(tripData.card.page_link);
  }

  return null;
}
