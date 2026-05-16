"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { BookingSearchCard } from "@/components/BookingSearchCard";
import { ExploreCebuBanner } from "@/components/ExploreCebuBanner";
import { FaqsSection } from "@/components/FaqsSection";
import { FleetSection } from "@/components/FleetSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PromosSection } from "@/components/PromosSection";
import { RatesSection } from "@/components/RatesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export default function HomePage() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState("Toyota Hiace");

  const handleVehicleSelect = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    router.push(`/booking?vehicle=${encodeURIComponent(vehicleName)}`);
  };

  return (
    <main className="min-h-screen bg-lightbg text-ink">
      <Navbar />
      <HeroSection />
      <BookingSearchCard
        selectedVehicle={selectedVehicle}
        onVehicleChange={setSelectedVehicle}
      />
      <FleetSection onSelectVehicle={handleVehicleSelect} />
      <PromosSection />
      <RatesSection />
      <FaqsSection />
      <ServicesSection />
      <section className="section-shell py-8 sm:py-10">
        <div className="grid gap-5 xl:grid-cols-[1.1fr_1.2fr_1fr]">
          <WhyChooseSection />
          <ExploreCebuBanner />
          <Testimonials />
        </div>
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}
