const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all trips
async function fetchTrips() {
  try {
    // Handle the case where domain is not available yet
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/overseas`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch singular trip
async function fetchTrip(id) {
  try {
    // Handle the case where domain is not available yet
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/overseas/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchTrips, fetchTrip };
