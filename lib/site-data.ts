import {
  CalendarDays,
  CalendarRange,
  CarFront,
  Headset,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Promos", href: "/#promos" },
  { label: "Rates", href: "/#rates" },
  { label: "FAQs", href: "/#faqs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const quickLinks = navLinks;

export type FleetVehicle = {
  id: string;
  name: string;
  bookingLabel: string;
  type: string;
  capacity: string;
  dailyRate: string;
  image: string;
  blurb: string;
  featured: boolean;
};

export type RentalPlan = {
  label: string;
  note: string;
};

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "toyota-hiace",
    name: "Toyota Van / Toyota Hiace",
    bookingLabel: "Toyota Hiace",
    type: "Premium Van",
    capacity: "12-15 Seater",
    dailyRate: "₱4,500/day",
    image: "/images/fleet/toyota-van.png",
    blurb:
      "Roomy and dependable for family tours, airport pickups, and group transfers.",
    featured: true,
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    bookingLabel: "Toyota Fortuner",
    type: "Premium SUV",
    capacity: "7 Seater",
    dailyRate: "₱4,000/day",
    image: "/images/fleet/fortuner.png",
    blurb:
      "A refined Cebu road-trip SUV with strong comfort, space, and presence.",
    featured: true,
  },
  {
    id: "innova",
    name: "Toyota Innova",
    bookingLabel: "Toyota Innova",
    type: "MPV",
    capacity: "7 Seater",
    dailyRate: "₱2,800/day",
    image: "/images/fleet/innova.png",
    blurb:
      "Practical and comfortable for business rides, city drives, and family trips.",
    featured: true,
  },
  {
    id: "vios",
    name: "Toyota Vios",
    bookingLabel: "Toyota Vios",
    type: "Sedan",
    capacity: "5 Seater",
    dailyRate: "₱1,800/day",
    image: "/images/fleet/vios.png",
    blurb:
      "Clean, efficient, and ideal for Cebu City errands and daily mobility.",
    featured: true,
  },
  {
    id: "xpander",
    name: "Mitsubishi Xpander",
    bookingLabel: "Mitsubishi Xpander",
    type: "MPV",
    capacity: "7 Seater",
    dailyRate: "₱2,600/day",
    image: "/images/fleet/xpander.png",
    blurb:
      "A smart mix of style and cabin space for family travel across the island.",
    featured: true,
  },
  {
    id: "nissan-van-high-roof",
    name: "Nissan Van High Roof",
    bookingLabel: "Nissan Van High Roof",
    type: "Executive Van",
    capacity: "12-15 Seater",
    dailyRate: "₱5,000/day",
    image: "/images/fleet/nissan-van-high-roof.png",
    blurb:
      "Comfortable high-roof van seating for tours, events, and larger groups.",
    featured: true,
  },
  {
    id: "nissan-terra",
    name: "Nissan Terra",
    bookingLabel: "Nissan Terra",
    type: "SUV",
    capacity: "7 Seater",
    dailyRate: "₱4,000/day",
    image: "/images/fleet/terra.png",
    blurb: "Confident SUV performance for airport transfers and scenic drives.",
    featured: false,
  },
  {
    id: "montero",
    name: "Mitsubishi Montero",
    bookingLabel: "Mitsubishi Montero",
    type: "SUV",
    capacity: "7 Seater",
    dailyRate: "₱4,000/day",
    image: "/images/fleet/montero.png",
    blurb: "Spacious SUV comfort with a premium look for Cebu adventures.",
    featured: false,
  },
  {
    id: "avanza",
    name: "Toyota Avanza",
    bookingLabel: "Toyota Avanza",
    type: "MPV",
    capacity: "7 Seater",
    dailyRate: "₱2,400/day",
    image: "/images/fleet/avanza.png",
    blurb: "Efficient, easy to ride in, and suited for flexible daily rentals.",
    featured: false,
  },
  {
    id: "mirage",
    name: "Mitsubishi Mirage",
    bookingLabel: "Mitsubishi Mirage",
    type: "Compact",
    capacity: "5 Seater",
    dailyRate: "₱1,500/day",
    image: "/images/fleet/mirage.png",
    blurb: "A nimble city option for practical trips around Cebu.",
    featured: false,
  },
  {
    id: "wigo",
    name: "Toyota Wigo",
    bookingLabel: "Toyota Wigo",
    type: "Compact",
    capacity: "5 Seater",
    dailyRate: "₱1,500/day",
    image: "/images/fleet/wigo.png",
    blurb: "Affordable and easy to park for quick city travel.",
    featured: false,
  },
];

