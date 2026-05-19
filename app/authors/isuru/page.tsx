import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isuru - Author at Relico",
  description:
    "Isuru writes about antique identification, valuation, and collecting. Explore expert guides and analysis from Relico.",
  alternates: {
    canonical: "/authors/isuru",
  },
  openGraph: {
    url: "https://antiqueidentifier.site/authors/isuru",
    title: "Isuru - Author at Relico",
    description:
      "Isuru writes about antique identification, valuation, and collecting. Explore expert guides and analysis from Relico.",
  },
};

export default function AuthorIsuruPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-sm font-medium text-gold mb-4">Author Profile</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Isuru</h1>
          <p className="text-brown-dark/70 mb-10">
            Isuru writes about antique identification, valuation methods, and collecting strategy for Relico.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://i5uru.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gold/20 bg-white px-5 py-4 text-brown-dark hover:border-gold/50 hover:text-gold transition-colors"
            >
              <div className="text-sm text-brown-dark/60">Website</div>
              <div className="font-semibold">i5uru.me</div>
            </a>
            <a
              href="https://x.com/I5uru1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gold/20 bg-white px-5 py-4 text-brown-dark hover:border-gold/50 hover:text-gold transition-colors"
            >
              <div className="text-sm text-brown-dark/60">X</div>
              <div className="font-semibold">@I5uru1</div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
