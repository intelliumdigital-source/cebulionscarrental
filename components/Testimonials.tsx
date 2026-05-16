 "use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      className="scroll-mt-28 rounded-[28px] border border-bordergray bg-white p-5 shadow-card sm:scroll-mt-32 sm:p-6"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm">
            Guest Review
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2rem] uppercase leading-none text-deepnavy sm:text-[2.2rem]">
            What Our Clients Say
          </h2>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={showPrevious}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bordergray text-slate-500 transition hover:border-gold hover:text-deepnavy"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={showNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bordergray text-slate-500 transition hover:border-gold hover:text-deepnavy"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-[22px] bg-lightbg p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F5B400_0%,#F97316_100%)] text-base font-black text-white">
              {activeReview.initials}
            </div>
            <div>
              <p className="text-base font-bold text-deepnavy">{activeReview.name}</p>
              <p className="text-sm text-slate-500">{activeReview.location}</p>
            </div>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F5B400_0%,#F97316_100%)] text-base font-black text-white">
            {activeIndex + 1}
          </div>
        </div>

        <div className="mb-3 mt-4 flex items-center gap-1 text-gold">
          {Array.from({ length: activeReview.rating }).map((_, index) => (
            <Star key={index} className="h-4.5 w-4.5 fill-current" />
          ))}
        </div>
        <p className="text-sm leading-6 text-slate-700 sm:text-[15px]">
          &ldquo;{activeReview.quote}&rdquo;
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {testimonials.map((review, index) => (
              <button
                key={review.name}
                type="button"
                aria-label={`Show testimonial from ${review.name}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex ? "w-6 bg-gold" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={showPrevious}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-bordergray text-slate-500 transition hover:border-gold hover:text-deepnavy"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={showNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-bordergray text-slate-500 transition hover:border-gold hover:text-deepnavy"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
