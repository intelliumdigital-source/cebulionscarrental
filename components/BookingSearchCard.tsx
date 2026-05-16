"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CalendarRange,
  CarFront,
  MapPin,
  Search,
} from "lucide-react";
import { bookingLocations, contact, vehicleOptions } from "@/lib/site-data";

type BookingSearchCardProps = {
  selectedVehicle: string;
  onVehicleChange: (vehicle: string) => void;
};

type BookingForm = {
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  returnDate: string;
  vehicleType: string;
};

const defaultForm = (vehicle: string): BookingForm => ({
  pickupLocation: bookingLocations[0],
  returnLocation: bookingLocations[1],
  pickupDate: "",
  returnDate: "",
  vehicleType: vehicle,
});

export function BookingSearchCard({
  selectedVehicle,
  onVehicleChange,
}: BookingSearchCardProps) {
  const [form, setForm] = useState<BookingForm>(() => defaultForm(selectedVehicle));
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    setForm((current) => ({
      ...current,
      vehicleType: selectedVehicle,
    }));
  }, [selectedVehicle]);

  const updateField = <K extends keyof BookingForm,>(
    field: K,
    value: BookingForm[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Preferred vehicle: ${form.vehicleType || "Any premium vehicle"}`,
      `Pick-up: ${form.pickupLocation}`,
      `Return: ${form.returnLocation}`,
      `Pick-up date: ${form.pickupDate || "To be confirmed"}`,
      `Return date: ${form.returnDate || "To be confirmed"}`,
    ].join(" | ");

    setConfirmationMessage(message);

    requestAnimationFrame(() => {
      document.getElementById("booking-confirmation")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  };

  return (
    <section
      id="booking"
      className="section-shell relative z-30 mt-6 scroll-mt-28 mb-10 pb-6 sm:scroll-mt-32 sm:mt-8 sm:pb-8 md:mb-12"
    >
      <div className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/10 sm:p-5">
        <form
          className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.45fr_1.45fr_1fr_1fr_1.2fr_auto]"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
              Pick-up Location
            </span>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-bordergray bg-white px-3 transition hover:border-royal/40 focus-within:border-royal/50">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <select
                value={form.pickupLocation}
                onChange={(event) => updateField("pickupLocation", event.target.value)}
                className="min-w-0 w-full appearance-none bg-transparent pr-4 text-sm font-medium text-slate-700 outline-none"
              >
                {bookingLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
              Return Location
            </span>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-bordergray bg-white px-3 transition hover:border-royal/40 focus-within:border-royal/50">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <select
                value={form.returnLocation}
                onChange={(event) => updateField("returnLocation", event.target.value)}
                className="min-w-0 w-full appearance-none bg-transparent pr-4 text-sm font-medium text-slate-700 outline-none"
              >
                {bookingLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
              Pick-up Date
            </span>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-bordergray bg-white px-3 transition hover:border-royal/40 focus-within:border-royal/50">
              <CalendarDays className="h-4 w-4 shrink-0 text-gold" />
              <input
                type="date"
                value={form.pickupDate}
                onChange={(event) => updateField("pickupDate", event.target.value)}
                className="min-w-0 w-full bg-transparent text-sm font-medium text-slate-700 outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
              Return Date
            </span>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-bordergray bg-white px-3 transition hover:border-royal/40 focus-within:border-royal/50">
              <CalendarRange className="h-4 w-4 shrink-0 text-gold" />
              <input
                type="date"
                value={form.returnDate}
                onChange={(event) => updateField("returnDate", event.target.value)}
                className="min-w-0 w-full bg-transparent text-sm font-medium text-slate-700 outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
              Vehicle Type
            </span>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-bordergray bg-white px-3 transition hover:border-royal/40 focus-within:border-royal/50">
              <CarFront className="h-4 w-4 shrink-0 text-gold" />
              <select
                value={form.vehicleType}
                onChange={(event) => {
                  updateField("vehicleType", event.target.value);
                  onVehicleChange(event.target.value);
                }}
                className="min-w-0 w-full appearance-none bg-transparent pr-4 text-sm font-medium text-slate-700 outline-none"
              >
                {vehicleOptions.map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <div className="flex items-end">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 text-xs font-extrabold uppercase tracking-[0.16em] text-deepnavy transition hover:bg-[#ffd15a] xl:min-w-[150px]"
            >
              <Search className="h-4 w-4" />
              Find My Car
            </button>
          </div>
        </form>

        {confirmationMessage ? (
          <div
            id="booking-confirmation"
            className="mt-3 flex flex-col gap-3 rounded-xl border border-bordergray bg-lightbg px-4 py-3 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between"
          >
            <p className="min-w-0 flex-1 leading-6">{confirmationMessage}</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-navy/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-navy"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
