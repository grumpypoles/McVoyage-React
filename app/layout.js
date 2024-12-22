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
  description: "This section will required more thinking",
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
