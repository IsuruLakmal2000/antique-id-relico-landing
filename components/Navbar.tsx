"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-gold/20">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                        <Search className="w-5 h-5 text-brown-dark" />
                    </div>
                    <span className="text-xl font-serif font-bold text-brown-dark tracking-wide">Relico</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-brown-dark/80 hover:text-gold transition-colors">Features</Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-brown-dark/80 hover:text-gold transition-colors">How it Works</Link>
                    <Link href="#testimonials" className="text-sm font-medium text-brown-dark/80 hover:text-gold transition-colors">Stories</Link>
                    <Button variant="primary" size="sm">Download App</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    <Menu className="w-6 h-6 text-brown-dark" />
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream border-b border-gold/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <Link href="#features" onClick={() => setIsOpen(false)} className="text-sm font-medium text-brown-dark">Features</Link>
                            <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="text-sm font-medium text-brown-dark">How it Works</Link>
                            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-sm font-medium text-brown-dark">Stories</Link>
                            <Button variant="primary" className="w-full">Download App</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
