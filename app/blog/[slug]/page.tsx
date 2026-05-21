import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Lora, Outfit } from "next/font/google";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const authorProfile = {
    name: "Isuru",
    slug: "isuru",
    url: "https://antiqueidentifier.site/authors/isuru",
    sameAs: ["https://x.com/I5uru1", "https://i5uru.me/"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const baseUrl = "https://antiqueidentifier.site";
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
        authors: [
            {
                name: authorProfile.name,
                url: authorProfile.url,
            },
        ],
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            url: `${baseUrl}/blog/${post.slug}`,
            title: `${post.title} | Relico Blog`,
            description: post.excerpt,
            images: [
                {
                    url: post.imageUrl,
                    alt: post.title,
                },
            ],
        },
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
    const isPhotoGuide = post.slug === "how-to-identify-antiques-by-photo";

    const photoGuideArticleSchema = `{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Identify Antiques by Photo: The Complete 2026 Guide",
    "description": "Learn how to identify antiques by photo using 7 expert techniques — from reading pottery marks to spotting dovetail joints — plus a faster AI method anyone can use.",
    "datePublished": "2026-05-21",
    "dateModified": "2026-05-21",
    "author": {
        "@type": "Person",
        "name": "Relico Editorial Team"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Relico",
        "url": "https://antiqueidentifier.site"
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://antiqueidentifier.site/blog/how-to-identify-antiques-by-photo"
    }
}`;

    const photoGuideFaqSchema = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can you identify an antique from a photo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A clear photograph captures the details experts use to identify antiques: construction marks, joinery type, hardware style, wood grain, maker's marks, and surface patina. AI antique identifier apps like Relico can analyse these visual clues instantly and return the item type, estimated period, origin, and value range."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best app to identify antiques by photo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Relico (available on iOS and Android) is purpose-built for antique identification. Snap a photo and the AI returns the item name, historical period, origin, and estimated value in seconds — no antiques knowledge required."
            }
        },
        {
            "@type": "Question",
            "name": "How do I find the value of an antique item?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "First identify the item accurately using construction clues, maker's marks, and style. Then cross-reference recent auction results on platforms like LiveAuctioneers or Invaluable, or use an AI antique appraisal app like Relico for an instant estimated value range based on current market data."
            }
        },
        {
            "@type": "Question",
            "name": "How do I know if my antique is real or a reproduction?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Examine joinery (hand-cut dovetails vs machine-perfect ones), saw marks on the underside (straight pit-saw lines pre-1840, circular marks post-1840), nail type (square hand-forged pre-1800, cut nails 1800-1890, round wire nails after 1890), and wood shrinkage/patina consistency. Reproductions tend to have overly uniform construction and artificially aged surfaces."
            }
        }
    ]
}`;

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
            name: authorProfile.name,
            url: authorProfile.url,
            sameAs: authorProfile.sameAs,
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
            {isPhotoGuide && (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: photoGuideArticleSchema }}
                    />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: photoGuideFaqSchema }} />
                </>
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <Navbar />

            <article className={isPhotoGuide ? "pb-20 md:pb-32" : "pt-32 pb-20 md:pt-40 md:pb-32"}>
                {!isPhotoGuide && (
                    <>
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
                                    <Link
                                        href={`/authors/${authorProfile.slug}`}
                                        className="font-medium text-brown-dark hover:text-gold transition-colors"
                                    >
                                        {post.author}
                                    </Link>
                                    <div className="text-xs text-brown-dark/50">Author</div>
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
                    </>
                )}

                {/* Content */}
                {isPhotoGuide ? (
                    <div
                        className={`${outfit.variable} ${lora.variable} photo-guide`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                ) : (
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
                )}

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
