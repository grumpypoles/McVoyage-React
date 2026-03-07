import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s: McWoyage",
    default: "Welcome: McWoyage",
  },
  description: "McWoyage is a dedicated travel and outdoor adventure website showcasing New Zealand’s Great Walks and diverse international walking trips. The platform documents the experiences of Fiona Mckinney and Karol Wojasz, exploring the North Island’s landscapes and the South Island’s tramping tracks, with a particular focus on the Fiordland and Southland regions. Beyond New Zealand, the site features European adventures in countries such as Scotland, Poland, and Italy, combining a passion for the outdoors, birds, and photography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased min-h-screen bg-gray-50  text-primary-100 flex flex-col relative`}
      >
        <Header />
        <div className="flex-1">
          {/* <main className="mx-auto max-w-7xl">{children}</main> */}
          <main className="w-full mx-auto">{children}</main>
        </div>
        <Footer />
       
      </body>
    </html>
  );
}
