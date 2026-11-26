'use client';
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  IoVideocamOutline,
  IoBookOutline,
  IoMapOutline,
  IoCameraOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";

// Leaflet must be loaded client-side only — no SSR
const LeafletMap = dynamic(() => import("@/app/_components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-sm text-gray-500 bg-gray-200">
      Loading map…
    </div>
  ),
});

/**
 * MyMap — renders either a Google MyMaps iframe (legacy) or a Leaflet map (new).
 *
 * Detection logic:
 *   my_map.gpx_path is set  → Leaflet + OpenStreetMap
 *   my_map.link_map is set  → Google MyMaps iframe (existing trips)
 */
function MyMap({ my_map }) {
  const { link_map, gpx_path, link_book, link_camera, link_video, link_folder, link_gpx, map_center, map_zoom } = my_map;

  const links = [
    { href: link_book,   icon: IoBookOutline,     label: "Journal"   },
    { href: link_camera, icon: IoCameraOutline,   label: "Photos"    },
    { href: link_video,  icon: IoVideocamOutline, label: "Video"     },
    { href: link_folder, icon: IoMapOutline,      label: "Reference" },
    { href: link_gpx,    icon: IoAnalyticsOutline,     label: "Tracking"       },
  ];

  const activeLinks = links.filter(({ href }) => href);
  const useLeaflet = Boolean(gpx_path);

  return (
    <div className="grid px-8 py-4 mx-auto bg-gray-100 rounded-md xl:grid-cols-[12%_88%] xl:gap-x-2 xl:py-8 xl:w-3/5">
      <div className="w-full h-[500px] xl:order-2">
        {useLeaflet ? (
          <LeafletMap
            gpxPath={gpx_path}
            center={map_center}
            zoom={map_zoom}
          />
        ) : (
          <iframe
            src={link_map}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trip route map"
          />
        )}
      </div>

      <div className="flex flex-row justify-around py-3 text-blue-600 border-t border-gray-200 xl:order-1 xl:flex-col xl:justify-start xl:border-t-0 xl:pl-4 xl:pt-16">
        {activeLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs font-medium gap-y-1 hover:text-blue-800 xl:flex-row xl:gap-x-2 xl:text-sm xl:mb-4"
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyMap;
