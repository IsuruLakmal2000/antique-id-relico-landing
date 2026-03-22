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
    const baseUrl = "https://antiqueidentifier.site";
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category)
        .slice(0, 3);

    const fallbackRelatedPosts =
        relatedPosts.length < 3
            ? blogPosts
                  .filter(
                      (candidate) =>
                          candidate.slug !== post.slug && !relatedPosts.some((related) => related.slug === candidate.slug)
                  )
                  .slice(0, 3 - relatedPosts.length)
            : [];

    const finalRelatedPosts = [...relatedPosts, ...fallbackRelatedPosts];

    const parsedDate = new Date(post.date);
    const datePublished = Number.isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: [post.imageUrl],
        datePublished,
        dateModified: datePublished,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Relico",
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/web-app-manifest-512x512.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl,
        },
        articleSection: post.category,
        keywords: [post.category, post.title],
    };

    return (
        <main className="min-h-screen bg-cream selection:bg-gold/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
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
                            sizes="(max-width: 1280px) 100vw, 1280px"
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

                {finalRelatedPosts.length > 0 && (
                    <div className="max-w-5xl mx-auto px-4 md:px-8 mt-20">
                        <div className="flex items-end justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-dark">Related Articles</h2>
                            <Link href="/blog" className="text-sm text-gold hover:underline font-medium">
                                Explore all posts
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {finalRelatedPosts.map((relatedPost) => (
                                <article
                                    key={relatedPost.id}
                                    className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm"
                                >
                                    <Link href={`/blog/${relatedPost.slug}`} className="block relative h-40">
                                        <Image
                                            src={relatedPost.imageUrl}
                                            alt={relatedPost.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </Link>

                                    <div className="p-5">
                                        <p className="text-xs text-brown-dark/60 mb-2">{relatedPost.date}</p>
                                        <Link href={`/blog/${relatedPost.slug}`}>
                                            <h3 className="font-serif text-lg font-bold text-brown-dark hover:text-gold transition-colors line-clamp-2 mb-2">
                                                {relatedPost.title}
                                            </h3>
                                        </Link>
                                        <p className="text-sm text-brown-dark/70 line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                                        <Link
                                            href={`/blog/${relatedPost.slug}`}
                                            className="text-sm font-medium text-gold hover:underline"
                                        >
                                            Read related article
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <Footer />
        </main>
    );
}
