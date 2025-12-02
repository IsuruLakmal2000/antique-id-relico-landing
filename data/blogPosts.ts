export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Identify Antique Furniture: A Comprehensive Guide",
    slug: "how-to-identify-antique-furniture",
    excerpt: "Discover the secrets to identifying genuine antique furniture. Learn about joinery, wood types, and signs of age that reveal the true history of your pieces.",
    author: "Eleanor Sterling",
    date: "October 15, 2023",
    readTime: "8 min read",
    category: "Identification",
    imageUrl: "https://images.unsplash.com/photo-1606241018160-4985a8ab5dec?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>The Art of Antique Identification</h2>
      <p>Walking into an antique shop or stumbling upon a dusty piece of furniture at an estate sale can be thrilling. Is it a hidden gem worth thousands, or a clever reproduction? Knowing how to identify antique furniture is a skill that takes time to master, but there are several key indicators that can help you determine the age and authenticity of a piece.</p>

      <h3>1. Examine the Joinery</h3>
      <p>One of the most reliable ways to date furniture is to look at how it was put together. Machine-cut furniture wasn't common until the late 19th century (around 1860). Before that, joinery was done by hand.</p>
      <ul>
        <li><strong>Dovetails:</strong> Pull out a drawer and look at the dovetail joints. If they are uneven and few in number, they were likely hand-cut, indicating a piece from before 1860. Perfectly even, closely spaced dovetails suggest machine-cut joints, pointing to a later date.</li>
        <li><strong>Mortise and Tenon:</strong> Look for these joints in chairs and tables. Older pieces often have pegged mortise and tenon joints, where a wooden pin holds the joint together.</li>
      </ul>

      <h3>2. Check the Wood and Finish</h3>
      <p>The type of wood and the finish can also provide clues. Different woods were popular in different eras.</p>
      <ul>
        <li><strong>Oak:</strong> Very popular before 1700 and again during the Arts and Crafts movement (late 19th/early 20th century).</li>
        <li><strong>Mahogany:</strong> A favorite during the 18th and 19th centuries.</li>
        <li><strong>Walnut:</strong> Common in the late 17th and early 18th centuries, and again in the Victorian era.</li>
      </ul>
      <p>Look at the finish. Shellac was the primary finish before 1860. It dissolves in alcohol. Lacquer and varnish came later. A very shiny, hard finish often indicates a modern polyurethane, which means the piece is either new or has been refinished (which can affect value).</p>

      <h3>3. Look for Saw Marks</h3>
      <p>Inspect the bottom, back, or inside of the piece—areas that aren't usually polished.
      <ul>
        <li><strong>Straight Saw Marks:</strong> Indicates the wood was cut with a handsaw or an up-and-down pit saw, common before the mid-19th century.</li>
        <li><strong>Circular Saw Marks:</strong> Circular saws came into use around 1830-1850. Arc-shaped marks usually indicate a later date.</li>
      </ul>

      <h3>4. Hardware and Screws</h3>
      <p>Hardware styles changed frequently, making them a good dating tool, though they can be replaced.</p>
      <ul>
        <li><strong>Screws:</strong> Handmade screws (pre-1848) have uneven slots and blunt tips. Machine-made screws (post-1848) have even slots and pointed tips.</li>
        <li><strong>Nails:</strong> Square, hand-forged nails were used until around 1800. Cut nails (machine-made but rectangular) were used from 1800 to 1890. Modern round wire nails appeared around 1890.</li>
      </ul>

      <h3>5. Signs of Wear and Patina</h3>
      <p>Genuine antiques show signs of use. Look for:</p>
      <ul>
        <li>Wear on the bottom of chair legs or runners.</li>
        <li>Darkening around handles where hands have touched the wood for decades.</li>
        <li>Uneven fading from sunlight.</li>
      </ul>
      <p>A piece that looks too perfect is often a reproduction. "Patina" is the natural sheen that wood develops over time from polishing and exposure to air. It's hard to fake convincingly.</p>

      <h3>Conclusion</h3>
      <p>Identifying antique furniture is like being a detective. You have to look for clues in the construction, materials, and wear. While these tips are a great starting point, consulting with an expert or using a reliable identification app can give you the confirmation you need. Happy hunting!</p>
    `
  },
  {
    id: "2",
    title: "How to Determine Price of Antique: Valuation Guide",
    slug: "how-to-determine-price-of-antique",
    excerpt: "Found something old? Learn the factors that determine antique value, from rarity and condition to provenance and market trends.",
    author: "Arthur P. Valuation",
    date: "October 22, 2023",
    readTime: "10 min read",
    category: "Valuation",
    imageUrl: "https://images.unsplash.com/photo-1516547375098-9efa2ae4f0c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>What is My Antique Worth?</h2>
      <p>One of the most common questions in the world of antiques is, "What is it worth?" Whether you've inherited a family heirloom or found a curious object at a flea market, determining the value of an antique involves several critical factors. It's not just about age; it's about demand, condition, and history.</p>

      <h3>1. Rarity and Desirability</h3>
      <p>Just because something is old doesn't mean it's valuable. Value is driven by supply and demand. If an item is rare but no one collects it, it won't fetch a high price. Conversely, some mass-produced items from the mid-20th century are highly sought after today.</p>
      <p><strong>Ask yourself:</strong> How many of these were made? How many have survived? Is this style currently in fashion?</p>

      <h3>2. Condition is King</h3>
      <p>Condition is often the single most important factor in pricing. A mint-condition item can be worth ten times more than the same item with a crack or chip.</p>
      <ul>
        <li><strong>Mint:</strong> Like new, perfect condition.</li>
        <li><strong>Excellent:</strong> Minor signs of wear, no structural damage.</li>
        <li><strong>Good:</strong> Visible wear, minor repairs, but presentable.</li>
        <li><strong>Poor:</strong> Damaged, missing parts, needs restoration.</li>
      </ul>
      <p><em>Note:</em> For some items, like antique furniture or coins, cleaning or "restoring" them can actually <strong>decrease</strong> their value by removing the original patina. Always check before you clean!</p>

      <h3>3. Maker's Marks and Signatures</h3>
      <p>Identifying the manufacturer or artist is crucial. Look for:</p>
      <ul>
        <li>Stamps on the bottom of pottery or porcelain.</li>
        <li>Signatures on paintings or sculptures.</li>
        <li>Labels or tags on furniture.</li>
        <li>Hallmarks on silver and jewelry.</li>
      </ul>
      <p>A known maker usually commands a higher price than an unmarked piece. Use online databases or reference books to look up marks.</p>

      <h3>4. Provenance</h3>
      <p>Provenance refers to the documented history of an object. Knowing who owned it previously can add significant value, especially if it belonged to a famous person or has a paper trail going back to its creation. Receipts, old photos, or letters mentioning the item serve as proof of provenance.</p>

      <h3>5. Current Market Trends</h3>
      <p>The antique market fluctuates. Brown furniture (traditional mahogany/oak) has seen a dip in value recently, while Mid-Century Modern pieces have soared. To get an accurate price, you need to look at <strong>sold listings</strong>, not asking prices.</p>
      <ul>
        <li>Check eBay "Sold" listings.</li>
        <li>Look at auction house results (e.g., Sotheby's, Christie's, or local auction houses).</li>
        <li>Use dedicated antique pricing guides like Kovels or WorthPoint.</li>
      </ul>

      <h3>6. Appraisal vs. Market Value</h3>
      <p>Understand the difference between different types of value:</p>
      <ul>
        <li><strong>Retail Value:</strong> The price you'd pay at an antique shop (usually the highest).</li>
        <li><strong>Auction Value:</strong> The price it might sell for at an auction (often lower than retail).</li>
        <li><strong>Insurance Value:</strong> The cost to replace the item (usually the highest figure, used for insurance policies).</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Determining the price of an antique is an art and a science. By carefully examining your item and researching the current market, you can get a good estimate. However, for high-value items, a professional appraisal is always recommended to ensure you don't undersell your treasure.</p>
    `
  },
  {
    id: "3",
    title: "How to Identify Real vs. Fake Antiques",
    slug: "how-to-identify-real-vs-fake-antiques",
    excerpt: "Don't get scammed. Learn the tell-tale signs of reproductions and fakes in pottery, silver, and furniture.",
    author: "Sarah Jenkins",
    date: "November 2, 2023",
    readTime: "7 min read",
    category: "Authentication",
    imageUrl: "https://images.unsplash.com/photo-1551810368-45c2c58f6e74?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Spotting the Fakes</h2>
      <p>The antique market is unfortunately full of reproductions and outright fakes. As prices for genuine antiques rise, so does the incentive for forgers. Whether you are a seasoned collector or a novice, learning to spot a fake is essential to protecting your investment.</p>

      <h3>1. Too Good to Be True?</h3>
      <p>The old adage applies: if it looks too good to be true, it probably is. If you find a "rare" Ming vase at a flea market for $20, be skeptical. While lucky finds happen, they are the exception, not the rule.</p>

      <h3>2. Signs of Natural Age</h3>
      <p>Genuine antiques show signs of aging that are hard to fake perfectly.</p>
      <ul>
        <li><strong>Wear Patterns:</strong> Wear should be consistent with how the item was used. A chair should have wear on the seat and the stretcher where feet rested. If the wear looks random or artificially applied (like with sandpaper), it's likely a fake.</li>
        <li><strong>Oxidation:</strong> Metals oxidize over time. Silver tarnishes, copper develops a green verdigris, and iron rusts. A piece that looks brand new might be a reproduction.</li>
        <li><strong>Crazing:</strong> On old pottery and porcelain, the glaze often develops a network of fine cracks called crazing. Fakes may try to replicate this, but the cracks often look too uniform.</li>
      </ul>

      <h3>3. Materials and Construction</h3>
      <p>Forgers often use modern materials that weren't available when the original was made.</p>
      <ul>
        <li><strong>Synthetic Fabrics:</strong> Check textiles for synthetic fibers like polyester, which wasn't invented until the 20th century.</li>
        <li><strong>Modern Glue:</strong> Look for traces of glue. Old hide glues crystallize and turn dark; modern white or yellow glues are a dead giveaway.</li>
        <li><strong>Staples vs. Tacks:</strong> Upholstery attached with staples is modern. Antique upholstery was attached with tacks.</li>
      </ul>

      <h3>4. The "Smell" Test</h3>
      <p>Believe it or not, your nose can help. Old furniture often has a musty smell, or smells of old wax and wood. A strong smell of fresh chemicals, varnish, or paint indicates a new piece.</p>

      <h3>5. Markings and Hallmarks</h3>
      <p>Fakers often try to copy famous marks, but they often get the details wrong.</p>
      <ul>
        <li><strong>Quality of the Mark:</strong> Genuine marks are usually crisp and clear. Fake marks might be blurry, uneven, or stamped over the glaze instead of under it.</li>
        <li><strong>Consistency:</strong> Does the mark match the time period of the piece? A mark used in 1850 appearing on a style of vase from 1750 is a clear sign of a fake.</li>
      </ul>

      <h3>6. Modern Manufacturing Signs</h3>
      <p>Look for signs of modern mass production.</p>
      <ul>
        <li><strong>Seams:</strong> Mold seams on glass or pottery that should be hand-blown or hand-thrown.</li>
        <li><strong>Pixelation:</strong> On "hand-painted" items, look closely with a magnifying glass. If you see tiny dots (pixels), it's a decal or print, not a painting.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Educating yourself is the best defense against fakes. Handle as many genuine items as you can—go to museums and reputable antique shops to get a feel for the real thing. The more you see the real deal, the easier it will be to spot the imposters.</p>
    `
  },
  {
    id: "4",
    title: "Top 5 High-Value Antiques to Look For",
    slug: "top-5-high-value-antiques-to-look-for",
    excerpt: "Treasure hunting? Keep an eye out for these 5 categories of antiques that consistently fetch high prices in today's market.",
    author: "James Hunter",
    date: "November 10, 2023",
    readTime: "6 min read",
    category: "Collecting",
    imageUrl: "https://images.unsplash.com/photo-1706586344321-6ca6027931e1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Hidden Treasures in Plain Sight</h2>
      <p>You don't need to be a millionaire to start investing in antiques. Many valuable items are still hiding in attics, thrift stores, and garage sales, waiting to be discovered. Here are five categories of antiques that are currently in high demand and can fetch impressive prices.</p>

      <h3>1. Mid-Century Modern Furniture</h3>
      <p>The clean lines and functional design of the mid-20th century (1933-1965) are hotter than ever. Look for pieces by designers like Eames, Saarinen, Wegner, and Noguchi. Even unbranded pieces with that distinct "Mad Men" look can be valuable.</p>
      <p><strong>What to look for:</strong> Teak or rosewood construction, organic shapes, and tapered legs.</p>

      <h3>2. Jadeite Glassware</h3>
      <p>This milky green glass, popular in the 1930s and 40s, has a cult following. Originally sold cheaply in dime stores, rare pieces can now sell for hundreds of dollars.</p>
      <p><strong>What to look for:</strong> The specific "Fire-King" brand by Anchor Hocking is very desirable. Look for the "ball jug" pitchers or complete sets of dinnerware.</p>

      <h3>3. Vintage Costume Jewelry</h3>
      <p>While not made of precious stones, vintage costume jewelry from high-end designers like Chanel, Miriam Haskell, and Trifari is highly collectible. The craftsmanship was often superior to modern jewelry.</p>
      <p><strong>What to look for:</strong> Signed pieces are worth the most. Look for heavy settings, sparkling stones (rhinestones), and intricate designs.</p>

      <h3>4. First Edition Books</h3>
      <p>Books can be incredibly valuable, especially first editions of classic novels. The condition of the dust jacket is often just as important as the book itself.</p>
      <p><strong>What to look for:</strong> "First Edition, First Printing" on the copyright page. Key titles from the 20th century (like "The Great Gatsby" or "Harry Potter and the Philosopher's Stone") can be worth a fortune.</p>

      <h3>5. Antique Advertising Signs</h3>
      <p>Porcelain and tin signs advertising soda, oil, tobacco, or farm equipment are very popular for home decor and man caves. They capture a slice of history and Americana.</p>
      <p><strong>What to look for:</strong> Condition is key—rust reduces value. Bright colors and interesting graphics are most desirable. Signs from defunct brands often have a nostalgic appeal.</p>

      <h3>Conclusion</h3>
      <p>Keep your eyes peeled! The next time you're browsing a tag sale, you might just spot one of these high-value items. Remember to do your research on your phone before you buy—knowledge is profit.</p>
    `
  },
  {
    id: "5",
    title: "Antique Silver Hallmarks Explained",
    slug: "antique-silver-hallmarks-explained",
    excerpt: "Unlock the code of silver hallmarks. Learn how to read the tiny stamps that tell you the purity, maker, and date of your silver pieces.",
    author: "Elizabeth Sterling",
    date: "November 18, 2023",
    readTime: "9 min read",
    category: "Guides",
    imageUrl: "https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?q=80&w=3218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Reading the Story in Silver</h2>
      <p>Silver has been hallmarked for centuries, providing one of the most reliable systems for dating and identifying antiques. Those tiny, often cryptic stamps on the back of a spoon or the bottom of a teapot contain a wealth of information. Learning to read them allows you to know exactly what you have.</p>

      <h3>Sterling vs. Silver Plate</h3>
      <p>The first step is to determine if your piece is solid silver (Sterling) or silver plate (a thin layer of silver over a base metal like copper).</p>
      <ul>
        <li><strong>Sterling Silver:</strong> Usually marked "925", "Sterling", or with a specific pictorial hallmark (like the Lion Passant in England). It means the piece is 92.5% pure silver.</li>
        <li><strong>Silver Plate:</strong> Often marked "EPNS" (Electro Plated Nickel Silver), "EP", "A1", or "Quadruple Plate". These have little melt value compared to sterling.</li>
      </ul>

      <h3>Common Pictorial Hallmarks (British)</h3>
      <p>British silver hallmarks are the most comprehensive. A standard set usually includes four or five marks:</p>
      <ol>
        <li><strong>Standard Mark:</strong> Indicates purity. The <strong>Lion Passant</strong> (a walking lion) denotes Sterling Silver (92.5%). The <strong>Britannia</strong> figure denotes higher purity (95.8%).</li>
        <li><strong>City Mark (Assay Office):</strong> Tells you where it was tested.
          <ul>
            <li>Leopard's Head: London</li>
            <li>Anchor: Birmingham</li>
            <li>Crown: Sheffield</li>
            <li>Castle: Edinburgh</li>
          </ul>
        </li>
        <li><strong>Date Letter:</strong> A letter that changes every year, in a specific font and shield shape. This allows you to date a piece to the exact year. You'll need a hallmark guidebook or website to decipher this.</li>
        <li><strong>Maker's Mark:</strong> Usually the initials of the silversmith or manufacturer.</li>
        <li><strong>Duty Mark:</strong> (Optional) The profile of the reigning monarch, used during certain periods to show tax was paid.</li>
      </ol>

      <h3>American Silver Marks</h3>
      <p>American silver marking was less regulated than British. Before 1868, many American silversmiths used "Coin" silver (90% pure), often marked "Coin" or "Pure Coin". After 1868, the Sterling standard was adopted, and you will simply see the word "STERLING" stamped on the piece, often accompanied by a maker's mark (like Tiffany & Co., Gorham, etc.).</p>

      <h3>Continental Silver</h3>
      <p>Other countries have their own systems.
      <ul>
        <li><strong>France:</strong> The Head of Minerva indicates 950 standard (higher than sterling).</li>
        <li><strong>Germany:</strong> A Crescent Moon and Crown mark (post-1888) indicates 800 silver (80% pure).</li>
      </ul>

      <h3>Tools for Identification</h3>
      <p>To read hallmarks effectively, you'll need:</p>
      <ul>
        <li>A good magnifying glass or jeweler's loupe (10x magnification).</li>
        <li>A reliable reference book (like "Jackson's Hallmarks") or an online database (like 925-1000.com).</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Hallmarks are a fascinating code that connects you directly to the history of the piece. Once you start looking for them, you'll never look at a piece of silverware the same way again.</p>
    `
  }
];
