import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Relico Antique Identifier",
  description:
    "Review the terms of service for the Relico antique identifier app. Your use of the app is subject to these terms and conditions.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-brown-dark/70 mb-10">
            These Terms &amp; Conditions govern your access to and use of the Relico Antique Identifier
            website and app.
          </p>

          <div className="space-y-8 text-brown-dark/80">
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">
                Use of the Service
              </h2>
              <p>
                You agree to use the service only for lawful purposes and in accordance with these
                terms. You are responsible for the content you submit.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">
                Accuracy Disclaimer
              </h2>
              <p>
                Identification results are estimates based on available data and images. We do not
                guarantee authenticity, provenance, or final appraisal values.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">
                Intellectual Property
              </h2>
              <p>
                All branding, software, and content provided by Relico are owned by Relico or its
                licensors. You may not copy or redistribute without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms can be sent to
                <span className="font-medium"> support@antiqueidentifier.app</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
