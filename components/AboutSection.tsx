import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

const aboutHighlights = [
  "Cebu-Based Service",
  "Flexible Rentals",
  "Airport Pickup Available",
  "Cars, SUVs, MPVs & Vans",
  "Friendly Local Support",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-28 py-8 sm:scroll-mt-32 sm:py-10"
    >
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-card sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm">
            Drive • Explore • Enjoy
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-none text-deepnavy sm:text-[2.8rem]">
            About Cebu Lions Car Rental
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Cebu Lions Car Rental is a Cebu-based car rental service built for
              travelers, families, business clients, and local customers who need
              reliable transportation around Cebu.
            </p>
            <p>
              We offer practical and premium vehicle options including compact cars,
              sedans, MPVs, SUVs, and vans for daily rentals, weekly bookings,
              monthly rentals, airport pickups, city drives, and group trips.
            </p>
            <p>
              Our goal is simple: provide clean vehicles, smooth booking, flexible
              rental options, and friendly Cebu-based support so every ride feels
              safe, convenient, and comfortable.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] bg-deepnavy p-5 text-white shadow-premium sm:p-6">
          <h3 className="font-[family-name:var(--font-display)] text-[2rem] uppercase leading-none">
            Cebu Travel Support
          </h3>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {aboutHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/88"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm text-white/84">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>{contact.location}</span>
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
            <a
              href={contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <Facebook className="h-4 w-4 text-gold" />
              {contact.facebookUrl}
            </a>
          </div>

          <Link
            href="/booking"
            className="mt-6 inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a] sm:text-sm"
          >
            Book Your Cebu Ride
          </Link>
        </div>
      </div>
    </section>
  );
}
