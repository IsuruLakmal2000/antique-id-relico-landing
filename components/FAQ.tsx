"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { StoreLinks } from "@/components/StoreLinks";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How to identify antiques?",
        answer: "To identify antiques, examine key indicators like construction methods (hand-cut vs. machine-cut joinery), materials used (type of wood, metal, or fabric), maker's marks or signatures, signs of age and wear patterns, and period-specific design characteristics. Look for handmade details, natural patina, and compare your item with documented examples from the same era. Using AI-powered tools like Relico can instantly analyze these features and provide detailed identification."
    },
    {
        question: "What is the best antique identification app?",
        answer: "Relico is the leading AI-powered antique identification app, trusted by over 50,000+ collectors worldwide. It uses advanced artificial intelligence to instantly identify antiques from a single photo, determining their age, origin, style, and estimated value. The app works with furniture, pottery, jewelry, coins, glassware, and other collectibles. Available free on both iOS and Android, Relico provides accurate results in seconds, making it the top choice for both casual browsers and serious collectors."
    },
    {
        question: "How can I identify my antique furniture?",
        answer: "To identify antique furniture, start by examining the joinery (dovetails, mortise and tenon joints), checking for hand-cut versus machine-made construction. Look at the type of wood used, hardware (screws, nails, hinges), finish, and saw marks on hidden surfaces. Check for maker's labels, stamps, or signatures. Observe wear patterns and patina that develop naturally over time. Compare design styles with known periods (Victorian, Georgian, Art Deco, etc.). For instant identification, simply photograph your furniture with the Relico app, which analyzes all these factors automatically."
    },
    {
        question: "Is antique identification free?",
        answer: "Yes! Relico offers free antique identification. Simply download the app, take a photo of your item, and receive instant AI-powered analysis including the item's likely age, origin, style period, and estimated market value. No subscription required to start identifying your antiques and collectibles."
    },
    {
        question: "How accurate is AI antique identification?",
        answer: "Relico's AI has been trained on millions of antique items across various categories and maintains high accuracy rates for identification and dating. The AI analyzes construction methods, materials, design patterns, and compares them against a vast database. However, for extremely valuable or rare items, we always recommend consulting with a certified professional appraiser for final authentication and insurance purposes."
    },
    {
        question: "What types of antiques can be identified?",
        answer: "Relico can identify a wide range of antiques and vintage items including: furniture (chairs, tables, cabinets), pottery and porcelain, jewelry and watches, silverware and metalwork, glassware and crystals, paintings and artwork, coins and currency, books and manuscripts, textiles and rugs, toys and collectibles, and much more. The app works best with clear, well-lit photos showing details and any marks or signatures."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section className="bg-gradient-to-b from-cream to-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-4">
                        Frequently Asked <span className="text-gold italic">Questions</span>
                    </h2>
                    <p className="text-brown-dark/70 max-w-2xl mx-auto">
                        Everything you need to know about antique identification and how Relico can help you discover the value of your treasures.
                    </p>
                </motion.div>

                <div className="space-y-4 mb-16">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
                            >
                                <h3 className="text-lg font-serif font-bold text-brown-dark pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gold" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gold" />
                                    )}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-brown-dark/80 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Download App CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">
                        Ready to Identify Your Antiques?
                    </h3>
                    <p className="text-brown-dark/70 mb-8">
                        Download Relico now and start discovering the hidden value in your treasures.
                    </p>
                    <div className="flex justify-center">
                        <StoreLinks />
                    </div>
                </motion.div>

                {/* Schema.org FAQ Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqData.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            </div>
        </Section>
    );
}
