// /app/api/trips/[id]/route.js
import connectDB from "@/app/_config/database";
import ALLTrip from "@/app/_models/ALLTrip";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const trip = await ALLTrip.findById(id);
    
    if (!trip) {
      return new Response(JSON.stringify({ error: "Trip not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(trip), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching trip" }), { status: 500 });
  }
}
