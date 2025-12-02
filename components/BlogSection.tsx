"use client";

import { blogPosts } from "@/data/blogPosts";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "./ui/Button";

export function BlogSection() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-4"
                >
                    Latest from the <span className="text-gold italic">Journal</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-brown-dark/70 max-w-2xl mx-auto"
                >
                    Expert guides, identification tips, and market insights for the modern collector.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-cream rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors"
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

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild>
                    <Link href="/blog">View All Articles</Link>
                </Button>
            </div>
        </Section>
    );
}
