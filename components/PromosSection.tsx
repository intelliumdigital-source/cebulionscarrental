import Link from "next/link";
import { ArrowRight, BadgePercent, Plane, Users, WalletCards } from "lucide-react";

const promos = [
  {
    title: "Weekly Rental Saver",
    description: "Get 10% off for weekly bookings.",
    detail: "Best for business trips, family stays, and Cebu vacations.",
    icon: BadgePercent,
  },
  {
    title: "Monthly Rental Deal",
    description: "Get 15% off for long-term rentals.",
    detail: "Ideal for extended stays, project work, and regular Cebu transportation.",
    icon: WalletCards,
  },
  {
    title: "Airport Pickup Ready",
    description: "Hassle-free pickup from Mactan-Cebu International Airport.",
    detail: "Perfect for tourists, balikbayans, and business travelers.",
    icon: Plane,
  },
  {
    title: "Group Travel Van Option",
    description: "Spacious van options for family trips, tours, and barkada travel.",
    detail: "Available for Toyota Van and Nissan Van High Roof.",
    icon: Users,
  },
];

export function PromosSection() {
  return (
    <section
      id="promos"
      className="section-shell scroll-mt-28 py-8 sm:scroll-mt-32 sm:py-10"
    >
      <div className="rounded-[28px] bg-deepnavy px-5 py-6 shadow-premium sm:px-6 sm:py-7">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold sm:text-sm">
            Limited Offers
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-none text-white sm:text-[2.8rem]">
            Cebu Lions Promos
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
            Save more when you book longer trips, group rides, or airport pickup
            services.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {promos.map((promo) => {
            const Icon = promo.icon;

            return (
              <article
                key={promo.title}
                className="rounded-[22px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-deepnavy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.35rem] uppercase leading-none text-white">
                  {promo.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-gold">
                  {promo.description}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {promo.detail}
                </p>
              </article>
            );
          })}
        </div>

        <Link
          href="/booking"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a] sm:text-sm"
        >
          Claim Promo / Book Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
