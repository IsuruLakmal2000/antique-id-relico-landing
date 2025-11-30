"use client";

import { Section } from "@/components/ui/Section";
import { Scan, History, DollarSign, Search, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Scan,
        title: "Instant Identification",
        description: "Take a photo and let our AI analyze millions of records to identify your item in seconds."
    },
    {
        icon: DollarSign,
        title: "Value Estimation",
        description: "Get real-time market value estimates based on recent auction results and sales data."
    },
    {
        icon: History,
        title: "Historical Context",
        description: "Learn the story behind your item, including its era, origin, and cultural significance."
    },
    {
        icon: Search,
        title: "Visual Search",
        description: "Find similar items and compare details to verify authenticity and rarity."
    },
    {
        icon: ShieldCheck,
        title: "Expert Verification",
        description: "Connect with certified appraisers for a professional opinion on high-value items."
    },
    {
        icon: Sparkles,
        title: "Collection Management",
        description: "Organize your digital collection, track values, and export reports for insurance."
    }
];

export function Features() {
    return (
        <Section id="features" className="bg-white/50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-4">
                    Powerful Tools for Collectors
                </h2>
                <p className="text-brown-dark/70">
                    Everything you need to discover, value, and manage your antique collection in one place.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-cream border border-gold/10 hover:border-gold/30 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-brown-dark" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-brown-dark mb-3">{feature.title}</h3>
                        <p className="text-brown-dark/70 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
