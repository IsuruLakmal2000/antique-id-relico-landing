// SEO consolidation layer: redirects for merged/thin posts, content expansions,
// topic clusters, and author/updated-date normalisation.
// See SEO_HISTORY.md for rationale.

export const UPDATED_DATE = "November 17, 2026";
export const STANDARD_AUTHOR = "Isuru";

const VALUATION = "how-much-is-my-antique-worth-complete-valuation-guide-2026";
const PHOTO = "how-to-identify-antiques-by-photo";
const FURNITURE = "how-to-identify-antique-furniture-styles";

// Old slug -> pillar slug (301). These posts were thin and/or cannibalised a pillar.
export const mergedSlugs: Record<string, string> = {
  "how-to-identify-antique-furniture": FURNITURE,
  "how-to-tell-if-furniture-is-antique": FURNITURE,
  "how-to-determine-price-of-antique": VALUATION,
  "how-to-find-the-value-of-an-antique-expert-explained": VALUATION,
  "top-5-high-value-antiques-to-look-for": VALUATION,
  "best-antique-identifier-app-guide": PHOTO,
  "free-antique-identifier-app-how-to-use": PHOTO,
  "identify-antiques-by-photo-step-by-step": PHOTO,
  "identify-antiques-by-picture-app-guide": PHOTO,
  "app-to-identify-antique-items-complete-guide": PHOTO,
  "how-much-is-my-antique-worth-practical-method": VALUATION,
  "antique-value-checker-what-it-can-and-cant-do": VALUATION,
  "antique-price-checker-guide-for-collectors": VALUATION,
  "online-antique-appraisals-how-they-work": VALUATION,
  "vintage-glass-identification-marks-reference": "vintage-glass-identification-beginners-guide",
};

// Topic clusters used for related-article blocks. First slug = pillar.
export const clusters: Record<string, string[]> = {
  valuation: [VALUATION, "free-online-antique-price-guide-value-treasures", "how-do-you-know-if-something-is-antique"],
  identification: [PHOTO, "how-do-you-know-if-something-is-antique", "how-to-identify-real-vs-fake-antiques", "antique-marks-and-symbols-decoding-guide"],
  furniture: [FURNITURE, "how-to-identify-real-vs-fake-antiques"],
  marks: ["antique-marks-and-symbols-decoding-guide", "antique-silver-hallmarks-explained", "antique-porcelain-marks-identification-guide", "antique-jewelry-hallmarks-gold-marks-guide", "vintage-glass-identification-beginners-guide"],
  collectibles: ["how-to-identify-valuable-vintage-toys", "vintage-glass-identification-beginners-guide", "antique-porcelain-marks-identification-guide"],
};

export function relatedSlugsFor(slug: string): string[] {
  const out: string[] = [];
  for (const members of Object.values(clusters)) {
    if (members.includes(slug)) {
      for (const m of members) if (m !== slug && !out.includes(m)) out.push(m);
    }
  }
  return out;
}

const CTA = `
      <h3>Identify Your Piece With Relico</h3>
      <p>Not sure what you are holding? Photograph it with Relico for likely identification, era, and a value range.</p>
      <p><a href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659">Download on the App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share">Get it on Google Play</a></p>
`;

const B = "https://antiqueidentifier.site/blog/";

