'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle body scroll when menu is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";
  }

  return (
    <div>
      <nav className="relative z-50 text-primary-50">
        {/* Mobile Menu */}
        <section className="flex lg:hidden">
          {/* Hamburger Icon */}
          <div
            className="z-50 space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform ${
              isNavOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Icon */}
            <div
              className="absolute z-50 cursor-pointer top-4 right-4"
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

            {/* Menu Items */}
            <ul className="flex flex-col items-center space-y-8">
              <li className="uppercase">
                <Link href="/greatwalks" onClick={() => setIsNavOpen(false)}>
                  Great Walks
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/overseas" onClick={() => setIsNavOpen(false)}>
                  Overseas
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/north" onClick={() => setIsNavOpen(false)}>
                  North Island
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/south" onClick={() => setIsNavOpen(false)}>
                  South Island
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 lg:flex">
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
      </nav>
    </div>
  );
}
