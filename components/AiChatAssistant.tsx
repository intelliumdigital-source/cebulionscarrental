"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send, UserRound, X } from "lucide-react";
import { contact, fleetVehicles } from "@/lib/site-data";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const quickActions = [
  "View available cars",
  "Check rates",
  "Airport pickup",
  "Weekly/monthly promos",
  "FAQs",
  "Book now",
  "Contact Cebu Lions",
] as const;

const assistantIntro =
  "Hi! I’m Jen from Cebu Lions Car Rental. I can help you choose a car, check rates, learn about promos, and start your booking.";

function buildRatesReply() {
  const rateMap = new Map(fleetVehicles.map((vehicle) => [vehicle.name, vehicle.dailyRate]));

  return [
    "Our rates start at P1,500/day.",
    `Wigo and Mirage start at ${rateMap.get("Toyota Wigo") || "P1,500/day"}.`,
    `Vios ${rateMap.get("Toyota Vios") || "P1,800/day"}.`,
    `Avanza ${rateMap.get("Toyota Avanza") || "P2,400/day"}.`,
    `Xpander ${rateMap.get("Mitsubishi Xpander") || "P2,600/day"}.`,
    `Innova ${rateMap.get("Toyota Innova") || "P2,800/day"}.`,
    `Fortuner/Terra/Montero ${rateMap.get("Toyota Fortuner") || "P4,000/day"}.`,
    `Toyota Van ${rateMap.get("Toyota Van / Toyota Hiace") || "P4,500/day"}.`,
    `Nissan Van High Roof ${rateMap.get("Nissan Van High Roof") || "P5,000/day"}.`,
  ].join(" ");
}

function getPassengerRecommendation(message: string) {
  const lowerMessage = message.toLowerCase();
  const numberMatch = lowerMessage.match(/\b(\d{1,2})\b/);
  const passengers = numberMatch ? Number(numberMatch[1]) : null;

  if (passengers !== null) {
    if (passengers <= 5) {
      return {
        text: "For 1 to 5 passengers, I recommend Toyota Vios, Mitsubishi Mirage, or Toyota Wigo.",
        ctaHref: "/booking?vehicle=Toyota%20Vios",
        ctaLabel: "Book Toyota Vios",
      };
    }

    if (passengers <= 7) {
      return {
        text: "For 6 to 7 passengers, Toyota Innova, Mitsubishi Xpander, Toyota Avanza, Toyota Fortuner, Nissan Terra, and Mitsubishi Montero are great options.",
        ctaHref: "/booking?vehicle=Toyota%20Innova",
        ctaLabel: "Book Toyota Innova",
      };
    }

    return {
      text: "For 8 or more passengers, I recommend Toyota Van / Toyota Hiace or Nissan Van High Roof for better space and comfort.",
      ctaHref: "/booking?vehicle=Toyota%20Van%20%2F%20Toyota%20Hiace",
      ctaLabel: "Book Toyota Van",
    };
  }

  if (lowerMessage.includes("group")) {
    return {
      text: "For group travel, I recommend Toyota Van / Toyota Hiace or Nissan Van High Roof. They are ideal for larger families, tours, and barkada trips.",
      ctaHref: "/booking?vehicle=Toyota%20Van%20%2F%20Toyota%20Hiace",
      ctaLabel: "Book Toyota Van",
    };
  }

  return {
    text: "For family travel, I recommend Toyota Innova, Mitsubishi Xpander, Toyota Avanza, Toyota Fortuner, Nissan Terra, or Mitsubishi Montero depending on your luggage and passenger count.",
    ctaHref: "/booking?vehicle=Toyota%20Innova",
    ctaLabel: "Book Toyota Innova",
  };
}

