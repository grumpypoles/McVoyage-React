import Link from "next/link";
import {
  IoCalendarOutline, IoHourglassOutline,
  IoFootstepsOutline, IoVideocamOutline,
  IoBookOutline,
  IoMapOutline,
  IoCameraOutline,
  IoNavigateOutline
} from "react-icons/io5";

const iconMap = {
  VideoCameraIcon: IoVideocamOutline,
  CalendarDaysIcon: IoCalendarOutline,
  ClockIcon: IoHourglassOutline,
  SwatchIcon: IoNavigateOutline,
  ForwardIcon: IoFootstepsOutline,
  BookOpenIcon: IoBookOutline,
  CameraIcon: IoCameraOutline,
  MapIcon: IoMapOutline
  
};
export default function VideoLink({video_link, video_icon, children}) {
  const IconComponent = iconMap[video_icon] || IoVideocamOutline; // Default to VideoCameraIcon if no match


  return (
    <Link
      href={video_link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mb-4 text-2xl font-semibold text-primary-800"
    >
      <span className="flex flex-row items-center w-full text-sm font-medium gap-x-2">
     
      <IconComponent className="w-5 h-5 mr-2 text-blue-600" />{children}
      </span>
    </Link>
  );
}
 
