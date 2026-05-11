import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold/30">
            <Navbar />
            <section className="pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-6">About Relico</h1>
                    <p className="text-brown-dark/70 mb-10">
                        Relico is an AI-powered antique identifier built for collectors, dealers, and curious owners
                        who want to understand the history and value of their items.
                    </p>

                    <div className="space-y-8 text-brown-dark/80">
                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Our Mission</h2>
                            <p>
                                We make antique identification fast, accurate, and accessible. Our goal is to help
                                everyone uncover the stories behind vintage and collectible pieces.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">What We Offer</h2>
                            <p>
                                Upload a photo to receive an AI-powered identification with estimated era, style,
                                materials, and value ranges. Save discoveries and build your personal collection.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-brown-dark mb-3">Built for Collectors</h2>
                            <p>
                                From furniture and jewelry to art and collectibles, Relico supports a wide range of
                                antiques to help you learn and appraise faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
