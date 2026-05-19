import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Help with Relico",
  description:
    "Have questions about the Relico app or need help with an identification? Contact our support team. We're here to assist you with your antique identification needs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "https://antiqueidentifier.site/contact",
    title: "Contact Us - Get Help with Relico",
    description:
      "Contact the Relico support team for help with the antique identifier app or for any inquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-6">Contact Us</h1>
          <p className="text-brown-dark/70 mb-10">
            Need help with identification results, billing, or partnerships? Reach out and our team will
            respond as soon as possible.
          </p>

          <div className="mb-10">
            <a
              href="mailto:isurulakmalid13@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-brown-dark transition-transform hover:-translate-y-0.5"
            >
              Contact the Owner
            </a>
            <p className="text-brown-dark/70 mt-4">
              I am the owner and head of development. You can contact me directly if any issue occurs on
              the app or website.
            </p>
          </div>

          <div className="space-y-6 text-brown-dark/80">
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Support</h2>
              <p>
                Email us at <span className="font-medium">support@antiqueidentifier.app</span> and include
                details about your request.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Business Inquiries</h2>
              <p>
                For partnerships or press, contact <span className="font-medium">hello@antiqueidentifier.app</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
