import { whyChooseItems } from "@/lib/site-data";

export function WhyChooseSection() {
  return (
    <section
      className="scroll-mt-28 rounded-[28px] bg-deepnavy px-4 py-5 shadow-premium sm:scroll-mt-32 sm:px-5 sm:py-6"
    >
      <div className="mb-4 max-w-xs">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold sm:text-sm">
          Why Cebu Lions
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-[2rem] uppercase leading-none text-white sm:text-[2.2rem]">
          Why Choose Cebu Lions?
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {whyChooseItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[20px] border border-white/10 bg-white p-3.5 shadow-card"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-deepnavy">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-deepnavy">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
