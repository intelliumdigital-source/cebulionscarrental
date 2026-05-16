import Link from "next/link";
import { CalendarDays, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { ImageFallback } from "@/components/ui/image-fallback";
import { contact, quickLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-8 scroll-mt-28 bg-deepnavy text-white sm:scroll-mt-32"
    >
      <div className="section-shell py-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.75fr_0.8fr_0.9fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white">
                <ImageFallback
                  src="/images/cebu-lions-logo.png"
                  alt="Cebu Lions Car Rental logo"
                  fill
                  sizes="48px"
                  fallbackLabel="Logo"
                  wrapperClassName="relative h-full w-full"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-[1.6rem] uppercase leading-none">
                  Cebu Lions
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                  Car Rental
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/78">
              Your trusted partner for premium car rental services in Cebu.
              Drive. Explore. Enjoy.
            </p>

            <div className="mt-4 flex gap-2.5">
              <a
                href={contact.facebookUrl}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition hover:bg-white/10"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition hover:bg-white/10"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition hover:bg-white/10"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] uppercase text-white">
              Quick Links
            </h3>
            <div className="mt-3 space-y-2.5 text-sm text-white/80">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block transition hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] uppercase text-white">
              Contact Us
            </h3>
            <div className="mt-3 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                {contact.location}
              </div>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {contact.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] uppercase text-white">
              Like us on Facebook
            </h3>
            <div className="mt-3 text-sm text-white/80">
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition hover:text-gold"
              >
                <Facebook className="h-5 w-5 text-gold" />
                {contact.facebook}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] uppercase text-white">
              Ready to Book?
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Book your ride today and experience premium service.
            </p>
            <Link
              href="/booking"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a] sm:text-sm"
            >
              <CalendarDays className="h-4 w-4" />
              Book Now
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between sm:text-sm">
          <p>© 2025 Cebu Lions Car Rental. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="transition hover:text-gold">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
