"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function AppShowcase() {
    return (
        <Section className="overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-4">
                    Beautifully Designed
                </h2>
                <p className="text-brown-dark/70">
                    An intuitive interface built for both casual browsers and serious collectors.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
                {[0, 20, 0].map((offset, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative mx-auto w-[260px] h-[540px] bg-brown-dark rounded-[2.5rem] border-8 border-brown-dark shadow-2xl overflow-hidden ${index === 1 ? 'md:-mt-12' : ''}`}
                    >
                        <div className="w-full h-full bg-cream flex flex-col">
                            {/* Header */}
                            <div className="h-16 bg-gold/10 flex items-center px-4 gap-2">
                                <div className="w-4 h-4 rounded-full bg-brown-dark/20" />
                                <div className="h-3 w-20 bg-brown-dark/20 rounded" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-4 space-y-4">
                                <div className="h-40 w-full bg-gray-200 rounded-xl" />
                                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                                <div className="h-4 w-1/2 bg-gray-200 rounded" />

                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <div className="h-24 bg-gray-100 rounded-lg" />
                                    <div className="h-24 bg-gray-100 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
