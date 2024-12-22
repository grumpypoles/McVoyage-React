import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logos/McWoyage_white_no_background.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        quality={100}
        height="50"
        width="50"
        alt="McActive logo"
        className="ml-10"
      />
      {/* <span className="text-xl font-semibold transition-colors text-primary-200 hover:bg-stone-600" >McWoyage</span> */}
    </Link>
  );
}

export default Logo;
