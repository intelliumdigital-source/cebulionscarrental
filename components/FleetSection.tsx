"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fleetVehicles } from "@/lib/site-data";
import { VehicleCard } from "@/components/VehicleCard";

type FleetSectionProps = {
  onSelectVehicle: (vehicleName: string) => void;
};

export function FleetSection({ onSelectVehicle }: FleetSectionProps) {
  return (
    <section
      id="fleet"
      className="section-shell scroll-mt-28 pb-8 pt-8 sm:scroll-mt-32 sm:pb-10 sm:pt-10"
    >
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-6 bg-gold" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase leading-none tracking-[-0.03em] text-deepnavy sm:text-4xl md:text-5xl">
              OUR PREMIUM FLEET
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Well-maintained vehicles for a comfortable and safe journey.
          </p>
        </div>

        <Link
          href="#fleet-catalog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-royal transition hover:text-navy sm:text-sm"
        >
          View All Fleet
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div
        id="fleet-catalog"
        className="grid items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      >
        {fleetVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={onSelectVehicle} />
        ))}
      </div>
    </section>
  );
}