function resolveAssistantReply(message: string): Omit<ChatMessage, "id" | "role"> {
  const lowerMessage = message.toLowerCase();
  const vehicleNames = fleetVehicles.map((vehicle) => vehicle.name).join(", ");

  if (
    lowerMessage.includes("cars") ||
    lowerMessage.includes("fleet") ||
    lowerMessage.includes("vehicle") ||
    lowerMessage.includes("available")
  ) {
    return {
      text: `We currently offer ${vehicleNames}.`,
    };
  }

  if (
    lowerMessage.includes("rate") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("pricing") ||
    lowerMessage.includes("cost")
  ) {
    return {
      text: buildRatesReply(),
    };
  }

  if (
    lowerMessage.includes("promo") ||
    lowerMessage.includes("discount") ||
    lowerMessage.includes("weekly") ||
    lowerMessage.includes("monthly")
  ) {
    return {
      text: "We offer 10% discount for weekly rentals and 15% discount for monthly rentals. Rates may vary depending on vehicle availability, rental duration, destination, and driver option.",
      ctaHref: "/booking",
      ctaLabel: "Book With Promo",
    };
  }

  if (
    lowerMessage.includes("faq") ||
    lowerMessage.includes("faqs") ||
    lowerMessage.includes("question") ||
    lowerMessage.includes("questions") ||
    lowerMessage.includes("requirements")
  ) {
    return {
      text: `You can check our FAQs for quick answers about vehicles, rates, pickup, discounts, and booking. You may also contact us at ${contact.phone}.`,
      ctaHref: "/#faqs",
      ctaLabel: "View FAQs",
    };
  }

  if (
    lowerMessage.includes("airport") ||
    lowerMessage.includes("pickup") ||
    lowerMessage.includes("location")
  ) {
    return {
      text: `Yes, airport pickup is available. Our location is ${contact.location}, near Mactan-Cebu International Airport.`,
    };
  }

  if (
    lowerMessage.includes("family") ||
    lowerMessage.includes("group") ||
    lowerMessage.includes("passenger")
  ) {
    return getPassengerRecommendation(message);
  }

  if (
    lowerMessage.includes("book") ||
    lowerMessage.includes("booking") ||
    lowerMessage.includes("reserve")
  ) {
    return {
      text: "You can book by filling out our booking form. I'll take you there now.",
      ctaHref: "/booking",
      ctaLabel: "Go to Booking Form",
    };
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("facebook")
  ) {
    return {
      text: `You can contact Cebu Lions Car Rental at ${contact.phone} or email ${contact.email}. You can also message us on Facebook: ${contact.facebookUrl}`,
    };
  }

  return {
    text: `I can help with available cars, rates, promos, airport pickup, location, and booking. You may also call ${contact.phone} for direct assistance.`,
  };
}

export function AiChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: assistantIntro,
    },
  ]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  const sendMessage = (message: string) => {
    const trimmed = message.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: nextId,
      role: "user",
      text: trimmed,
    };

    const assistantReply = resolveAssistantReply(trimmed);
    const replyMessage: ChatMessage = {
      id: nextId + 1,
      role: "assistant",
      text: assistantReply.text,
      ctaHref: assistantReply.ctaHref,
      ctaLabel: assistantReply.ctaLabel,
    };

    setMessages((current) => [...current, userMessage, replyMessage]);
    setInput("");
    setIsOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5">
        {isOpen ? (
          <div className="mb-3 w-[calc(100vw-1.5rem)] max-w-[380px] overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/20 sm:w-[380px]">
            <div className="flex items-start justify-between gap-3 bg-deepnavy px-4 py-4 text-white">
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-display)] text-[1.5rem] uppercase leading-none">
                  Jen — Cebu Lions CSR
                </p>
                <p className="mt-1 text-sm text-white/78">
                  Ask about cars, rates, promos, airport pickup, and booking.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close Jen chat"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto bg-white px-4 py-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "assistant" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "assistant"
                          ? "bg-lightbg text-slate-700"
                          : "bg-deepnavy text-white"
                      }`}
                    >
                      <p>{message.text}</p>
                      {message.ctaHref && message.ctaLabel ? (
                        <Link
                          href={message.ctaHref}
                          className="mt-3 inline-flex items-center rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-deepnavy transition hover:bg-[#ffd15a]"
                        >
                          {message.ctaLabel}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => sendMessage(action)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-navy transition hover:border-gold hover:text-deepnavy"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-200 bg-white px-4 py-4"
            >
              <label htmlFor="ai-assistant-message" className="sr-only">
                Ask Jen from Cebu Lions
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="ai-assistant-message"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about rates, cars, pickup, or booking"
                  className="h-11 min-w-0 flex-1 rounded-full border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-royal/50"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-deepnavy transition hover:bg-[#ffd15a]"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Open Jen chat"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-14 items-center gap-2 rounded-full bg-deepnavy px-4 text-white shadow-xl shadow-slate-900/25 transition hover:bg-navy sm:px-5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-deepnavy">
            <UserRound className="h-5 w-5" />
          </span>
          <span className="hidden text-sm font-extrabold uppercase tracking-[0.14em] sm:inline">
            Ask Jen
          </span>
          <span className="sm:hidden">
            <MessageCircle className="h-4 w-4" />
          </span>
        </button>
      </div>
    </>
  );
}
