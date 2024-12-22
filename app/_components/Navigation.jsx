'use client'
import { useState } from "react";

import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/greatwalks">Great Walks</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <Link href="/overseas">Overseas</Link>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <Link href="/north">North Island</Link>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <Link href="/south">South Island</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          <li>
            <Link href="/greatwalks">Great Walks</Link>
          </li>
          <li>
            <Link href="/overseas">Overseas</Link>
          </li>
          <li>
            <Link href="/north">North Island</Link>
          </li>
          <li>
            <Link href="/south">South Island</Link>
          </li>
        </ul>
        {/* <ul className="flex items-center gap-16">
          <li>
            <Link href="/overseas" className="transition-colors hover:bg-stone-600">
             Overseas
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:bg-stone-600">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="transition-colors hover:bg-stone-600"
            >
              User area
            </Link>
          </li>
        </ul> */}
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
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    );
  }
  