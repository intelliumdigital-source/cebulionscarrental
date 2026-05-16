import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFallback } from "@/components/ui/image-fallback";
import { contact, rentalPlans } from "@/lib/site-data";

export function ExploreCebuBanner() {
  return (
    <section
      className="relative min-h-[320px] overflow-hidden scroll-mt-28 rounded-[28px] shadow-premium sm:scroll-mt-32 xl:min-h-full"
    >
      <ImageFallback
        src="/images/explore-cebu-banner.png"
        alt="Explore Cebu tropical banner"
        fill
        sizes="(min-width: 1280px) 40vw, 100vw"
        fallbackLabel="Explore Cebu"
        wrapperClassName="absolute inset-0"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#031B3F]/95 via-[#031B3F]/80 to-[#031B3F]/45" />

      <div className="relative z-10 flex h-full items-end p-5 sm:p-6">
        <div className="max-w-md">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold sm:text-sm">
            Rental Plans
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-[0.92] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[2.6rem]">
            Cebu Rates <span className="text-orange drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">Made Simple</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
            {contact.startingPrice}. Flexible rental plans for daily drives,
            weekly bookings, and long-stay Cebu trips.
          </p>
          <div className="mt-4 grid gap-2">
            {rentalPlans.map((plan) => (
              <div
                key={plan.label}
                className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-sm"
              >
                <span className="text-sm font-semibold text-white">{plan.label}</span>
                <span className="text-sm font-bold text-gold">{plan.note}</span>
              </div>
            ))}
          </div>
          <Link
            href="/booking"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a] sm:text-sm"
          >
            Book Your Rate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
