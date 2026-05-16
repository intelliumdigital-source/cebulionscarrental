"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Facebook, Send } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { bookingLocations, contact, fleetVehicles } from "@/lib/site-data";

type BookingForm = {
  fullName: string;
  contactNumber: string;
  emailAddress: string;
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  returnDate: string;
  vehicleType: string;
  rentalType: string;
  message: string;
};

const rentalTypes = [
  "Self-drive",
  "With Driver",
  "Airport Transfer",
  "City Tour",
  "Long-Term Rental",
] as const;

const vehicleOptions = fleetVehicles.map((vehicle) => vehicle.name);

const defaultForm: BookingForm = {
  fullName: "",
  contactNumber: "",
  emailAddress: "",
  pickupLocation: contact.location,
  returnLocation: bookingLocations[0],
  pickupDate: "",
  returnDate: "",
  vehicleType: vehicleOptions[0],
  rentalType: rentalTypes[0],
  message: "",
};

function BookingPageContent() {
  const searchParams = useSearchParams();
  const selectedVehicle = searchParams.get("vehicle");
  const [form, setForm] = useState<BookingForm>(defaultForm);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (selectedVehicle && vehicleOptions.includes(selectedVehicle)) {
      setForm((current) => ({
        ...current,
        vehicleType: selectedVehicle,
      }));
    }
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

    const requiredFields: Array<keyof BookingForm> = [
      "fullName",
      "contactNumber",
      "emailAddress",
      "pickupLocation",
      "returnLocation",
      "pickupDate",
      "returnDate",
      "vehicleType",
      "rentalType",
    ];

    const hasMissingField = requiredFields.some((field) => !form[field].trim());

    if (hasMissingField) {
      setStatusMessage("Please complete all required fields before submitting.");
      return;
    }

    const subject = "New Booking Request - Cebu Lions Car Rental";
    const body = [
      "New Booking Request",
      "",
      `Full Name: ${form.fullName}`,
      `Contact Number: ${form.contactNumber}`,
      `Email Address: ${form.emailAddress}`,
      `Pick-up Location: ${form.pickupLocation}`,
      `Return Location: ${form.returnLocation}`,
      `Pick-up Date: ${form.pickupDate}`,
      `Return Date: ${form.returnDate}`,
      `Vehicle Type: ${form.vehicleType}`,
      `Rental Type: ${form.rentalType}`,
      `Message: ${form.message || "N/A"}`,
      "",
      "Website Source:",
      "Cebu Lions Car Rental Website",
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatusMessage(
      "Your booking request has been prepared. Please send the email to Cebu Lions Car Rental.",
    );
  };

  return (
    <section className="section-shell py-10 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange">
            Cebu Lions Booking
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-[2.4rem] uppercase leading-none text-deepnavy sm:text-[3.2rem]">
            Book Your Cebu Ride
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Fill out the form below and our team will contact you to confirm
            availability.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Full Name
              </span>
              <input
                required
                type="text"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Contact Number
              </span>
              <input
                required
                type="tel"
                value={form.contactNumber}
                onChange={(event) => updateField("contactNumber", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Email Address
              </span>
              <input
                required
                type="email"
                value={form.emailAddress}
                onChange={(event) => updateField("emailAddress", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Vehicle Type
              </span>
              <select
                required
                value={form.vehicleType}
                onChange={(event) => updateField("vehicleType", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              >
                {vehicleOptions.map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Pick-up Location
              </span>
              <select
                required
                value={form.pickupLocation}
                onChange={(event) => updateField("pickupLocation", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              >
                {bookingLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Return Location
              </span>
              <select
                required
                value={form.returnLocation}
                onChange={(event) => updateField("returnLocation", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              >
                {bookingLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Pick-up Date
              </span>
              <input
                required
                type="date"
                value={form.pickupDate}
                onChange={(event) => updateField("pickupDate", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Return Date
              </span>
              <input
                required
                type="date"
                value={form.returnDate}
                onChange={(event) => updateField("returnDate", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Rental Type
              </span>
              <select
                required
                value={form.rentalType}
                onChange={(event) => updateField("rentalType", event.target.value)}
                className="h-12 w-full rounded-xl border border-bordergray px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              >
                {rentalTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-navy">
                Message / Special Request
              </span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="w-full rounded-xl border border-bordergray px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-royal/50"
              />
            </label>

            <div className="md:col-span-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a]"
                >
                  <Send className="h-4 w-4" />
                  Submit Booking Request
                </button>
                <Link
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-6 text-sm font-bold uppercase tracking-[0.14em] text-navy transition hover:border-royal hover:text-royal"
                >
                  <Facebook className="h-4 w-4" />
                  Message on Facebook
                </Link>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                After clicking submit, your email app will open with the
                booking details. Please send the email to complete your
                request.
              </p>
              {statusMessage ? (
                <p className="mt-3 text-sm font-semibold text-royal">
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-lightbg text-ink">
      <Navbar />
      <Suspense
        fallback={
          <section className="section-shell py-10 sm:py-12">
            <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7">
              <p className="text-sm text-slate-600">Loading booking form...</p>
            </div>
          </section>
        }
      >
        <BookingPageContent />
      </Suspense>
      <Footer />
    </main>
  );
}
