'use client';
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  // Portal requires the DOM to be available
  useEffect(() => { setMounted(true); }, []);

  // Close menu on route change
  useEffect(() => { setIsNavOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isNavOpen]);

  const menuOverlay = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999]"
        style={{ background: "rgba(0, 0, 0, 0.85)" }}
        onClick={() => setIsNavOpen(false)}
      />
      {/* Content — above backdrop, pointer-events-none so gaps fall through to backdrop */}
      <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center pointer-events-none">
        <button
          className="absolute text-gray-300 bg-transparent border-none cursor-pointer pointer-events-auto top-6 right-6 hover:text-white"
          onClick={() => setIsNavOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 pointer-events-auto">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsNavOpen(false)}
                className={`text-2xl uppercase tracking-widest border-b border-gray-500 pb-1
                  ${isActive(href) ? "text-green-400 font-bold" : "text-white"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <nav className="z-10 text-primary-50">

        {/* Mobile menu trigger */}
        <section className="flex lg:hidden">
          <button
            className="p-0 space-y-2 bg-transparent border-none cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={isNavOpen}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </button>

          {/* Portal renders the overlay directly on document.body */}
          {mounted && isNavOpen && createPortal(menuOverlay, document.body)}
        </section>

        {/* Desktop menu */}
        <ul className="hidden space-x-8 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href} className={isActive(href) ? "text-green-500 font-bold" : ""}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


