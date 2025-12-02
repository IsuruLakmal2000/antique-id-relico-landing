// Add this to your app/page.tsx or create a separate component

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Relico",
    "url": "https://antiqueidentifier.site",
    "logo": "https://antiqueidentifier.site/Assets/appicon1.jpg",
    "description": "AI-powered antique identification app that helps you discover the history, origin, and value of your antiques and collectibles.",
    "sameAs": [
        // Add your social media profiles
        "https://www.facebook.com/relico",
        "https://twitter.com/relico",
        "https://www.instagram.com/relico"
    ]
};

export const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Relico - Antique Identifier",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "50000"
    },
    "description": "Identify antiques instantly with AI-powered antique identification. Discover the history, origin, age, and estimated value of your vintage items and collectibles.",
    "screenshot": "https://antiqueidentifier.site/Assets/header.png",
    "downloadUrl": [
        "https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659",
        "https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp"
    ]
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Relico",
    "url": "https://antiqueidentifier.site",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://antiqueidentifier.site/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How does antique identification work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Relico uses advanced AI technology to analyze photos of your items. Simply take a picture, and our app will identify the item, determine its age, origin, and provide an estimated value based on current market data."
            }
        },
        {
            "@type": "Question",
            "name": "Is the antique identification app free?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Relico offers free antique identification. You can download the app and start identifying your antiques immediately."
            }
        },
        {
            "@type": "Question",
            "name": "What types of antiques can Relico identify?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Relico can identify a wide range of antiques including furniture, pottery, jewelry, coins, paintings, glassware, silverware, collectibles, and vintage items from various periods."
            }
        },
        {
            "@type": "Question",
            "name": "How accurate is AI antique identification?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Relico's AI has been trained on millions of antique items and maintains high accuracy rates. However, for valuable items, we always recommend consulting with a professional appraiser for final authentication."
            }
        }
    ]
};

// Usage in your page.tsx:
// Add to the head section or create a JsonLd component:
/*
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
*/
