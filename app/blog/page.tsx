import type { Metadata } from "next";
import { BlogIndexClient } from "@/components/BlogIndexClient";

export const metadata: Metadata = {
    title: "Antique Insights Blog - Identification & Valuation Tips",
    description: "Explore the Relico blog for expert articles on antique identification, valuation guides, and collecting tips. Learn how to identify, value, and care for your treasures.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        url: "https://antiqueidentifier.site/blog",
    },
};

export default function BlogIndex() {
    return <BlogIndexClient />;
}
