import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold/30">
            <Navbar />
            <section className="pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-6">Privacy Policy</h1>
                    <p className="text-brown-dark/70 mb-10">
                        This Privacy Policy explains how Relico collects, uses, and protects your information when you
                        use the Antique Identifier app and website.
                    </p>

                    <div className="space-y-8 text-brown-dark/80">
                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Information We Collect</h2>
                            <p>
                                We may collect information you provide directly, such as your email address, and
                                information generated from your use of the app, including photos you submit for
                                identification and related metadata.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">How We Use Information</h2>
                            <p>
                                We use your information to provide antique identification, improve accuracy, personalize
                                features, and communicate updates. We do not sell personal information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Data Retention</h2>
                            <p>
                                We retain information only as long as needed to provide the service or meet legal
                                requirements. You can request deletion of your data at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Contact Us</h2>
                            <p>
                                If you have questions about this policy, contact us at
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
