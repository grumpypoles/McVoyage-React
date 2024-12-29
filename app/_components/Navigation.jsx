'use client';
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const isActive = (path) => pathname === path;

  return (
    <div>
      <nav className="z-10 text-primary-50">
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {["/greatwalks", "/overseas", "/north", "/south"].map((path) => (
                <li
                  key={path}
                  className={`my-8 uppercase border-b border-gray-400 ${
                    isActive(path) ? "text-green-500 font-bold" : ""
                  }`}
                >
                  <Link href={path}>{path.replace("/", "").toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          {["/greatwalks", "/overseas", "/north", "/south"].map((path) => (
            <li
              key={path}
              className={isActive(path) ? "text-green-500 font-bold" : ""}
            >
              <Link href={path}>{path.replace("/", "").toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.7); 
          z-index: 999; /* Increase z-index */
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
