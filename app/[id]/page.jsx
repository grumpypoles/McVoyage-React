"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "@/app/_components/Spinner";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripData = async () => {
      if (!id) return;

      try {
        const res = await fetch(`/api/al_trips/${id}`);
        const osData = await res.json();

        setTripData(osData);

        // Automatically navigate to the page link if it exists
        if (osData?.card?.page_link) {
          router.push(osData.card.page_link);
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [id, router]);

  if (loading) {
    return <Spinner />;
  }

  return null; // No need to render anything since the user is redirected
};

export default Page;
