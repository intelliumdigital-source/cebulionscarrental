import {
  CalendarRange,
  CarFront,
  Headset,
  MapPinned,
  Plane,
  Route,
} from "lucide-react";

const services = [
  {
    title: "Self-Drive Rental",
    description: "Flexible vehicle options for personal travel and business use.",
    icon: CarFront,
  },
  {
    title: "With Driver Option",
    description: "Comfortable rides with a dependable driver when needed.",
    icon: Headset,
  },
  {
    title: "Airport Pickup",
    description: "Smooth transfers to and from Mactan-Cebu International Airport.",
    icon: Plane,
  },
  {
    title: "City Trips",
    description: "Reliable transportation for Cebu City meetings, errands, and tours.",
    icon: MapPinned,
  },
  {
    title: "Family Travel",
    description: "MPVs, SUVs, and vans sized for group comfort and luggage space.",
    icon: Route,
  },
  {
    title: "Long-Term Rental",
    description: "Daily, weekly, and monthly options for extended Cebu stays.",
    icon: CalendarRange,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell scroll-mt-28 py-8 sm:scroll-mt-32 sm:py-10"
    >
      <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-card sm:p-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm">
            Cebu Rental Services
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-none text-deepnavy sm:text-[2.8rem]">
            Services Designed Around Your Trip
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Practical rental options for airport arrivals, city movement, family
            travel, and longer stays in Cebu.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-[22px] border border-slate-200 bg-lightbg p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-deepnavy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.35rem] uppercase leading-none text-deepnavy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
