"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

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
                {['/Assets/ss1.jpg', '/Assets/ss2.jpg', '/Assets/ss3.jpg'].map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative mx-auto w-[260px] h-[540px] bg-brown-dark rounded-[2.5rem] border-8 border-brown-dark shadow-2xl overflow-hidden ${index === 1 ? 'md:-mt-12' : ''}`}
                    >
                        <Image
                            src={src}
                            alt={`App Screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
