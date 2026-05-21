import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

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
  const authorPosts = blogPosts.filter((post) => post.author === "Isuru");
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Isuru",
    url: "https://antiqueidentifier.site/authors/isuru",
    jobTitle: "Antique Researcher and Writer",
    worksFor: {
      "@type": "Organization",
      name: "Relico",
      url: "https://antiqueidentifier.site",
    },
    sameAs: ["https://x.com/I5uru1", "https://i5uru.me/"],
    knowsAbout: [
      "Antique identification",
      "Antique valuation",
      "Collector education",
      "Furniture history",
      "Silver hallmarks",
    ],
  };

  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-sm font-medium text-gold mb-4">Author Profile</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Isuru</h1>
          <p className="text-brown-dark/70 mb-6">
            Isuru writes about antique identification, valuation methods, and collecting strategy for Relico. With a
            focus on practical field techniques, Isuru helps collectors and curious beginners decode the clues hidden
            in materials, joinery, and maker marks so they can make confident decisions at estate sales, auctions, and
            family heirloom assessments.
          </p>
          <p className="text-brown-dark/70 mb-6">
            Over the last decade, Isuru has researched how different eras leave distinct signatures on furniture,
            silver, and decorative objects. That includes tracing how manufacturing tools evolved, how popular styles
            shifted between regions, and how small details like screw heads, finish types, and patina can reveal a
            piece's origin story. The goal is always the same: to make antique knowledge approachable, testable, and
            useful for everyday collectors.
          </p>
          <p className="text-brown-dark/70 mb-6">
            For Relico, Isuru focuses on high-clarity guides that break down complex topics into repeatable checklists.
            Whether it is distinguishing hand-cut dovetails from machine-cut joinery or learning how to interpret
            hallmarks, the emphasis is on helping readers spot the details that have the biggest impact on authenticity
            and value.
          </p>
          <p className="text-brown-dark/70 mb-10">
            Isuru also tracks current market trends and explains how desirability, provenance, and condition intersect
            with real-world pricing. This blend of historical research and practical buying guidance helps collectors
            avoid costly mistakes and build collections they feel proud of.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            <div className="rounded-2xl border border-gold/20 bg-white px-5 py-4">
              <div className="text-sm text-brown-dark/60">Expertise</div>
              <ul className="mt-2 space-y-2 text-brown-dark/80 text-sm">
                <li>Antique furniture identification and construction history</li>
                <li>Valuation frameworks and market trend analysis</li>
                <li>Authenticity checks for silver, ceramics, and decor</li>
                <li>Collector education and acquisition strategy</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-white px-5 py-4">
              <div className="text-sm text-brown-dark/60">Credentials</div>
              <ul className="mt-2 space-y-2 text-brown-dark/80 text-sm">
                <li>10+ years of hands-on antique research and sourcing</li>
                <li>Contributor to Relico's identification methodology</li>
                <li>Focus on evidence-based authentication checklists</li>
                <li>Speaker and workshop host for collector groups</li>
              </ul>
            </div>
          </div>

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

          <div className="mt-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-dark mb-6">Articles by Isuru</h2>
            <div className="grid gap-4">
              {authorPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-gold/10 bg-white px-5 py-4 hover:border-gold/50 transition-colors"
                >
                  <div className="text-xs text-brown-dark/60 mb-2">
                    {post.date} • {post.readTime}
                  </div>
                  <div className="font-semibold text-brown-dark mb-2">{post.title}</div>
                  <p className="text-sm text-brown-dark/70 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
