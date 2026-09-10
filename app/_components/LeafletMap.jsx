'use client';
import { useEffect, useRef } from "react";

function LeafletMap({ gpxPath, center, zoom = 11 }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let map = null;

    async function initMap() {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!mapRef.current) return;

      if (mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null;
      }

      const safeCenter = Array.isArray(center) && center.length === 2
        ? center
        : [-41.2865, 174.7762];

      map = L.map(mapRef.current, {
        center: safeCenter,
        zoom,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      // Stadia Outdoors — shows terrain, contours and trail markings
      // Free API key required for production: https://stadiamaps.com
      L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '© <a href="https://stadiamaps.com/">Stadia Maps</a> ' +
            '© <a href="https://openmaptiles.org/">OpenMapTiles</a> ' +
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 20,
        }
      ).addTo(map);

      // Zoom control — bottom right so it doesn't crowd the legend
      L.control.zoom({ position: "bottomright" }).addTo(map);

      if (gpxPath) {
        const { GpxLayer } = await import("./LeafletGpxLayer");
        GpxLayer(L, map, gpxPath);
      }
    }

    initMap();

    return () => {
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, [gpxPath, center, zoom]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "100%" }}
      aria-label="Interactive route map"
    />
  );
}

export default LeafletMap;
