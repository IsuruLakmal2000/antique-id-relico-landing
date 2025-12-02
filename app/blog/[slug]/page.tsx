import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Relico Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream selection:bg-gold/30">
            <Navbar />

            <article className="pt-32 pb-20 md:pt-40 md:pb-32">
                {/* Header */}
                <div className="max-w-3xl mx-auto px-4 md:px-8 mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-brown-dark/60 hover:text-gold transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-brown-dark/60 mb-6">
                        <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 border-t border-b border-brown-dark/10 py-6">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif font-bold text-lg">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-medium text-brown-dark">{post.author}</div>
                            <div className="text-xs text-brown-dark/50">Antique Specialist</div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <div
                        className="prose prose-lg prose-brown max-w-none
              prose-headings:font-serif prose-headings:text-brown-dark 
              prose-p:text-brown-dark/80 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-brown-dark prose-strong:font-semibold
              prose-li:text-brown-dark/80
              prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>

            <Footer />
        </main>
    );
}
