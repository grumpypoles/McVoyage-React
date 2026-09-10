/**
 * LeafletGpxLayer — loads a GPX file and adds it to a Leaflet map
 * with custom markers and route styling to match the McWoyage site.
 */
export function GpxLayer(L, map, gpxPath) {
  require("leaflet-gpx");

  // Custom div icons — styled with inline CSS since Tailwind isn't
  // available inside Leaflet's isolated marker DOM
  const startIcon = L.divIcon({
    html: `
      <div style="
        width: 14px; height: 14px;
        background: #16a34a;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      "></div>`,
    className: "",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  const endIcon = L.divIcon({
    html: `
      <div style="
        width: 14px; height: 14px;
        background: #dc2626;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      "></div>`,
    className: "",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  const waypointIcon = L.divIcon({
    html: `
      <div style="
        width: 10px; height: 10px;
        background: white;
        border: 2px solid #16a34a;
        border-radius: 50%;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      "></div>`,
    className: "",
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });

  new L.GPX(gpxPath, {
    async: true,
    marker_options: {
      startIcon,
      endIcon,
      wptIcon: waypointIcon,
    },
    polyline_options: {
      color: "#16a34a",    // green-600 — matches the site accent
      weight: 4,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round",
    },
  })
    .on("loaded", (e) => {
      map.fitBounds(e.target.getBounds(), { padding: [32, 32] });
    })
    .on("error", (e) => {
      console.error("GPX load error:", e);
    })
    .addTo(map);
}
