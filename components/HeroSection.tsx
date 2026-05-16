import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFallback } from "@/components/ui/image-fallback";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden scroll-mt-28 bg-deepnavy sm:scroll-mt-32"
    >
      <ImageFallback
        src="/images/hero-cebu-lions-premium.png"
        alt="Premium Cebu Lions fleet in a tropical Cebu setting"
        fill
        priority
        sizes="100vw"
        fallbackLabel="Hero image"
        wrapperClassName="absolute inset-0 z-0"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#031B3F]/65 via-[#031B3F]/35 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(11,79,175,0.14),transparent_26%)]" />

      <div className="section-shell relative z-20 flex h-[500px] items-center py-8 pb-16 md:h-[540px] md:py-0 md:pb-20 lg:h-[560px]">
        <div className="max-w-[760px]">
          <p className="hero-premium-script text-shadow-hero drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] text-[1.9rem] leading-none text-white sm:text-[2.5rem] lg:text-[3rem]">
            Premium
          </p>
          <div className="mt-1 flex flex-wrap items-end gap-x-1.5 gap-y-0 sm:gap-x-2.5">
            <h1 className="text-shadow-hero drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] font-[family-name:var(--font-display)] text-[4rem] uppercase leading-[0.88] tracking-[-0.035em] text-white sm:text-[5.2rem] md:text-[5.9rem] lg:text-[6.5rem]">
              CAR RENTAL
            </h1>
            <div className="mb-0.5 flex items-end gap-1.5 sm:mb-1 sm:gap-2">
              <span className="text-shadow-hero drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] text-[2rem] font-semibold italic leading-none text-white/95 sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.7rem]">
                in
              </span>
              <span className="text-gradient-cebu text-shadow-hero hero-premium-script drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] text-[3.9rem] leading-none sm:text-[5.3rem] md:text-[5.9rem] lg:text-[6.1rem]">
                Cebu
              </span>
            </div>
          </div>

          <p className="mt-3 max-w-xl text-xl font-semibold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[1.45rem]">
            Drive. Explore. Enjoy Every Moment.
          </p>
          <p className="mt-1 max-w-xl text-sm leading-snug text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-base">
            Comfortable rides. Memorable trips. Every time.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gold px-6 text-sm font-semibold uppercase tracking-[0.08em] text-deepnavy transition duration-300 hover:bg-[#e6aa00] md:h-12 md:px-7 md:text-base"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#fleet"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-navy px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-royal md:h-12 md:px-7 md:text-base"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
