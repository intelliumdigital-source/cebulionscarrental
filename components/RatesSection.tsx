import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contact, fleetVehicles, rentalPlans } from "@/lib/site-data";

export function RatesSection() {
  return (
    <section
      id="rates"
      className="section-shell scroll-mt-28 py-8 sm:scroll-mt-32 sm:py-10"
    >
      <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-card sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.3fr]">
          <div className="rounded-[24px] bg-lightbg p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm">
              Daily • Weekly • Monthly
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-none text-deepnavy sm:text-[2.8rem]">
              Cebu Rental Rates
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Simple and flexible rental pricing for Cebu city drives, airport
              pickups, family trips, and long-term bookings.
            </p>

            <div className="mt-5 grid gap-2.5">
              {rentalPlans.map((plan) => (
                <div
                  key={plan.label}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="text-sm font-semibold text-deepnavy">
                    {plan.label}
                  </span>
                  <span className="text-sm font-bold text-gold">{plan.note}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Rates may vary depending on rental duration, destination, driver
              option, and vehicle availability.
            </p>

            <Link
              href="/booking"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a] sm:text-sm"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200">
            <div className="hidden bg-[#031B3F] text-white md:grid md:grid-cols-[1.4fr_0.9fr]">
              <span className="px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Vehicle
              </span>
              <span className="px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Daily Rate
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {fleetVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="grid gap-1 px-5 py-4 md:grid-cols-[1.4fr_0.9fr] md:items-center"
                >
                  <div>
                    <p className="font-semibold text-deepnavy">{vehicle.name}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      {vehicle.type} • {vehicle.capacity}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-royal">
                    From {vehicle.dailyRate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">{contact.startingPrice}</p>
      </div>
    </section>
  );
}
