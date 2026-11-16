import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logos/McWoyage_white_no_background.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* Static import supplies the real width/height; CSS sets the display size.
          w-[50px] + h-auto keeps the aspect ratio, shrink-0 stops the flex row squeezing it. */}
      <Image
        src={logo}
        alt="McWoyage logo"
        className="ml-10 w-[50px] h-auto shrink-0"
      />
    </Link>
  );
}

export default Logo;
