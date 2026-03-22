import type { Metadata } from "next";
import { BlogIndexClient } from "@/components/BlogIndexClient";

export const metadata: Metadata = {
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