export const featuredFleet = fleetVehicles.filter((vehicle) => vehicle.featured);

export const moreFleetOptions = fleetVehicles.filter(
  (vehicle) => !vehicle.featured,
);

export const bookingLocations = [
  "Mactan-Cebu International Airport",
  "Buaya, Lapu-Lapu City, General Aviation Road",
  "Cebu City",
  "Mandaue City",
  "Lapu-Lapu City",
  "IT Park",
  "SM City Cebu",
  "Ayala Center Cebu",
] as const;

export const vehicleOptions = fleetVehicles.map(
  (vehicle) => vehicle.bookingLabel,
);

export const bookingFieldIcons = {
  "Pick-up Location": MapPinned,
  "Return Location": MapPinned,
  "Pick-up Date": CalendarDays,
  "Return Date": CalendarRange,
  "Vehicle Type": CarFront,
} as const;

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  location: string;
  initials: string;
  rating: number;
  quote: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Reliable Service",
    description: "On-time, every time. Your trip, our priority.",
    icon: ShieldCheck,
  },
  {
    title: "Airport Pickup",
    description: "Hassle-free airport transfers.",
    icon: Plane,
  },
  {
    title: "Clean Vehicles",
    description: "Spotless, sanitized, road-ready cars.",
    icon: Sparkles,
  },
  {
    title: "Flexible Rentals",
    description: "Daily, weekly, or long-term options.",
    icon: CalendarRange,
  },
  {
    title: "Local Cebu Support",
    description: "Friendly local team here to help.",
    icon: Headset,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria Santos",
    location: "Manila, Philippines",
    initials: "MS",
    rating: 5,
    quote:
      "Excellent service from start to finish! The car was super clean and the staff were very accommodating. Highly recommended for anyone visiting Cebu!",
  },
  {
    name: "John Paul Reyes",
    location: "Cebu City, Philippines",
    initials: "JR",
    rating: 5,
    quote:
      "Very smooth transaction. The vehicle was clean, comfortable, and ready on time. Perfect for our family trip around Cebu.",
  },
  {
    name: "Angela Villanueva",
    location: "Lapu-Lapu City, Philippines",
    initials: "AV",
    rating: 5,
    quote:
      "Super convenient airport pickup. The team was easy to contact and the ride felt safe and comfortable.",
  },
  {
    name: "Mark Anthony Dela Cruz",
    location: "Mandaue City, Philippines",
    initials: "MD",
    rating: 5,
    quote:
      "We rented a van for a group outing and everything went well. Spacious unit, friendly service, and hassle-free booking.",
  },
  {
    name: "Kristine Mae Lim",
    location: "Davao City, Philippines",
    initials: "KL",
    rating: 5,
    quote:
      "Great experience for our Cebu vacation. The car was well-maintained and the staff gave clear instructions.",
  },
  {
    name: "Rafael Mendoza",
    location: "Quezon City, Philippines",
    initials: "RM",
    rating: 5,
    quote:
      "Reliable service and fair pricing. I would recommend Cebu Lions Car Rental to anyone visiting Cebu.",
  },
];

export const rentalPlans: RentalPlan[] = [
  {
    label: "Daily Rent",
    note: "Standard Rate",
  },
  {
    label: "Weekly Rent",
    note: "10% Discount",
  },
  {
    label: "Monthly Rent",
    note: "15% Discount",
  },
];

export const heroHighlights = [
  "Daily • Weekly • Long-Term Rental",
  "Airport pickup available",
  "As low as ₱1,500/day",
] as const;

export const contact = {
  phone: "0956 745 1523",
  email: "cebulionscarrental@gmail.com",
  location: "Buaya, Lapu-Lapu City, General Aviation Road",
  facebook: "Cebu Lions Car Rental",
  facebookUrl: "https://www.facebook.com/CebuLionsCarRental",
  tagline: "Drive. Explore. Enjoy.",
  offer: "Daily • Weekly • Long-Term Rental",
  startingPrice: "As low as ₱1,500/day",
} as const;
