import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zodiac Sign Finder - Discover Your Zodiac Sign by Date of Birth",
  description: "Discover your true self through astrology. Find your zodiac sign instantly by entering your birthdate on ZodiacSignFinder.com. Explore personality traits, compatibility, and daily horoscopes. Unveil the secrets of the stars today!",
  keywords: [
    "zodiac sign",
    "astrology",
    "birthdate zodiac",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "horoscope",
    "zodiac calculator",
    "birth chart",
    "zodiac compatibility",
    "zodiac symbols",
    "astrological sign",
    "zodiac personality",
    "zodiac element",
    "natal chart",
    "Chinese zodiac",
    "zodiac traits",
    "zodiac love compatibility",
    "star sign",
    "daily horoscope",
    "sun sign",
    "moon sign",
    "rising sign",
    "zodiac meanings",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
