"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

import { StoreLinks } from "@/components/StoreLinks";

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
                    <div className="flex flex-col gap-6">
                        <Button size="lg" className="w-fit gap-2">
                            Start Identifying <ArrowRight className="w-4 h-4" />
                        </Button>
                        <StoreLinks />
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-sm text-brown-dark/60">
                        <div className="flex -space-x-2">
                            {[
                                'https://url-shortener.me/1FSB',
                                'https://url-shortener.me/1FSF',
                                'https://url-shortener.me/1FSJ',
                                'https://t3.ftcdn.net/jpg/05/94/11/78/360_F_594117866_itbec6pK8xSdgRHFuFGGZigXA4aeVpLJ.jpg',
                            ].map((src, i) => (
                                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-cream overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`User ${i + 1}`}
                                        fill
                                        sizes="32px"
                                        className="object-cover"
                                    />
                                </div>
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
                    {/* Decorative elements removed as requested */}
                    {/* <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" /> */}
                    {/* <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-mahogany/5 rounded-full blur-3xl" /> */}

                    {/* Phone Mockup Placeholder */}
                    <div className="relative mx-auto">
                        <Image
                            src="/Assets/header.png"
                            alt="Relico App Interface"
                            width={500}
                            height={1000}
                            className="mx-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