// Extra sections appended to thin-but-unique posts to take them past ~1,000 words.
export const expansions: Record<string, string> = {
  "antique-silver-hallmarks-explained": `
      <h2>The Four Parts of a British Silver Hallmark</h2>
      <p><strong>A British silver hallmark is a set of small punched symbols that together certify the metal's purity, the assay office, the year, and the maker.</strong> Full marks have been compulsory in England since 1478, which is why silver is one of the easiest antiques to date accurately.</p>
      <ul>
        <li><strong>Standard mark:</strong> a walking lion (lion passant) means sterling, 92.5% silver. A seated figure of Britannia, used 1697-1720 and again by choice later, means the higher 95.8% Britannia standard.</li>
        <li><strong>Town mark:</strong> shows the assay office. London uses a leopard's head, Birmingham an anchor, Sheffield a crown (a rose after 1975), Edinburgh a castle, Glasgow a tree with a bird and fish, Chester a sword with wheatsheaves, and Exeter a castle with three towers.</li>
        <li><strong>Date letter:</strong> a letter in a shield whose font and shield shape change each cycle. Each assay office runs its own alphabet, so you must identify the office first.</li>
        <li><strong>Maker's mark:</strong> the initials of the silversmith or firm in a shield. These can be searched in published registers.</li>
      </ul>
      <p>The sovereign's head, used 1784-1890, shows that duty was paid. It is a handy extra dating clue for Georgian and Victorian pieces.</p>

      <h2>Hallmark Quick Reference by Region</h2>
      <table>
        <thead><tr><th>Region</th><th>Typical Marks</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>England</td><td>Lion passant, leopard's head (London), anchor (Birmingham), date letter, maker's initials</td><td>Date letters allow year-level dating</td></tr>
          <tr><td>Scotland</td><td>Thistle (Edinburgh), castle, assay master initials</td><td>Thistle used as standard mark from 1759</td></tr>
          <tr><td>Ireland</td><td>Crowned harp, Hibernia figure</td><td>Dublin Assay Office, Hibernia shows duty paid</td></tr>
          <tr><td>France</td><td>Minerva head, crab, boar's head</td><td>Minerva head marks 950 or 800 fineness</td></tr>
          <tr><td>Germany</td><td>Crescent moon and crown, "800" or "925"</td><td>Imperial marks used from 1888</td></tr>
          <tr><td>United States</td><td>"Sterling" or "925", maker's name</td><td>No national hallmark system, so makers' marks matter</td></tr>
        </tbody>
      </table>

      <h2>Silver-Plate, Coin Silver, and Other Marks That Mislead</h2>
      <p><strong>Silver plate is a thin layer of silver over a base metal such as copper or nickel, and it is usually marked EPNS, EP, A1, or "Silverplate".</strong> It has far less value than solid silver. Coin silver, common in 19th-century American work, is about 90% silver and often marked "Coin" or "Pure Coin". Marks like "Sterling" on a piece with no maker's mark deserve a closer look, since a stamp alone can be added by anyone.</p>
      <p>A magnet will not stick to silver, but also will not stick to copper or brass, so it only rules out steel-cored items. Look for worn spots where reddish-yellow copper shows through, which indicates plate. A professional acid test is the definitive answer if you are unsure.</p>

      <h2>How to Check Your Own Silver</h2>
      <ul>
        <li>Clean the area lightly with a soft dry cloth. Do not polish heavily, as this can erase worn marks.</li>
        <li>Use a loupe or phone macro lens to read each stamp. Check handles, rims, and under lids.</li>
        <li>Identify the assay office first, then match the date letter table for that office.</li>
        <li>Search the maker's initials in a register to confirm the firm.</li>
        <li>Weigh the piece. Heavy, solid items with crisp marks usually point to genuine sterling.</li>
      </ul>
      <p>For symbols on other materials, see our <a href="${B}antique-marks-and-symbols-decoding-guide">antique marks and symbols decoding guide</a> and the <a href="${B}antique-porcelain-marks-identification-guide">porcelain marks guide</a>. To judge what a hallmarked piece might fetch, read the <a href="${B}${VALUATION}">complete antique valuation guide</a>.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What does a lion on silver mean?</h3>
      <p>A walking lion facing left (lion passant) indicates sterling silver of at least 92.5% purity in English hallmarks.</p>
      <h3>How do I find the date of a hallmarked piece?</h3>
      <p>Identify the assay office from the town mark, then match the date letter's alphabet, font, and shield shape in that office's date table.</p>
      <h3>Is unmarked silver fake?</h3>
      <p>Not necessarily. Some pieces are too small to mark, were exempt, or have worn marks. Testing is needed to confirm the metal.</p>
      <h3>Is "925" the same as sterling?</h3>
      <p>Yes. 925 means 92.5% silver, the sterling standard. The stamp alone does not prove authenticity, so check the overall piece.</p>
${CTA}`,

  "how-to-identify-real-vs-fake-antiques": `
      <h2>Reproduction, Fake, or Fantasy Piece? Know the Difference</h2>
      <p><strong>A reproduction is a copy made openly in a historic style, a fake is made to deceive, and a "marriage" combines parts from different pieces.</strong> Many items sold as antique are honest reproductions from the 1900s that are now old in their own right. The goal is to judge whether the object matches the period it claims.</p>

      <h2>Material Tests by Category</h2>
      <table>
        <thead><tr><th>Category</th><th>Genuine Signs</th><th>Fake or Reproduction Signs</th></tr></thead>
        <tbody>
          <tr><td>Furniture</td><td>Uneven hand-cut dovetails, saw marks, oxidised unfinished wood, shrinkage</td><td>Uniform dovetails, modern screws, fresh wood under drawers, artificial distressing</td></tr>
          <tr><td>Silver</td><td>Crisp hallmarks matching the period, even wear on high points</td><td>Marks that do not match known registers, cast copies with soft details</td></tr>
          <tr><td>Porcelain</td><td>Marks sit under the glaze, wear on the foot rim, translucent paste</td><td>Printed marks too crisp, decal decoration, fresh foot rim</td></tr>
          <tr><td>Glass</td><td>Pontil scar, slight bubbles, weight, subtle colour variation</td><td>Mould seams, perfect symmetry, uniform colour</td></tr>
          <tr><td>Paintings and prints</td><td>Craquelure, aged canvas, period stretcher</td><td>Dot patterns under magnification, uniform cracks, fresh canvas back</td></tr>
        </tbody>
      </table>

      <h2>Five Fast Tests You Can Do at Home</h2>
      <ul>
        <li><strong>The loupe test:</strong> look at printed images under 10x magnification. Dots mean modern printing, lines mean engraving or lithography.</li>
        <li><strong>The UV torch test:</strong> modern repairs, glues, and overpaint often glow differently from old surfaces.</li>
        <li><strong>The wear test:</strong> genuine wear appears where hands and use would cause it. Even wear everywhere is suspicious.</li>
        <li><strong>The smell test:</strong> chemical or fresh varnish smells on supposedly old items point to recent finishing.</li>
        <li><strong>The weight test:</strong> compare weight with known genuine examples. Cast reproductions are often lighter or heavier than originals.</li>
      </ul>

      <h2>Red Flags in Listings and Sales</h2>
      <p><strong>A red flag is any detail about the seller or story that does not match the object.</strong> Look for vague provenance such as "from an old estate", stock photos, a price far below comparable sold items, and sellers who refuse to show the underside or marks. Ask for close-ups and a return policy. For high-value items, request a written condition report or independent appraisal.</p>

      <h2>Where to Get a Second Opinion</h2>
      <p>Auction house specialists, museum identification days, and accredited appraisers can give reliable assessments. For marks, see our <a href="${B}antique-marks-and-symbols-decoding-guide">marks and symbols guide</a>, and for furniture see the <a href="${B}${FURNITURE}">furniture styles guide</a>. If you want a fast first read from a photo, our <a href="${B}${PHOTO}">guide to identifying antiques by photo</a> shows how.</p>

      <h2>Why Provenance Matters</h2>
      <p><strong>Provenance is the documented ownership history of an object, and strong provenance can raise value and confidence significantly.</strong> Keep receipts, auction records, old photographs, exhibition labels, and family letters. A piece that appears in a dated catalogue or old inventory is far easier to authenticate than one with only a story. Be cautious of provenance that is too convenient, such as a famous owner that cannot be verified.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the easiest way to spot a fake antique?</h3>
      <p>Check construction details that are hard to fake, such as joinery, tool marks, and wear patterns, and compare them with documented originals.</p>
      <h3>Are reproductions worthless?</h3>
      <p>No. Quality period reproductions can have real value, but they sell for far less than genuine antiques from the original era.</p>
      <h3>Can an app tell me if something is real?</h3>
      <p>An app can narrow down likely identification and era from photos, but confirming authenticity of valuable items needs hands-on expert examination.</p>
${CTA}`,

  "antique-marks-and-symbols-decoding-guide": `
      <h2>Marks by Material: Where to Look and What You Will Find</h2>
      <p><strong>Where a mark sits depends on the material: underneath ceramics, inside silver and gold, on the back of paintings and clocks, and on the underside of furniture drawers.</strong> Always check several places, because marks can be partial, worn, or hidden under dirt.</p>
      <table>
        <thead><tr><th>Material</th><th>Where to Look</th><th>What You Might Find</th></tr></thead>
        <tbody>
          <tr><td>Porcelain and pottery</td><td>Base, foot ring, inside lid</td><td>Factory marks, pattern numbers, date codes</td></tr>
          <tr><td>Silver</td><td>Near handles, rims, under bases</td><td>Hallmarks with purity, town, date, maker</td></tr>
          <tr><td>Gold jewellery</td><td>Inside band, clasp, or pin back</td><td>Carat marks like 9, 14, 18, or 750</td></tr>
          <tr><td>Furniture</td><td>Drawer sides, back boards, underside</td><td>Labels, stamps, chalk marks, numbers</td></tr>
          <tr><td>Glass</td><td>Base or side near the bottom</td><td>Acid stamps, etched signatures, mould numbers</td></tr>
          <tr><td>Clocks and watches</td><td>Dial, movement plate, case back</td><td>Maker names, serial numbers, case hallmarks</td></tr>
        </tbody>
      </table>

      <h2>How to Document a Mark Properly</h2>
      <ul>
        <li>Photograph the mark in raking light, then straight on.</li>
        <li>Sketch it if it is faint and note its colour, size, and whether it is impressed, painted, or printed.</li>
        <li>Record the object's weight, dimensions, and any numbers nearby.</li>
        <li>Search with a description such as "crowned shield with letter L" in a marks reference or auction archive.</li>
      </ul>

      <h2>Common Mistakes When Reading Marks</h2>
      <p><strong>The most common mistake is treating a mark as proof of age or origin.</strong> Marks were copied, reused, and applied to later pieces. A famous mark with poor-quality workmanship is a warning, while an unmarked piece with excellent quality can still be valuable. Always combine the mark with materials, construction, and style.</p>

      <h2>Go Deeper by Category</h2>
      <p>For British and European silver, see <a href="${B}antique-silver-hallmarks-explained">antique silver hallmarks explained</a>. For ceramics, read <a href="${B}antique-porcelain-marks-identification-guide">antique porcelain marks</a>. For glass, see <a href="${B}vintage-glass-identification-beginners-guide">vintage glass identification</a>, and to check whether a marked piece is genuine, use our <a href="${B}how-to-identify-real-vs-fake-antiques">real vs. fake antiques guide</a>.</p>

      <h2>A Quick Timeline of Marking Laws</h2>
      <p><strong>Marking laws give useful date boundaries, because certain words and symbols were required only in certain periods.</strong> Use them as quick filters before consulting detailed references.</p>
      <ul>
        <li><strong>1478:</strong> English silver hallmarking becomes compulsory under royal statute.</li>
        <li><strong>1842-1883:</strong> English registry diamonds on ceramics and metalwork encode a registration date.</li>
        <li><strong>1862:</strong> British Trade Marks Act helps makers register marks, so printed marks become more common.</li>
        <li><strong>1891:</strong> the McKinley Tariff Act requires country of origin on imports to the US, so "England" or "Germany" marks usually date from 1891 or later.</li>
        <li><strong>1914:</strong> "Made in" phrases become standard on many imports.</li>
        <li><strong>1945-1952:</strong> "Occupied Japan" marks appear on Japanese exports.</li>
      </ul>
      <h2>Regional Mark Styles at a Glance</h2>
      <p><strong>Regional styles help narrow origin quickly.</strong> English wares favour crowns, lions, and registry diamonds. German factories use crossed swords, shields, and crowned letters. French work often uses interlaced letters, city names, and Minerva heads. Japanese wares use kanji, artist seals, and later "Nippon" or "Japan" stamps. Chinese porcelain frequently carries reign marks, which are not always contemporary with the piece.</p>

      <h2>Gold, Jewellery, and Watch Marks</h2>
      <p><strong>Gold purity is stamped as carats (9, 14, 18, 22) or as fineness numbers (375, 585, 750, 916), where 750 means 75% gold or 18 carat.</strong> British gold also carries a crown for 22 and 18 carat before 1932, and a leopard's head for London. American jewellery often uses "K" or "KT" and a maker's trademark. Watch cases carry import marks such as the Swiss bear for 14 carat, and movements carry serial numbers that can be matched to maker records. A plain stamp such as "GF" or "HGE" means gold-filled or electroplated, which is not solid gold.</p>
      <h2>Furniture Labels, Stamps, and Chalk Marks</h2>
      <p>Furniture marks include maker's labels, brand stamps, retailer tags, and workshop numbers in chalk or pencil. Paper labels are often found inside drawers or on back boards. Be careful with labels, as they can be moved or faked, so confirm that the label's wear, glue, and ageing match the surrounding wood.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Do all antiques have marks?</h3>
      <p>No. Many handmade antiques are unmarked, especially before the 19th century.</p>
      <h3>How do I look up an unknown mark?</h3>
      <p>Describe it precisely, then search marks references, museum databases, and sold auction listings that show matching bases or hallmarks.</p>
      <h3>Can a mark be faked?</h3>
      <p>Yes. Famous factory marks are widely copied, so verify with material and construction details.</p>
${CTA}`,

  "vintage-glass-identification-beginners-guide": `
      <h2>Age Clues in Glass: Pontil Marks, Seams, and Bubbles</h2>
      <p><strong>A pontil mark is the rough scar left where a glassblower's rod was snapped off the base, and it is a classic sign of hand-finished glass made before about 1900.</strong> Machine-made glass instead shows mould seams, a smooth base, and perfectly even walls.</p>
      <ul>
        <li><strong>Pontil scar:</strong> a ground, polished, or rough circle on the base suggests hand-blown work.</li>
        <li><strong>Mould seams:</strong> thin vertical lines running up the side suggest moulded glass. Seams that continue over the lip typically indicate machine production after around 1910.</li>
        <li><strong>Bubbles and striations:</strong> tiny air bubbles and faint waves appear in older glass, but modern art glass can imitate them.</li>
        <li><strong>Weight and ring:</strong> lead crystal is heavy and rings with a clear sustained note when flicked.</li>
      </ul>

      <h2>Major Glass Types and Eras</h2>
      <table>
        <thead><tr><th>Type</th><th>Origin</th><th>Approximate Era</th><th>Identifying Feature</th></tr></thead>
        <tbody>
          <tr><td>Depression glass</td><td>United States</td><td>1929-1940</td><td>Machine-made, pastel colours, patterns such as pink and green</td></tr>
          <tr><td>Carnival glass</td><td>United States</td><td>1908-1930s</td><td>Iridescent surface over moulded patterns</td></tr>
          <tr><td>Murano glass</td><td>Venice, Italy</td><td>13th century onward, modern art glass 1930s+</td><td>Bright colours, hand-worked forms, sommerso layers</td></tr>
          <tr><td>Lalique</td><td>France</td><td>1920s onward</td><td>Frosted and clear relief, moulded designs, signed R. Lalique or Lalique France</td></tr>
          <tr><td>Bohemian crystal</td><td>Czech lands</td><td>1800s onward</td><td>Cut and coloured overlay, gilded decoration</td></tr>
          <tr><td>Waterford</td><td>Ireland</td><td>1783 onward</td><td>Deep cut crystal with acid mark from 1950s</td></tr>
        </tbody>
      </table>

      <h2>Simple Tests for Glass</h2>
      <ul>
        <li><strong>UV light:</strong> vaseline or uranium glass glows bright green under a UV torch and was made mainly 1880s-1940s.</li>
        <li><strong>Sound test:</strong> flick the rim and listen for a clear ring on lead crystal.</li>
        <li><strong>Edge feel:</strong> sharp, perfectly even edges can point to modern machine cutting.</li>
        <li><strong>Light test:</strong> check the glass against a window for cracks, internal stress lines, and repairs.</li>
      </ul>

      <h2>Related Guides</h2>
      <p>Glass is often marked with acid stamps or etched signatures. Learn how to read them in our <a href="${B}antique-marks-and-symbols-decoding-guide">marks and symbols guide</a>, and if you suspect a copy, review the <a href="${B}how-to-identify-real-vs-fake-antiques">real vs. fake antiques guide</a>. For ceramics found alongside glass, see <a href="${B}antique-porcelain-marks-identification-guide">porcelain marks</a>.</p>

      <h2>How to Care for Antique and Vintage Glass</h2>
      <p><strong>Antique glass should be washed by hand in lukewarm water with mild soap, never in a dishwasher.</strong> Heat and detergent can cause clouding, known as sick glass, and can destroy gilding and iridescence. Line the sink with a towel, avoid sudden temperature changes, and dry with a soft lint-free cloth. Store pieces with space between them, as glass can chip when it touches.</p>
      <h2>Valuing Vintage Glass</h2>
      <p><strong>Glass value depends on maker, rarity of colour and form, condition, and signature.</strong> Chips, cracks, and cloudiness reduce value significantly. Signed pieces from makers such as Lalique, Galle, and Tiffany sell for much more than unsigned equivalents, while common pressed glass sells cheaply. Compare sold prices rather than asking prices, and read our <a href="${B}${VALUATION}">antique valuation guide</a> for a step-by-step method.</p>
      <h2>Common Fakes and Lookalikes</h2>
      <p>Modern imports copy carnival iridescence, Murano colours, and Lalique frosting. Look for rough mould seams, a heavy sprayed-on iridescent coating, and signatures that look laser-etched instead of acid-stamped or engraved. Genuine pieces tend to show consistent age across surface wear, and signatures that sit naturally with the form.</p>

      <h2>Where to Find Signatures on Glass</h2>
      <p><strong>Glass signatures are usually acid-stamped, wheel-engraved, or moulded into the base or lower side.</strong> Lalique pieces carry moulded or etched script, Galle uses cameo-cut signatures with a star on later work, and Murano pieces may bear paper labels or none at all. Check the base with a loupe, and note whether the mark looks cut in or surface-applied. Laser or glued labels on supposedly old glass should raise questions.</p>
      <h2>A Beginner's Checklist for Any Glass Piece</h2>
      <ul>
        <li>Photograph the base, sides, and rim in daylight and with a UV torch.</li>
        <li>Note colour, weight, and any pontil, seams, or signatures.</li>
        <li>Check for chips along the rim and base using a fingertip.</li>
        <li>Compare with sold examples of the same pattern or maker before pricing.</li>
        <li>Photograph the piece with Relico to get a fast first identification.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>How can I tell if glass is old?</h3>
      <p>Look for pontil marks, uneven walls, and tiny bubbles, and check that mould seams and colour match the supposed era.</p>
      <h3>What is the difference between glass and crystal?</h3>
      <p>Crystal contains lead oxide, usually 24% or more, which makes it heavier, clearer, and more resonant than ordinary glass.</p>
      <h3>Is carnival glass valuable?</h3>
      <p>Common patterns sell for modest prices, but rare colours and patterns can be worth hundreds or more.</p>
${CTA}`,
};

export function applyExpansion(slug: string, content: string): string {
  const extra = expansions[slug];
  if (!extra) return content;
  const body = extra.replace(CTA, "");
  const marker = content.lastIndexOf("<h3>Ready to Identify");
  if (marker !== -1) return content.slice(0, marker) + body + "\n" + content.slice(marker);
  return content + body + CTA;
}
