"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <Section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium mb-6 border border-gold/20">
                        <Star className="w-3 h-3 fill-gold" />
                        <span>#1 AI Antique Identifier</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brown-dark leading-tight mb-6">
                        Uncover the <span className="text-gold italic">History</span> Behind Every Treasure
                    </h1>
                    <p className="text-lg text-brown-dark/70 mb-8 max-w-lg leading-relaxed">
                        Instantly identify antiques, vintage items, and collectibles with a single photo. Discover their origin, age, and estimated value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2">
                            Start Identifying <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            View Gallery
                        </Button>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-sm text-brown-dark/60">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-cream" />
                            ))}
                        </div>
                        <p>Trusted by 50,000+ collectors</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-mahogany/5 rounded-full blur-3xl" />

                    {/* Phone Mockup Placeholder */}
                    <div className="relative mx-auto w-[280px] h-[580px] bg-brown-dark rounded-[3rem] border-8 border-brown-dark shadow-2xl overflow-hidden">
                        {/* Screen Content */}
                        <div className="w-full h-full bg-cream relative">
                            {/* Header */}
                            <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10 p-6 text-white">
                                <div className="w-full flex justify-between items-center mt-2">
                                    <div className="w-6 h-6 rounded-full bg-white/20" />
                                    <div className="w-6 h-6 rounded-full bg-white/20" />
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="w-full h-3/5 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Antique Image</span>
                            </div>

                            {/* Bottom Sheet */}
                            <div className="absolute bottom-0 w-full h-2/5 bg-white rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
                                <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
                                <div className="h-4 w-1/2 bg-gray-100 rounded mb-6" />
                                <div className="flex gap-4">
                                    <div className="h-12 w-full bg-gold/20 rounded-xl" />
                                    <div className="h-12 w-full bg-gray-100 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
