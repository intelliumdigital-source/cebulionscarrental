"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageFallback } from "@/components/ui/image-fallback";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActiveLink = (href: string) => {
    if (pathname !== "/") {
      return false;
    }

    if (href === "/") {
      return activeHash === "" || activeHash === "#home";
    }

    return activeHash === href.replace("/", "");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deepnavy/95 backdrop-blur">
      <div className="section-shell">
        <div className="flex min-h-[74px] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white shadow-lg">
              <ImageFallback
                src="/images/cebu-lions-logo.png"
                alt="Cebu Lions Car Rental logo"
                fill
                sizes="40px"
                fallbackLabel="Logo"
                wrapperClassName="relative h-full w-full"
                className="object-contain p-1"
              />
            </div>
            <div className="hidden flex-col justify-center sm:flex">
              <p className="font-[family-name:var(--font-display)] text-[1.45rem] uppercase leading-none tracking-[0.05em] text-white">
                Cebu Lions
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Car Rental
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold uppercase tracking-[0.14em] transition ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute inset-x-0 -bottom-3 h-0.5 rounded-full bg-gold" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/booking"
              className="hidden items-center gap-2 rounded-full bg-gold px-4.5 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-deepnavy transition hover:bg-[#ffd15a] sm:inline-flex"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Book Now
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 pb-5 pt-4 lg:hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 transition hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/booking"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-deepnavy"
                onClick={() => setIsOpen(false)}
              >
                <CalendarDays className="h-4 w-4" />
                Book Now
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
