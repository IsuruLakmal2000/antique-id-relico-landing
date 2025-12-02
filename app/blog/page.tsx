"use client";

import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-cream selection:bg-gold/30">
            <Navbar />
            <div className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-brown-dark mb-6"
                    >
                        The Antique <span className="text-gold italic">Journal</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-brown-dark/70 max-w-2xl mx-auto"
                    >
                        Explore our collection of articles on antique identification, valuation, and history.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors shadow-sm"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brown-dark">
                                    {post.category}
                                </div>
                            </Link>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-brown-dark/60 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </div>
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <h3 className="text-xl font-serif font-bold text-brown-dark mb-2 group-hover:text-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-brown-dark/70 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-gold font-medium text-sm hover:underline"
                                >
                                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
