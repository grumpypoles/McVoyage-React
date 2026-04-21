'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/greatwalks", label: "Great Walks" },
  { href: "/overseas",   label: "Overseas"    },
  { href: "/north",      label: "North Island" },
  { href: "/south",      label: "South Island" },
];

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div>
      <nav className="z-10 text-primary-50">
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 cursor-pointer HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close menu"
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
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className={`my-8 uppercase border-b border-gray-400 ${
                    isActive(href) ? "text-green-500 font-bold" : ""
                  }`}
                >
                  <Link href={href} onClick={() => setIsNavOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className={isActive(href) ? "text-green-500 font-bold" : ""}
            >
              <Link href={href}>{label}</Link>
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
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
