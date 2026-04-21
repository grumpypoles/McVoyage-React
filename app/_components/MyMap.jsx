import Link from "next/link";

import {
  IoVideocamOutline,
  IoBookOutline,
  IoMapOutline,
  IoCameraOutline,
} from "react-icons/io5";

function MyMap({ my_map }) {
  const { link_map, link_book, link_camera, link_video, link_folder } = my_map;

  const links = [
    { href: link_book,   icon: IoBookOutline,    label: "Info"  },
    { href: link_camera, icon: IoCameraOutline,  label: "Photos"   },
    { href: link_video,  icon: IoVideocamOutline, label: "Video"   },
    { href: link_folder, icon: IoMapOutline,     label: "Ref" },
  ];

  return (
    <div className="grid px-8 py-4 mx-auto bg-gray-100 rounded-md gap-x-2 md:grid-cols-[10%_90%] md:py-8 md:w-3/5">
      <div className="w-full h-[500px] md:order-2 md:w-full">
        <iframe
          src={link_map}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-row py-2 text-blue-600 md:order-1 md:flex-col md:w-full md:pl-4 md:pt-16">
        {links.map(({ href, icon: Icon, label }) =>
          href ? (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-4 text-sm font-medium gap-x-2 hover:text-blue-800"
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span>{label}</span>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default MyMap;
