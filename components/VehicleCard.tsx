"use client";

import { ArrowRight } from "lucide-react";
import { ImageFallback } from "@/components/ui/image-fallback";
import type { FleetVehicle } from "@/lib/site-data";

type VehicleCardProps = {
  vehicle: FleetVehicle;
  onSelect: (vehicleName: string) => void;
};

export function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-2">
        <ImageFallback
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(min-width: 1280px) 16vw, (min-width: 768px) 33vw, 50vw"
          fallbackLabel={vehicle.name}
          wrapperClassName="relative h-full w-full"
          className="h-full w-full object-contain scale-105 transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col pt-3">
        <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] uppercase leading-tight text-deepnavy">
          {vehicle.name}
        </h3>
        <p className="mt-1.5 text-sm font-bold text-royal">
          From {vehicle.dailyRate}
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
          {vehicle.type} • {vehicle.capacity}
        </p>

        <button
          type="button"
          onClick={() => onSelect(vehicle.name)}
          className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-navy px-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-royal"
        >
          Book Now
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
