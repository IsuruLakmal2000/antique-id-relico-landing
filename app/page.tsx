import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AppShowcase } from "@/components/AppShowcase";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Identify antiques instantly with our AI-powered app. Snap a photo to discover the history, origin, and value of your furniture, jewelry, and collectibles. Get your free antique appraisal today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://antiqueidentifier.site/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <BlogSection />
      <FAQ />
      <Footer />
    </main>
  );
}
