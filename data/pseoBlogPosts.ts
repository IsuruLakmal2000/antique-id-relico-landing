interface PseoSeed {
  keyword: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Identification" | "Valuation" | "Guides";
  objectType: string;
  inspectionPoints: string[];
  fakeSignals: string[];
  valueBand: string;
}

interface GeneratedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const publishedDate = "March 22, 2026";

const seeds: PseoSeed[] = [
  {
    keyword: "antique identifier app",
    slug: "best-antique-identifier-app-guide",
    title: "Antique Identifier App: What To Check Before You Trust Results",
    excerpt: "Compare what makes an antique identifier app accurate, fast, and actually useful for collectors and casual sellers.",
    category: "Guides",
    objectType: "mixed antiques",
    inspectionPoints: [
      "Upload clear photos from front, back, and base.",
      "Capture any marks, signatures, and labels separately.",
      "Compare style details with known period traits.",
      "Check at least 3 sold listings before pricing.",
    ],
    fakeSignals: [
      "Perfectly uniform wear on all edges.",
      "Modern screws on supposedly old furniture.",
      "Mismatched maker mark and design period.",
    ],
    valueBand: "$40 to $3,000+ depending on rarity and condition",
  },
  {
    keyword: "antique identifier app free",
    slug: "free-antique-identifier-app-how-to-use",
    title: "Free Antique Identifier App: How To Get Better Identifications",
    excerpt: "Learn how to use a free antique identifier app the right way and avoid common misidentification mistakes.",
    category: "Guides",
    objectType: "entry-level collector finds",
    inspectionPoints: [
      "Start with natural daylight photos.",
      "Scan details such as joints, glaze, and hallmark edges.",
      "Use both text and photo search for better context.",
      "Save comparison screenshots for later research.",
    ],
    fakeSignals: [
      "Only one blurry photo used for appraisal.",
      "No close-up of maker or purity marks.",
      "Value based on asking prices, not sold comps.",
    ],
    valueBand: "$20 to $1,500 in most casual resale scenarios",
  },
  {
    keyword: "identify antiques by photo",
    slug: "identify-antiques-by-photo-step-by-step",
    title: "Identify Antiques by Photo: A Step-by-Step Checklist",
    excerpt: "A practical workflow to identify antiques by photo using visual clues, marks, and sold-price comparisons.",
    category: "Identification",
    objectType: "furniture, decor, silver, and ceramics",
    inspectionPoints: [
      "Take one full-object shot and three detail shots.",
      "Photograph underside, back panel, or base plate.",
      "Capture construction clues like dovetails and seams.",
      "Match your item with museum or auction archives.",
    ],
    fakeSignals: [
      "Artificially distressed paint and hardware.",
      "Machine-perfect symmetry in hand-made era pieces.",
      "Replica marks that look shallow or blurred.",
    ],
    valueBand: "$50 to $5,000 based on maker, age, and provenance",
  },
  {
    keyword: "identify antiques by picture app",
    slug: "identify-antiques-by-picture-app-guide",
    title: "Identify Antiques by Picture App: Pro Tips for Accurate Results",
    excerpt: "Using a picture app is fast, but quality inputs matter. Here is how to improve match accuracy and valuation confidence.",
    category: "Identification",
    objectType: "antiques from estate sales and thrift finds",
    inspectionPoints: [
      "Shoot at eye level to avoid lens distortion.",
      "Include scale reference such as a coin or ruler.",
      "Retake close-ups for signatures and serial stamps.",
      "Validate app output with at least two external sources.",
    ],
    fakeSignals: [
      "Single-angle photo used for all conclusions.",
      "No attention to replacement parts or repairs.",
      "Assuming age equals high value every time.",
    ],
    valueBand: "$30 to $2,200 for most non-rare household antiques",
  },
  {
    keyword: "app to identify antique items",
    slug: "app-to-identify-antique-items-complete-guide",
    title: "App To Identify Antique Items: Full Beginner Guide",
    excerpt: "From lamps to porcelain, this guide shows exactly how to identify antique items with an app and verify value quickly.",
    category: "Identification",
    objectType: "general antique household items",
    inspectionPoints: [
      "Group photos by material before scanning.",
      "Tag each item with dimensions and condition notes.",
      "Focus on marks before decorative motifs.",
      "Record sale channel and sold-range benchmarks.",
    ],
    fakeSignals: [
      "Composite materials claimed as pre-1900 originals.",
      "Incorrect hallmark placement for period style.",
      "Over-polished surfaces hiding age evidence.",
    ],
    valueBand: "$25 to $1,800 for common collector categories",
  },
  {
    keyword: "how much is my antique worth",
    slug: "how-much-is-my-antique-worth-practical-method",
    title: "How Much Is My Antique Worth? A Practical Valuation Method",
    excerpt: "Use this repeatable method to estimate antique value with condition scoring, comparable sales, and demand signals.",
    category: "Valuation",
    objectType: "furniture, silver, and ceramics",
    inspectionPoints: [
      "Score condition from mint to poor.",
      "Collect at least 5 recent sold comparables.",
      "Adjust value for maker reputation and rarity.",
      "Subtract marketplace fees before final pricing.",
    ],
    fakeSignals: [
      "Only checking listing prices.",
      "Ignoring damage and restoration impact.",
      "Confusing insurance value with resale value.",
    ],
    valueBand: "$60 to $6,000 depending on type and market demand",
  },
  {
    keyword: "antique value checker",
    slug: "antique-value-checker-what-it-can-and-cant-do",
    title: "Antique Value Checker: What It Can and Cannot Tell You",
    excerpt: "A value checker helps with fast estimates, but this guide explains where human verification still matters.",
    category: "Valuation",
    objectType: "antiques with uncertain provenance",
    inspectionPoints: [
      "Start with object category and era estimate.",
      "Compare three marketplaces for sold price spread.",
      "Document chips, repairs, and replacements.",
      "Use valuation as a range, not a fixed number.",
    ],
    fakeSignals: [
      "Expecting one scan to produce exact auction value.",
      "Skipping mark verification entirely.",
      "Not updating values with current market trends.",
    ],
    valueBand: "$40 to $4,500 in most consumer resale channels",
  },
  {
    keyword: "antique price checker",
    slug: "antique-price-checker-guide-for-collectors",
    title: "Antique Price Checker Guide for Collectors and Sellers",
    excerpt: "Price checker tools are useful when paired with the right comps. Learn how to estimate realistic sell prices.",
    category: "Valuation",
    objectType: "collector-grade decorative antiques",
    inspectionPoints: [
      "Filter comps by material and maker.",
      "Use only sold data from last 6 to 12 months.",
      "Adjust for region and shipping constraints.",
      "Separate trade value from retail display value.",
    ],
    fakeSignals: [
      "Using outdated sold data from peak market periods.",
      "Ignoring regional buyer demand.",
      "Pricing without condition photos.",
    ],
    valueBand: "$75 to $7,500 for quality items with clear attribution",
  },
  {
    keyword: "antique appraisals online",
    slug: "online-antique-appraisals-how-they-work",
    title: "Online Antique Appraisals: How They Work and When To Use Them",
    excerpt: "Understand the difference between instant app estimates and formal written appraisals for insurance or estate use.",
    category: "Valuation",
    objectType: "mid-to-high value antiques",
    inspectionPoints: [
      "Clarify if you need market, insurance, or estate value.",
      "Prepare multiple detailed photos and dimensions.",
      "Include provenance records if available.",
      "Request assumptions used by the appraiser.",
    ],
    fakeSignals: [
      "No disclosure of valuation method.",
      "Guaranteed high value claims without evidence.",
      "No condition qualifiers in final result.",
    ],
    valueBand: "$100 to $15,000+ across app and expert channels",
  },
  {
    keyword: "vintage glass identification",
    slug: "vintage-glass-identification-beginners-guide",
    title: "Vintage Glass Identification: A Beginner-Friendly Guide",
    excerpt: "Identify vintage glass by color, mold seams, pontil marks, and maker signatures before you buy or list.",
    category: "Identification",
    objectType: "vintage and antique glassware",
    inspectionPoints: [
      "Check for pontil scar and mold seam style.",
      "Observe color consistency under natural light.",
      "Inspect base marks and acid-etched logos.",
      "Compare rim wear and interior scratching.",
    ],
    fakeSignals: [
      "Artificial iridescence and chemical etching.",
      "Modern mold seams on claimed hand-blown pieces.",
      "Fantasy marks not tied to known makers.",
    ],
    valueBand: "$20 to $2,800 for most collectible glass categories",
  },
  {
    keyword: "vintage glass identification marks",
    slug: "vintage-glass-identification-marks-reference",
    title: "Vintage Glass Identification Marks: Quick Reference Guide",
    excerpt: "A practical reference to decode common vintage glass marks and improve attribution confidence.",
    category: "Guides",
    objectType: "marked vintage glass pieces",
    inspectionPoints: [
      "Use macro photos for etched marks.",
      "Compare logo variants by production decade.",
      "Check mark location on base or side wall.",
      "Verify mark style against catalog scans.",
    ],
    fakeSignals: [
      "Marks with incorrect font and spacing.",
      "Brand symbols used in wrong period.",
      "Etch quality too fresh for claimed age.",
    ],
    valueBand: "$35 to $3,200 when marks match known production years",
  },
  {
    keyword: "antique marks and symbols",
    slug: "antique-marks-and-symbols-decoding-guide",
    title: "Antique Marks and Symbols: How To Decode Them Correctly",
    excerpt: "Decode marks and symbols on antiques with a simple research process for silver, porcelain, and furniture.",
    category: "Guides",
    objectType: "marked antiques across categories",
    inspectionPoints: [
      "Locate all marks, not just the main stamp.",
      "Record shape, letters, and purity numbers.",
      "Cross-reference with trusted hallmark databases.",
      "Validate mark against object style and material.",
    ],
    fakeSignals: [
      "Random symbol combinations with no provenance.",
      "Sharp modern tooling around old-style marks.",
      "Misaligned stamp placement for known manufacturers.",
    ],
    valueBand: "$50 to $8,000 depending on maker and rarity",
  },
];

