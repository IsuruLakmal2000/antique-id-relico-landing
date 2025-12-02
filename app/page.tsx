import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AppShowcase } from "@/components/AppShowcase";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

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
