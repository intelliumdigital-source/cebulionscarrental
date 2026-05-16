import type { Metadata } from "next";
import { Anton, Kaushan_Script, Poppins } from "next/font/google";
import { AiChatAssistant } from "@/components/AiChatAssistant";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Cebu Lions Car Rental | Premium Car Rental in Cebu",
  description:
    "Premium Cebu car rental with airport pickup, flexible rentals, premium fleet options, and local support. Drive. Explore. Enjoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${anton.variable} ${kaushanScript.variable} font-[family-name:var(--font-body)] text-ink antialiased`}
      >
        {children}
        <AiChatAssistant />
      </body>
    </html>
  );
}