const imageByCategory: Record<PseoSeed["category"], string> = {
  Identification:
    "https://images.unsplash.com/photo-1504198266285-165a04dfe3d1?q=80&w=2069&auto=format&fit=crop",
  Valuation:
    "https://images.unsplash.com/photo-1577083552431-6e5fd01988f1?q=80&w=2064&auto=format&fit=crop",
  Guides:
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop",
};

function buildContent(seed: PseoSeed): string {
  const points = seed.inspectionPoints
    .map((point) => `<li><strong>${point.split(".")[0]}.</strong> ${point.slice(point.indexOf(".") + 2)}</li>`)
    .join("");

  const risks = seed.fakeSignals
    .map((signal) => `<li>${signal}</li>`)
    .join("");

  return `
    <h2>${seed.keyword}: what you should verify first</h2>
    <p>This guide is built for people trying to evaluate ${seed.objectType}. Instead of relying on one guess, use a repeatable inspection process that combines photos, historical clues, and sold-market evidence.</p>

    <h3>Fast 4-step inspection checklist</h3>
    <ul>${points}</ul>

    <h3>Typical value band</h3>
    <p>For this category, realistic market outcomes usually fall in the range of <strong>${seed.valueBand}</strong>. Final prices still depend on condition, rarity, and demand in your region.</p>

    <h3>Common fake or mispricing signals</h3>
    <ul>${risks}</ul>

    <h3>How to use Relico for better accuracy</h3>
    <p>Use Relico to scan both the full object and close-up details. Treat app output as a starting point, then validate results with sold listings and mark references. This approach reduces overpricing mistakes and gives you more confidence before buying or selling.</p>

    <h3>FAQ</h3>
    <p><strong>Can one photo provide an exact value?</strong><br/>No. One photo can guide identification, but exact pricing needs condition notes and sold comparables.</p>
    <p><strong>Should I clean the item before scanning?</strong><br/>Only light dusting. Aggressive cleaning can remove patina and reduce value.</p>
    <p><strong>Is ${seed.keyword} useful for beginners?</strong><br/>Yes. Beginners get the most value when they follow a checklist and compare multiple data points before deciding.</p>
  `;
}

export const pseoBlogPosts: GeneratedBlogPost[] = seeds.map((seed, index) => ({
  id: `pseo-${String(index + 1).padStart(3, "0")}`,
  title: seed.title,
  slug: seed.slug,
  excerpt: seed.excerpt,
  author: "Relico Editorial Team",
  date: publishedDate,
  readTime: "6 min read",
  category: seed.category,
  imageUrl: imageByCategory[seed.category],
  content: buildContent(seed),
}));
