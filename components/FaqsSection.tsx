"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What vehicles are available?",
    answer:
      "We offer Toyota Van / Toyota Hiace, Toyota Fortuner, Toyota Innova, Toyota Vios, Mitsubishi Xpander, Nissan Van High Roof, Nissan Terra, Mitsubishi Montero, Toyota Avanza, Mitsubishi Mirage, and Toyota Wigo.",
  },
  {
    question: "How much is the daily rental rate?",
    answer:
      "Rates start at ₱1,500/day. Pricing depends on the selected vehicle, rental duration, destination, driver option, and availability.",
  },
  {
    question: "Do you offer weekly or monthly discounts?",
    answer:
      "Yes. Weekly rentals can get 10% discount, while monthly rentals can get 15% discount.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes. Airport pickup is available. Our location is Buaya, Lapu-Lapu City, General Aviation Road, near Mactan-Cebu International Airport.",
  },
  {
    question: "Can I book a car with driver?",
    answer:
      "Yes. We can accommodate self-drive, with driver, airport transfer, city tour, and long-term rental requests depending on availability.",
  },
  {
    question: "How do I book?",
    answer:
      "Click any BOOK NOW button, fill out the booking form, and send your request. Our team will contact you to confirm availability.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at Buaya, Lapu-Lapu City, General Aviation Road.",
  },
  {
    question: "How can I contact Cebu Lions Car Rental?",
    answer:
      "You can call 0956 745 1523, email cebulionscarrental@gmail.com, or message us on Facebook at https://www.facebook.com/CebuLionsCarRental.",
  },
] as const;

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faqs"
      className="section-shell scroll-mt-28 py-8 sm:scroll-mt-32 sm:py-10"
    >
      <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-card sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-8 bg-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm">
                Common Questions
              </p>
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[2.2rem] uppercase leading-none text-deepnavy sm:text-[2.8rem]">
              Cebu Lions FAQs
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Quick answers about bookings, rates, pickup, and rental options.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Need help choosing the right vehicle or rental plan? Jen and our Cebu
              Lions team can guide you to the best option for your trip.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-[22px] border border-slate-200 bg-lightbg shadow-sm"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="font-semibold text-deepnavy">
                      {item.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <ChevronDown
                        className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen ? (
                    <div
                      id={`faq-panel-${index}`}
                      className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-5"
                    >
                      {item.answer}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
