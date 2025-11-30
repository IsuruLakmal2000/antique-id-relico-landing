"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Camera, Search, FileText } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Snap a Photo",
        description: "Take a clear picture of your antique item or upload one from your gallery."
    },
    {
        icon: Search,
        title: "AI Analysis",
        description: "Our advanced AI scans thousands of databases to match your item's unique features."
    },
    {
        icon: FileText,
        title: "Get Results",
        description: "Receive a detailed report with origin, age, estimated value, and similar items."
    }
];

export function HowItWorks() {
    return (
        <Section id="how-it-works" className="bg-brown-dark text-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay" />
            </div>

            <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
                    How It Works
                </h2>
                <p className="text-cream/70">
                    Identify your treasures in three simple steps.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="text-center relative"
                    >
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gold/20 -z-10" />
                        )}

                        <div className="w-24 h-24 mx-auto rounded-full bg-brown-dark border-2 border-gold flex items-center justify-center mb-6 relative z-10">
                            <step.icon className="w-10 h-10 text-gold" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gold mb-3">{step.title}</h3>
                        <p className="text-cream/70 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
