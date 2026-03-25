import { pseoBlogPosts } from "@/data/pseoBlogPosts";

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

const baseBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Identify Antique Furniture: A Comprehensive Guide",
    slug: "how-to-identify-antique-furniture",
    excerpt: "Discover the secrets to identifying genuine antique furniture. Learn about joinery, wood types, and signs of age that reveal the true history of your pieces.",
    author: "Eleanor Sterling",
    date: "December 15, 2025",
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
    date: "January 22, 2025",
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
    date: "February 2, 2025",
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
    date: "February 10, 2025",
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
    date: "February 18, 2025",
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
  },
  {
    id: "6",
    title: "How to Find the Value of an Antique - Expert Explained",
    slug: "how-to-find-the-value-of-an-antique-expert-explained",
    excerpt: "Discover how to determine the true market value of your antiques by understanding rarity, condition, provenance, and market desirability. Learn professional valuation techniques without hiring an appraiser.",
    author: "Victoria Chambers",
    date: "December 24, 2024",
    readTime: "12 min read",
    category: "Valuation",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Is That Old Item in Your Attic Worth a Fortune?</h2>
      <p>Have you ever stumbled upon a dusty old chair in the attic or spotted a unique vase at a garage sale and wondered, "Is this actually worth anything?" You aren't alone. Determining the true market value of an antique can feel like solving a mystery, but you don't need to be a professional appraiser to get started.</p>

      <p>Valuing an antique isn't just about how old it is; it is about understanding the story the object tells. By looking at a few key factors, you can separate everyday bric-a-brac from hidden treasures. Here is how to start your detective work.</p>

      <h2>1. The Four Pillars of Value</h2>
      <p>Experts often look at four specific criteria to estimate a piece's worth. Think of these as the foundation of your valuation; if one is missing, the value might not be as high as you hope.</p>

      <h3>Rarity: The Law of Supply and Demand</h3>
      <p>This is the classic rule of supply and demand. Just because something is old doesn't mean it is rare. If an item was mass-produced and thousands still exist, its value stays low. However, limited-run items, one-of-a-kind pieces, or objects with a manufacturing error can command much higher prices because they are hard to find.</p>
      <p>Ask yourself: How many of these were originally made? How many have survived to today? The scarcer the item, the more collectors will compete to own it.</p>

      <h3>Condition: The Most Critical Factor</h3>
      <p>Condition is king. Collectors generally want items in their original, pristine state. Chips, cracks, stains, or missing parts can significantly lower the value—sometimes by 50% or more. However, be careful not to confuse "damage" with "patina."</p>
      <p><strong>Patina</strong> is the natural wear and aging (like the soft sheen on old wood or the tarnish on silver) that adds character and proves age. A clumsy repair job with modern glue is damage; honest wear is history. Understanding this distinction can mean the difference between a valuable antique and a restoration project.</p>

      <h3>Provenance: The Item's Story Matters</h3>
      <p>This is a fancy term for the item's history. Can you prove who owned it? Do you have a receipt, a photograph, or a letter linking it to a specific time, place, or famous person?</p>
      <p>A standard antique desk is worth X amount, but that same desk with papers proving it belonged to a famous author could be worth 10 times more. Documentation is essentially a "certificate of authenticity" for the item's story. Even a handwritten note from a grandmother explaining where she bought something can add context and value.</p>

      <h3>Market Desirability: Trends Change Everything</h3>
      <p>Tastes change. An item might be rare and in perfect condition, but if nobody is collecting that style right now, it will be hard to sell. For example, Mid-Century Modern furniture has seen a huge surge in popularity recently, driving prices up, while heavy Victorian furniture has seen less demand.</p>
      <p>Understanding current trends is just as important as understanding the item itself. What's "in" today might be "out" tomorrow, and vice versa. This is where staying informed about the antique market becomes crucial.</p>

      <h2>2. Become a Detective: The Physical Inspection</h2>
      <p>Before you jump online, sit down with the item and inspect it closely. You are looking for clues that reveal its origins and authenticity.</p>

      <h3>Maker's Marks: The Fingerprints of Creation</h3>
      <p>Flip the item over, check the bottom of a vase, the back of a brooch, or the inside of a drawer. You are looking for stamps, signatures, or labels. These "fingerprints" of the creator can instantly tell you the manufacturer and the date of production.</p>
      <p>A piece by a renowned maker (like Tiffany, Chippendale, or Wedgwood) will always hold more value than an unmarked equivalent. Even makers who aren't household names can add significant value if they were respected craftspeople in their time.</p>

      <div class="bg-gold/5 border-l-4 border-gold p-6 my-8 rounded-r-lg">
        <p class="text-brown-dark font-medium mb-2">💡 Pro Tip: Use Technology to Your Advantage</p>
        <p class="text-brown-dark/80 text-sm mb-4">In today's digital age, identifying maker's marks has become easier than ever. Modern antique identification apps can help you photograph and research marks instantly, connecting you to vast databases of manufacturers and patterns. Instead of spending hours flipping through reference books, you can get instant information about your item's origins right from your smartphone.</p>
        <p class="text-brown-dark/80 text-sm">Tools like these combine AI technology with expert knowledge, making professional-level identification accessible to anyone curious about their treasures.</p>
      </div>

      <h2>3. The Golden Rule of Research: "Sold" vs. "Asking"</h2>
      <p>When you start researching prices online, it is easy to get excited by high numbers. If you see a similar vase listed on eBay for $500, that doesn't mean your vase is worth $500. That is just the asking price—the price the seller wishes they could get.</p>

      <p>To find the true market value (Fair Market Value), you must look at <strong>sold listings</strong>. Filter your search results on sites like eBay or auction archives to see what buyers actually paid in the last few months. This "realized price" is the only accurate indicator of what your item is worth today.</p>

      <h3>Where to Research Prices</h3>
      <ul>
        <li><strong>eBay Sold Listings:</strong> Use the advanced search and filter for "Sold Items" to see actual transaction prices</li>
        <li><strong>Auction House Results:</strong> Sites like LiveAuctioneers and Invaluable show realized prices from professional auctions</li>
        <li><strong>WorthPoint:</strong> A subscription service with millions of sold item records</li>
        <li><strong>Price Guide Books:</strong> Miller's Antiques Handbook and Kovels' guides are industry standards</li>
      </ul>

      <p>Remember to compare apples to apples: items should be similar in size, condition, age, and maker to get an accurate comparison.</p>

      <h2>4. When to Call a Pro</h2>
      <p>Online research is fantastic for everyday finds, but there are times when you should bring in an expert. If you suspect an item is extremely valuable, fragile, or has a complex history, get a formal written appraisal.</p>

      <h3>Types of Professional Appraisals</h3>
      <p><strong>Insurance Appraisals:</strong> These usually give a "replacement value" (the cost to buy a brand new one retail), which is often higher than market value. Use these when insuring valuable items.</p>

      <p><strong>Fair Market Appraisals:</strong> This is the realistic price you would get if you sold the item to a stranger today. This type is needed for estate settlements, donations, or when you're planning to sell.</p>

      <p>Look for appraisers certified by organizations like the American Society of Appraisers (ASA) or the International Society of Appraisers (ISA). Be wary of appraisers who offer to buy your items—this is a conflict of interest.</p>

      <h2>Making the Process Easier with Modern Tools</h2>
      <p>While traditional research methods are invaluable, technology has revolutionized how we identify and value antiques. Rather than waiting days for an expert opinion or spending hours in libraries, you can now get instant insights into your discoveries.</p>

      <p>Advanced identification tools use image recognition and extensive databases to help you understand what you've found. Simply snap a photo of an item, and within seconds, you can receive information about its age, style, potential value range, and historical context. This immediate feedback is particularly helpful when you're at estate sales, flea markets, or auctions and need to make quick decisions.</p>

      <div class="bg-gradient-to-br from-gold/10 via-brown-dark/5 to-gold/5 border-2 border-gold/20 p-8 md:p-12 px-6 md:px-16 my-12 rounded-2xl shadow-lg">
        <div class="text-center mb-8">
          <h3 class="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-3">
            📱 Your Pocket Antique Expert
          </h3>
          <div class="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p class="text-brown-dark/90 text-lg mb-6 leading-relaxed">
              Whether you're a seasoned collector or just starting your antique journey, having the right tools makes all the difference. <strong class="text-gold">Relico</strong> brings expert-level identification to your fingertips, helping you make informed decisions about potential purchases or items you already own.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Instantly identify makers' marks and signatures</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Get accurate value estimates in seconds</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Discover the fascinating history of your pieces</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">No appointments or waiting required</span>
              </li>
            </ul>
          </div>
          
          <div class="relative">
            <div class="relative mx-auto max-w-xs">
              <img 
                src="/Assets/ss1.jpg" 
                alt="Relico App Screenshot" 
                class="rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute -bottom-4 -right-4 bg-gold text-white px-4 py-2 rounded-full font-bold shadow-lg">
                AI Powered
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
          <p class="text-brown-dark/80 text-center mb-4 font-medium">
            Download Relico today and start identifying antiques like a pro!
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 38.5-16.8 53.3-16.8s33.6 16.8 54.7 16.8c32.6 0 65.5-75.8 88.3-124.2-34.9-12.8-64.5-53.5-65.8-88.5zm-48.7-155.4c13.6-16.6 24.5-37.5 21.8-58.7-18.8 1.2-41.4 12.5-55 28.7-11.5 13.5-22.3 36.2-19.4 58 21.9 1.6 41.5-10.8 52.6-28z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                <span class="text-lg font-bold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                <span class="text-lg font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center">
          <p class="text-brown-dark/60 text-sm italic">
            ⭐ Join thousands of collectors using Relico to discover hidden treasures
          </p>
        </div>
      </div>

      <h2>Final Thoughts: Every Item Has a Story</h2>
      <p>Valuing antiques is a blend of history, economics, and art appreciation. By analyzing the rarity, condition, provenance, and current demand, you can turn a wild guess into an educated estimate. So next time you see an old trinket, take a closer look—it might just be a diamond in the rough.</p>

      <p>Remember, the journey of discovering an item's value is often just as rewarding as the value itself. Each piece has a story to tell, and understanding that story connects us to the past in meaningful ways. Whether you discover a priceless treasure or simply learn to appreciate the craftsmanship of everyday objects, you're participating in the preservation of history.</p>

      <h3>Start Your Antique Adventure Today</h3>
      <p>Don't let potential treasures pass you by. Armed with these valuation principles and modern identification tools, you're ready to start uncovering the hidden value in antiques all around you. Happy hunting, and may your next find be a remarkable one!</p>
    `
  },
  {
    id: "7",
    title: "How Do You Know If Something Is Antique? - Complete Guide",
    slug: "how-do-you-know-if-something-is-antique",
    excerpt: "Learn expert techniques to identify genuine antiques from reproductions. Discover how to examine joinery, hardware, patina, and maker's marks to authenticate your treasures.",
    author: "Margaret Ashford",
    date: "December 24, 2024",
    readTime: "10 min read",
    category: "Identification",
    imageUrl: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Separating Treasures from Reproductions</h2>
      <p>Walking into an estate sale or stumbling upon a dusty box in an attic can feel like the start of a treasure hunt. But once the excitement fades, a difficult question remains: Is this a genuine historical piece, or just a clever reproduction?</p>

      <p>Learning how to know if something is antique requires a mix of detective work, historical knowledge, and modern verification. Whether you are a budding collector or a reseller, understanding the signs of true age is crucial to avoid overpaying for "fakes."</p>

      <p>Here is a comprehensive guide to identifying the real deal.</p>

      <h2>1. Understand the Definitions: Antique vs. Vintage</h2>
      <p>Before you buy, you must know what the labels actually mean. In the trade, these terms are not interchangeable.</p>

      <ul>
        <li><strong>Antique:</strong> Strictly defined as an item that is at least 100 years old (made before 1925 as of 2024).</li>
        <li><strong>Vintage:</strong> An item that is generally between 20 and 99 years old.</li>
        <li><strong>Retro:</strong> Usually refers to items from the 1950s–1980s, or modern items made to look old.</li>
      </ul>

      <p>If a seller claims a plastic chair is an "antique," proceed with caution—plastic wasn't widely used in furniture until the mid-20th century. Understanding these distinctions is your first line of defense against misrepresentation.</p>

      <h2>2. Examine the Joinery (Dovetails)</h2>
      <p>For furniture, the drawers tell the true story. Pull a drawer out and look at how the front connects to the side. This is one of the most reliable dating methods available.</p>

      <h3>Hand-Cut Dovetails</h3>
      <p>If the interlocking "teeth" are slightly uneven or of different sizes, it was likely made by hand before 1860. This is a strong sign of a genuine antique. Look for:</p>
      <ul>
        <li>Irregular spacing between dovetails</li>
        <li>Varying sizes of pins and tails</li>
        <li>Evidence of hand tool marks</li>
        <li>Typically wider dovetails (fewer per inch)</li>
      </ul>

      <h3>Machine-Cut Dovetails</h3>
      <p>If the joints are perfectly uniform and precise, they were likely cut by a machine, placing the item in the late 19th century or later. Machine-made dovetails are:</p>
      <ul>
        <li>Evenly spaced and identical in size</li>
        <li>Very tight and uniform</li>
        <li>Multiple narrow dovetails</li>
      </ul>

      <h2>3. Check the Hardware and Screws</h2>
      <p>Hardware is often the "smoking gun" in antique identification. Original hardware can instantly date a piece, though beware of replacements.</p>

      <h3>The Screw Test</h3>
      <p>Remove a screw (if possible) or look closely at the head and threading:</p>

      <ul>
        <li><strong>Hand-cut screws (Pre-1850):</strong> These have no point (blunt ends) and the slot for the screwdriver might be slightly off-center. Threads are uneven.</li>
        <li><strong>Machine-made screws (Post-1850):</strong> These have sharp points and even, consistent threads.</li>
        <li><strong>Phillips Head (+):</strong> If you see a cross-head screw, the hardware is from the 1930s or later—definitely not antique.</li>
      </ul>

      <h3>Nails</h3>
      <p>Square or rectangular heads usually indicate 18th or early 19th-century origins, while round wire nails indicate the piece is modern (post-1880s). Look at nail holes too—hand-forged nails leave irregular holes.</p>

      <h2>4. Look for "Honest" Wear and Patina</h2>
      <p>"Patina" is the natural aging process that happens to wood, metal, and leather over decades. It is very difficult to fake convincingly, making it one of the best authenticity indicators.</p>

      <h3>Uneven Wear</h3>
      <p>A genuine antique chair should show wear where people actually touched it—the arms, the top rail, and the "stretchers" where feet rested. Look for:</p>
      <ul>
        <li>Darker coloring on frequently touched areas</li>
        <li>Smoothed edges from years of handling</li>
        <li>Wear patterns that make logical sense</li>
        <li>Original finish worn away in high-traffic spots</li>
      </ul>

      <h3>The Bottoms</h3>
      <p>Flip the item over. The bottom of a 100-year-old table leg should be scuffed and dark from years of mopping and moving. If the bottom looks like fresh, pale wood, it was likely made recently or the feet were replaced.</p>

      <div class="bg-gold/5 border-l-4 border-gold p-6 my-8 rounded-r-lg">
        <p class="text-brown-dark font-medium mb-2">⚠️ Warning: Artificial Aging</p>
        <p class="text-brown-dark/80 text-sm">Some forgers try to create fake patina using stains, sandpaper, or even chains to "distress" wood. Real patina develops gradually and shows logical wear patterns. Artificially aged items often have random damage that doesn't match how the piece would have been used.</p>
      </div>

      <h2>5. Use Digital Tools to Verify Your Findings</h2>
      <p>Even the most experienced dealers sometimes struggle to identify obscure maker's marks or specific pottery patterns. This is where technology becomes your safety net and your secret weapon.</p>

      <p>Traditional authentication methods require extensive knowledge of manufacturing techniques, historical periods, and regional styles. While these skills take years to develop, modern technology can provide instant expert-level analysis to anyone with a smartphone.</p>

      <div class="bg-gradient-to-br from-gold/10 via-brown-dark/5 to-gold/5 border-2 border-gold/20 p-8 md:p-12 px-6 md:px-16 my-12 rounded-2xl shadow-lg">
        <div class="text-center mb-8">
          <h3 class="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-3">
            🔍 Instant Authentication at Your Fingertips
          </h3>
          <div class="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p class="text-brown-dark/90 text-lg mb-4 leading-relaxed">
              Using an AI-powered tool is the smartest way to <strong>"know before you purchase."</strong> Apps like <strong class="text-gold">Relico</strong> have become essential for modern collectors, dealers, and treasure hunters.
            </p>
            
            <p class="text-brown-dark/80 mb-6">
              Instead of carrying heavy reference books or waiting days for expert opinions, you can simply snap a photo. Relico analyzes the visual data—style, material, construction methods, and marks—to tell you what the item is and, crucially, what it's worth.
            </p>

            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-5 mb-6">
              <h4 class="font-serif font-bold text-brown-dark mb-3">Why Relico is Essential:</h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-gold mr-2 text-lg">✓</span>
                  <span class="text-brown-dark/80 text-sm"><strong>Second Opinion Protection:</strong> If you think a vase is Ming Dynasty but the app identifies the glaze as 1970s reproduction, you just saved yourself a fortune</span>
                </li>
                <li class="flex items-start">
                  <span class="text-gold mr-2 text-lg">✓</span>
                  <span class="text-brown-dark/80 text-sm"><strong>On-the-Spot Analysis:</strong> Perfect for estate sales, flea markets, and auctions where quick decisions are required</span>
                </li>
                <li class="flex items-start">
                  <span class="text-gold mr-2 text-lg">✓</span>
                  <span class="text-brown-dark/80 text-sm"><strong>Comprehensive Database:</strong> Access to thousands of maker's marks, pottery patterns, and historical references</span>
                </li>
                <li class="flex items-start">
                  <span class="text-gold mr-2 text-lg">✓</span>
                  <span class="text-brown-dark/80 text-sm"><strong>Value Estimates:</strong> Get instant appraisal ranges based on current market data</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="relative">
            <div class="relative mx-auto max-w-xs">
              <img 
                src="/Assets/ss2.jpg" 
                alt="Relico Antique Identification App" 
                class="rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute -top-4 -left-4 bg-gold text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm">
                Free Trial
              </div>
            </div>
          </div>
        </div>

        <div class="bg-brown-dark/5 border border-brown-dark/10 rounded-xl p-6 mb-6">
          <p class="text-brown-dark/90 text-center mb-2 font-semibold text-lg">
            🎁 Try Relico Risk-Free
          </p>
          <p class="text-brown-dark/80 text-center mb-4 text-sm">
            If you are currently unsure about an item, download Relico and use the <strong>free 3-day trial</strong> to scan and appraise your finds instantly. It's a low-risk way to get expert-level data before making any purchase decisions.
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 38.5-16.8 53.3-16.8s33.6 16.8 54.7 16.8c32.6 0 65.5-75.8 88.3-124.2-34.9-12.8-64.5-53.5-65.8-88.5zm-48.7-155.4c13.6-16.6 24.5-37.5 21.8-58.7-18.8 1.2-41.4 12.5-55 28.7-11.5 13.5-22.3 36.2-19.4 58 21.9 1.6 41.5-10.8 52.6-28z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                <span class="text-lg font-bold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                <span class="text-lg font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center">
          <p class="text-brown-dark/60 text-sm italic">
            💎 Join smart collectors who verify before they buy
          </p>
        </div>
      </div>

      <h2>6. Search for Maker's Marks</h2>
      <p>Always look for signatures, stamps, or labels. These "fingerprints" can instantly identify the creator and date of production.</p>

      <h3>Where to Look:</h3>
      <ul>
        <li><strong>Ceramics and Pottery:</strong> Look on the underside for a fired-on stamp, an impressed logo, or hand-painted marks. Some marks are hidden under the glaze.</li>
        <li><strong>Silver:</strong> Look for hallmarks (tiny stamped icons) that indicate the purity (e.g., "925" or a lion passant for Sterling) and the city of manufacture. British silver has the most comprehensive marking system.</li>
        <li><strong>Glass:</strong> Some high-end glass (like Tiffany or Waterford) will have a faint acid-etched signature on the bottom. Hold it up to the light at an angle.</li>
        <li><strong>Furniture:</strong> Check drawers, the back, and underneath for paper labels, stamps, or branded marks. Many quality makers proudly marked their work.</li>
      </ul>

      <p>Once you find a mark, you can photograph it and use identification tools to decode its meaning and verify authenticity.</p>

      <h2>Additional Authentication Techniques</h2>

      <h3>Wood Identification</h3>
      <p>Different woods were popular in different eras. Oak was common before 1700 and during the Arts and Crafts movement. Mahogany dominated the 18th and 19th centuries. Walnut was favored in the late 17th and early 18th centuries.</p>

      <h3>Saw Marks</h3>
      <p>Check the back, bottom, or inside of wooden items:</p>
      <ul>
        <li><strong>Straight saw marks:</strong> Hand or pit saw, pre-mid-19th century</li>
        <li><strong>Circular saw marks:</strong> Circular saws became common around 1830-1850</li>
      </ul>

      <h3>Glass and Pontil Marks</h3>
      <p>On the bottom of glass items, a rough circular scar (pontil mark) indicates the glass was hand-blown. A smooth bottom suggests modern manufacturing.</p>

      <h2>Final Thoughts: Knowledge is Power</h2>
      <p>Identifying antiques is a skill that improves with time and practice. By looking at the construction methods (dovetails and screws), analyzing the wear patterns, and double-checking your hunches with tools like the Relico app, you can confidently distinguish between a priceless heirloom and a garage sale knock-off.</p>

      <p>Always do your research—it is the only way to ensure you are buying a true piece of history. Whether you're examining joinery, testing hardware, or using modern technology to decode maker's marks, each verification step brings you closer to becoming a confident collector.</p>

      <div class="bg-gold/10 border border-gold/30 rounded-xl p-6 my-8">
        <p class="text-brown-dark font-semibold mb-2">🎯 Pro Collector Tip</p>
        <p class="text-brown-dark/80 text-sm">The most successful antique hunters combine traditional knowledge with modern tools. Keep a small flashlight, magnifying glass, and your smartphone (with Relico installed) whenever you go treasure hunting. This trio of tools will help you make informed decisions on the spot.</p>
      </div>

      <p>Remember: A true antique has survived 100+ years for a reason—quality craftsmanship, valuable materials, and care from previous owners. When you find the real thing, you're not just buying an object; you're becoming a guardian of history.</p>
    `
  },
  {
    id: "8",
    title: "Free Online Antique Price Guide: How to Value Your Treasures in 2026",
    slug: "free-online-antique-price-guide-value-treasures",
    excerpt: "Discover how to use free online tools to accurately value your antiques. Learn the difference between asking price and sold price, and master the art of finding true market values.",
    author: "Marcus Finley",
    date: "December 30, 2025",
    readTime: "11 min read",
    category: "Valuation",
    imageUrl: "https://images.unsplash.com/photo-1516547375098-9efa2ae4f0c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>Is It Trash or Cash?</h2>
      <p>You've just found an interesting old vase in the attic, or perhaps you bought a unique chair at a garage sale for ten dollars. Now, the big question hits you: Is this trash, or is it cash?</p>

      <p>Finding the true value of an antique used to require hauling heavy items to a stuffy auction house. Today, you can access a free online antique price guide from the comfort of your living room. However, not all guides are created equal. To get an accurate number, you need to know where to look and, more importantly, how to interpret what you find.</p>

      <p>Here is your step-by-step guide to using free online resources to unlock the value of your antiques.</p>

      <h2>The Golden Rule: Asking Price vs. Sold Price</h2>
      <p>Before you start your antique value lookup, you must understand the most common mistake beginners make.</p>

      <p>If you search for your item and see a seller on eBay asking $500 for it, that does <strong>not</strong> mean your item is worth $500. Anyone can ask for any price they want. The only number that matters is what a buyer actually paid.</p>

      <div class="bg-gold/5 border-l-4 border-gold p-6 my-6">
        <p class="text-brown-dark/90 font-semibold mb-2">💡 Remember This:</p>
        <ul class="space-y-2 text-brown-dark/80">
          <li><strong>Asking Price:</strong> A wish. (Ignore this).</li>
          <li><strong>Sold Price:</strong> The reality. (Focus on this).</li>
        </ul>
      </div>

      <h2>Top Free Antique Identification and Value Tools</h2>
      <p>There is no single "magic book" that lists the price of every item in the world, but there are powerful free tools that act as excellent antique price guides.</p>

      <h3>1. eBay "Sold" Listings</h3>
      <p>eBay is arguably the world's largest database of antique market values. It represents what real people are paying right now.</p>

      <p><strong>How to use it:</strong> Search for your item (e.g., "1920s Art Deco lamp"). On the sidebar filters, scroll down and check the box that says "Sold Items". The prices will turn green. This is the true market value.</p>

      <div class="bg-brown-dark/5 rounded-lg p-5 my-6">
        <p class="text-brown-dark/80 text-sm"><strong>Pro Tip:</strong> You can also filter by "Completed Listings" to see items that didn't sell. If many similar items are listed but not selling, it means the market is saturated or the asking prices are too high.</p>
      </div>

      <h3>2. Google Lens (Reverse Image Search)</h3>
      <p>Sometimes you can't look up a price because you don't even know what the item is. This is where antique identification comes first.</p>

      <p><strong>How to use it:</strong> Open the Google app on your phone and tap the camera icon (Google Lens). Snap a photo of your item. Google will visually match it to other images on the web. This often leads you to auction sites or collector forums where the item is named and valued.</p>

      <p class="text-brown-dark/70 italic text-sm mt-3">Note: While Google Lens is helpful for general identification, specialized antique identification apps provide more detailed historical context and accurate valuations specific to the antiques market.</p>

      <h3>3. LiveAuctioneers & Invaluable (Auction Results)</h3>
      <p>For higher-end items (fine art, rare furniture, porcelain), eBay might not be enough. Sites like LiveAuctioneers allow you to view past auction results.</p>

      <p><strong>How to use it:</strong> You typically need to create a free account. Once logged in, you can search their "Past Auctions" database. This is essential for an accurate antique appraisal online free of charge for clearer, high-ticket items.</p>

      <div class="bg-gradient-to-br from-brown-dark/10 via-gold/5 to-brown-dark/5 border-2 border-brown-dark/20 p-8 md:p-12 px-6 md:px-16 my-12 rounded-2xl shadow-lg">
        <div class="text-center mb-8">
          <h3 class="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-3">
            ⚡ Skip the Research—Get Instant Valuations
          </h3>
          <div class="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div class="relative order-2 md:order-1">
            <div class="relative mx-auto max-w-xs">
              <img 
                src="/Assets/ss2.jpg" 
                alt="Relico Instant Valuation Feature" 
                class="rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute -top-4 -left-4 bg-gold text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm">
                Free 3-Day Trial
              </div>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <p class="text-brown-dark/90 text-lg mb-6 leading-relaxed">
              Why spend hours comparing sold listings when you can get instant, accurate valuations? <strong class="text-gold">Relico</strong> combines AI technology with comprehensive antique databases to deliver professional-grade appraisals in seconds.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">📸</span>
                <span class="text-brown-dark/80"><strong>Snap & Identify:</strong> Just take a photo and get instant results</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">💰</span>
                <span class="text-brown-dark/80"><strong>Market Value Ranges:</strong> Based on actual sold prices, not wishful thinking</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">📚</span>
                <span class="text-brown-dark/80"><strong>Historical Context:</strong> Learn the story behind every piece</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">🎯</span>
                <span class="text-brown-dark/80"><strong>Authentication Help:</strong> Spot reproductions and fakes</span>
              </li>
            </ul>
            <div class="bg-gold/10 border border-gold/30 rounded-lg p-4">
              <p class="text-brown-dark/80 text-sm mb-2">
                <strong>Perfect for:</strong> Estate sales, flea markets, online shopping, or evaluating your collection
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
          <p class="text-brown-dark/80 text-center mb-4 font-medium">
            🎁 Start Your Free 3-Day Trial—No Credit Card Required
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 38.5-16.8 53.3-16.8s33.6 16.8 54.7 16.8c32.6 0 65.5-75.8 88.3-124.2-34.9-12.8-64.5-53.5-65.8-88.5zm-48.7-155.4c13.6-16.6 24.5-37.5 21.8-58.7-18.8 1.2-41.4 12.5-55 28.7-11.5 13.5-22.3 36.2-19.4 58 21.9 1.6 41.5-10.8 52.6-28z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                <span class="text-lg font-bold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                <span class="text-lg font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center">
          <p class="text-brown-dark/60 text-sm italic">
            ⭐ Rated 4.8/5 by antique enthusiasts and professional dealers
          </p>
        </div>
      </div>

      <h2>Step-by-Step: How to Value Your Antique</h2>
      <p>Ready to find the number? Follow this workflow to ensure accuracy.</p>

      <h3>Step 1: Inspect for Marks</h3>
      <p>Turn your item over. Look for a maker's mark, a signature, a serial number, or a country of origin stamp. A silver spoon with a "Lion Passant" stamp is worth significantly more than one marked "EPNS" (Electro-Plated Nickel Silver).</p>

      <div class="bg-brown-dark/5 rounded-lg p-5 my-6">
        <p class="text-brown-dark/80 text-sm"><strong>Common Marks to Look For:</strong></p>
        <ul class="mt-3 space-y-2 text-brown-dark/70 text-sm ml-4">
          <li>• Stamped logos or initials on pottery, ceramics, and porcelain</li>
          <li>• Hallmarks on silver (925, Sterling, Lion Passant)</li>
          <li>• Signatures on paintings and prints</li>
          <li>• Labels or branded marks on furniture</li>
          <li>• Patent numbers or dates on vintage items</li>
        </ul>
      </div>

      <h3>Step 2: Assess the Condition</h3>
      <p>Be honest. Does your item have chips, cracks, or rust? In the antique world, condition is everything. A mint-condition comic book might be worth $10,000, while the same book with a torn cover might be worth $100. When comparing your item to online prices, match the condition strictly.</p>

      <div class="bg-gold/5 border-l-4 border-gold p-6 my-6">
        <p class="text-brown-dark/90 font-semibold mb-3">Condition Scale:</p>
        <ul class="space-y-2 text-brown-dark/80 text-sm">
          <li><strong>Mint:</strong> Like new, perfect condition—highest value</li>
          <li><strong>Excellent:</strong> Minor signs of wear, no structural damage</li>
          <li><strong>Good:</strong> Visible wear, minor repairs, but presentable</li>
          <li><strong>Fair:</strong> Noticeable damage, may need restoration</li>
          <li><strong>Poor:</strong> Severely damaged, missing parts—lowest value</li>
        </ul>
      </div>

      <h3>Step 3: Find "Comps" (Comparables)</h3>
      <p>Use the tools mentioned above to find at least three items that sold recently.</p>

      <div class="bg-brown-dark/5 rounded-lg p-6 my-6">
        <p class="text-brown-dark/80 font-semibold mb-3">Example Calculation:</p>
        <ul class="space-y-2 text-brown-dark/70">
          <li>Sold Item A: <span class="text-gold font-semibold">$120</span></li>
          <li>Sold Item B: <span class="text-gold font-semibold">$110</span></li>
          <li>Sold Item C: <span class="text-gold font-semibold">$150</span></li>
          <li class="pt-2 border-t border-brown-dark/20">Your Estimate: <span class="text-gold font-bold text-lg">Roughly $125</span></li>
        </ul>
      </div>

      <p>The more comparables you find, the more accurate your estimate will be. Look for items that match not just the type, but also the age, condition, maker, and size.</p>

      <h2>When Should You Pay for an Appraisal?</h2>
      <p>While a free antique price guide is great for items under $500, there are times you should call a professional. If you suspect you have a rare painting, a piece of diamond jewelry, or an item with significant historical provenance, do not rely solely on Google.</p>

      <p>Professional appraisers provide certified documents that are required for insurance purposes—something a free online search cannot give you.</p>

      <div class="bg-brown-dark/5 rounded-lg p-6 my-6">
        <p class="text-brown-dark/80 font-semibold mb-3">When to Get a Professional Appraisal:</p>
        <ul class="space-y-2 text-brown-dark/70 text-sm ml-4">
          <li>• Items potentially worth over $1,000</li>
          <li>• Insurance documentation needed</li>
          <li>• Estate settlement purposes</li>
          <li>• Tax deduction for charitable donations</li>
          <li>• Legal disputes or divorce settlements</li>
          <li>• Authentication of high-value artwork or collectibles</li>
        </ul>
      </div>

      <p>Look for certified appraisers from organizations like the American Society of Appraisers (ASA) or the International Society of Appraisers (ISA). Expect to pay between $100-$300 per hour, depending on the appraiser's expertise and your location.</p>

      <h2>Common Valuation Mistakes to Avoid</h2>

      <h3>1. Overvaluing Based on Sentimental Attachment</h3>
      <p>Your grandmother's china might be priceless to you emotionally, but if similar sets are selling for $50 online, that's the market value. The market doesn't care about your memories—it only cares about supply, demand, and condition.</p>

      <h3>2. Ignoring the "Comparables" Rule</h3>
      <p>Don't cherry-pick the highest price you find and assume your item is worth that. Look at the average of multiple sold items in similar condition.</p>

      <h3>3. Confusing Retail Price with Resale Value</h3>
      <p>Just because something costs $200 new doesn't mean it will sell for $200 used—even if it's in perfect condition. Most items depreciate unless they're true antiques or highly collectible.</p>

      <h3>4. Not Accounting for Seller Fees</h3>
      <p>If you're planning to sell on eBay, Etsy, or through an auction house, remember they take a cut (usually 10-20%). Factor this into your final valuation.</p>

      <h2>Maximizing Your Antique's Value</h2>

      <h3>Clean Carefully (or Don't Clean at All)</h3>
      <p>For most antiques, <strong>do not clean them</strong> before getting them appraised or selling them. Over-cleaning can remove valuable patina and decrease value. Collectors often prefer items in their original state.</p>

      <p><strong>Exception:</strong> Gentle dusting is usually safe. For anything beyond that, consult an expert first.</p>

      <h3>Document Your Item's History</h3>
      <p>If you have documentation showing where the item came from (a receipt, a letter, a photo of it in your grandparents' home in 1950), this adds <strong>provenance</strong>—which can significantly increase value.</p>

      <h3>Choose the Right Sales Channel</h3>
      <p>Where you sell matters:</p>
      <ul class="space-y-2 my-4">
        <li><strong>eBay:</strong> Best for mid-range items ($50-$500) with broad appeal</li>
        <li><strong>Etsy:</strong> Great for vintage décor and jewelry</li>
        <li><strong>Specialized Auction Houses:</strong> For high-end or rare items</li>
        <li><strong>Facebook Marketplace/Craigslist:</strong> Good for large furniture (avoids shipping)</li>
        <li><strong>Antique Dealers:</strong> Quick cash, but expect to get 40-60% of retail value</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Uncovering the value of your old items is a treasure hunt. By using sold listings and visual search tools, you can instantly become your own appraiser. Start digging through those boxes—you never know when a dusty old trinket might turn out to be a hidden fortune.</p>

      <p>The key is to be methodical: identify your item, assess its condition honestly, find real sold prices (not asking prices), and make an informed decision. Whether you're cleaning out your attic or browsing estate sales, knowledge is your most valuable tool.</p>

      <div class="bg-gold/10 border border-gold/30 rounded-xl p-6 my-8">
        <p class="text-brown-dark font-semibold mb-2">💎 Final Expert Tip</p>
        <p class="text-brown-dark/80 text-sm">Need to identify a tool or coin quickly? Modern identification apps like Relico combine the convenience of Google Lens with the accuracy of professional antique databases. Scan, identify, and get instant valuations—all from your phone. Check out the latest features designed to help you scan and identify your collection in seconds.</p>
      </div>

      <p>Remember: The antique market is constantly changing. What's hot today might cool off tomorrow. Stay informed, keep learning, and enjoy the journey of discovery. Happy treasure hunting!</p>
    `
  },
  {
    id: "9",
    title: "How to Tell If Furniture Is Antique...",
    slug: "how-to-tell-if-furniture-is-antique",
    excerpt: "Use this practical, expert-level checklist to identify true antique furniture, date construction details, spot reproductions, and estimate value with confidence.",
    author: "Clara Wentworth",
    date: "March 25, 2026",
    readTime: "13 min read",
    category: "Identification",
    imageUrl: "https://images.unsplash.com/photo-1606241018160-4985a8ab5dec?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2>How to Tell If Furniture Is Antique: Start with Evidence, Not Hope</h2>
      <p>Finding an old dresser at an estate sale or inheriting a sideboard from family can be exciting, but age claims are often exaggerated. Sellers may call almost anything "antique" if it looks old. In reality, antique identification is not about one clue. It is a process of collecting evidence from construction methods, materials, wear patterns, hardware, and provenance. The more clues align, the stronger your conclusion.</p>

      <p>In strict market terms, furniture is usually considered <strong>antique</strong> when it is at least 100 years old. That means a piece made in 1926 is just entering antique territory in 2026. Pieces younger than that may still be valuable, but they are normally classified as vintage. If you learn to separate age, quality, and condition, you will make far better buying and selling decisions.</p>

      <h2>1. Identify the Style Era Before You Inspect Details</h2>
      <p>Your first step is visual dating. Style gives you a probable period range before you touch a screwdriver or magnifier. A Queen Anne chair, a Victorian carved cabinet, and an Arts and Crafts oak table each reflect different design movements and production habits.</p>

      <p>Look at silhouette, leg shape, ornament level, and proportions. Cabriole legs with pad or ball-and-claw feet may indicate 18th-century influence. Heavily carved dark woods can suggest Victorian tastes. Straight lines and visible joinery often point to Arts and Crafts. However, remember this: style can be copied. Reproduction makers have copied popular periods for over a century, so style alone never confirms age.</p>

      <h2>2. Inspect Joinery: The Most Reliable Dating Clue</h2>
      <p>Joinery often reveals whether furniture was hand-built or factory-produced. Pull out drawers, look behind panels, and inspect underside framing. Machine precision usually signals later manufacturing, while tool variation can suggest earlier handwork.</p>

      <h3>Dovetail Clues</h3>
      <ul>
        <li><strong>Hand-cut dovetails:</strong> Usually uneven in spacing and size, often wider and fewer. These are strong signs of pre-industrial craftsmanship.</li>
        <li><strong>Machine-cut dovetails:</strong> Regular and uniform, often narrow and repetitive. Common in later 19th-century and 20th-century production.</li>
      </ul>

      <p>Do not treat hand-cut dovetails as absolute proof. Many high-end workshops still used hand methods after machines appeared, and some modern boutique makers intentionally mimic old joinery. Your conclusion should always combine multiple checks.</p>

      <h2>3. Read Saw Marks and Tool Marks Like a Timeline</h2>
      <p>Unfinished surfaces are highly informative. Check drawer bottoms, backboards, interior frames, and undersides where refinishing is less likely.</p>

      <ul>
        <li><strong>Straight, irregular saw marks:</strong> Often from pit saws or early hand saws.</li>
        <li><strong>Arced circular marks:</strong> Common after circular saw adoption in the 19th century.</li>
        <li><strong>Uniform planing and sanding:</strong> Usually modern machine finishing.</li>
      </ul>

      <p>Chisel marks, hand-planed waviness, and slight asymmetry are often positive age indicators. Perfectly identical machining across all components is more consistent with newer production. Again, this is probabilistic evidence, not a single final verdict.</p>

      <h2>4. Date the Hardware Correctly</h2>
      <p>Hardware can help or mislead. Pulls, escutcheons, hinges, and locks are frequently replaced during restoration. Still, when hardware appears original and undisturbed, it can support period dating.</p>

      <h3>Screws and Nails</h3>
      <ul>
        <li><strong>Early handmade screws:</strong> Irregular slots, imperfect threads, often blunt ends.</li>
        <li><strong>Machine screws:</strong> Cleaner symmetry and consistent threading.</li>
        <li><strong>Cut nails:</strong> Rectangular profile typical of 19th-century work.</li>
        <li><strong>Modern wire nails and Phillips screws:</strong> Strong evidence of later work or repairs.</li>
      </ul>

      <p>One modern screw does not automatically disqualify a piece. It may simply indicate repair. Look for patterns: are all fasteners modern, or only one hinge replacement? Context matters.</p>

      <h2>5. Evaluate Wood Species and Secondary Woods</h2>
      <p>Primary wood is what you see on show surfaces. Secondary wood appears inside carcasses, drawer sides, or backs. In many antiques, makers used premium visible woods and cheaper hidden woods. The combination can help narrow period and region.</p>

      <p>Common period associations include mahogany in 18th and 19th centuries, walnut in earlier and Victorian revivals, and oak in both early furniture and Arts and Crafts pieces. Pine and poplar are frequent secondary woods in older case furniture. Plywood, particle board, and modern composites usually indicate later manufacture, although they may appear in restored components.</p>

      <h2>6. Distinguish Patina from Artificial Distressing</h2>
      <p>Real age leaves logical wear where humans interact with furniture. Fake age often appears random or theatrical. You should expect more wear on drawer knobs, chair arms, front stretchers, desk edges, and tabletop zones where objects are placed repeatedly.</p>

      <p>Natural patina tends to feel layered and subtle: softened corners, oxidized finishes, and gradual color transitions. Artificial distressing often looks forced, with repetitive scratches in unlikely places and uniform dark wax applied to simulate age. If damage does not match expected use, be skeptical.</p>

      <h2>7. Check the Finish and Surface History</h2>
      <p>Finish chemistry changed over time. Shellac was dominant in many earlier periods; lacquer and synthetic varnishes became common later. A thick glossy polyurethane coat can hide old surfaces and reduce collector value, even when the underlying furniture is genuinely old.</p>

      <p>Inspect hard-to-reach edges for finish buildup, drips, or color transitions. If top surfaces are bright and modern but drawer interiors appear much older, the piece may be antique with later refinishing. That distinction is important because originality strongly affects market value.</p>

      <h2>8. Look for Labels, Stamps, Marks, and Provenance</h2>
      <p>Paper labels, branded stamps, maker plates, and retailer tags can provide excellent clues. Check backboards, drawer interiors, dust panels, and underside rails. Photograph every mark in high resolution and compare it with known maker archives.</p>

      <p>Provenance can increase confidence and value when documentation is credible. Useful evidence includes family inventories, old receipts, appraisal documents, or photographs showing the piece in a dated setting. Provenance should support physical evidence, not replace it.</p>

      <h2>9. Spot Common Reproduction Red Flags</h2>
      <p>Many reproductions are sold honestly, but some are misrepresented. Watch for these warning signs before you buy:</p>
      <ul>
        <li>Perfectly uniform "wear" on edges that should age unevenly.</li>
        <li>Modern screws and hardware throughout the piece with no signs of replacement.</li>
        <li>Artificial wormholes drilled in obvious rows or repeated patterns.</li>
        <li>Mismatched style details from different centuries on one object.</li>
        <li>Fresh glue squeeze-out, modern staples, or synthetic backing materials.</li>
        <li>Seller claims that focus only on story and avoid construction details.</li>
      </ul>

      <h2>10. Build a Practical Scoring Checklist</h2>
      <p>When you evaluate furniture in person, use a repeatable system. A quick scorecard prevents emotional buying and helps you compare pieces objectively.</p>

      <div class="bg-brown-dark/5 border border-brown-dark/10 rounded-xl p-6 my-8">
        <h3 class="text-brown-dark font-serif font-bold mb-4">Antique Probability Scorecard</h3>
        <ul class="space-y-2 text-brown-dark/80 text-sm">
          <li><strong>Joinery:</strong> Hand evidence vs machine uniformity</li>
          <li><strong>Tool marks:</strong> Historic saw/plane patterns present</li>
          <li><strong>Hardware:</strong> Period-correct and likely original</li>
          <li><strong>Wood/secondary wood:</strong> Consistent with claimed era</li>
          <li><strong>Patina:</strong> Logical, use-based wear</li>
          <li><strong>Finish:</strong> Original or sensitively restored</li>
          <li><strong>Marks/provenance:</strong> Credible supporting documents</li>
          <li><strong>Red flags:</strong> Minimal contradiction</li>
        </ul>
        <p class="text-brown-dark/70 text-sm mt-4">If most categories align and contradictions are minor, confidence rises. If several categories conflict, treat the piece as uncertain until further research.</p>
      </div>

      <h2>11. Use Technology as Your Second Opinion</h2>
      <p>Even experienced collectors use digital tools because no one can memorize every maker, mark, and period nuance. The smartest approach combines traditional inspection with fast verification tools while you are still at the sale.</p>

      <div class="bg-gradient-to-br from-gold/10 via-brown-dark/5 to-gold/5 border-2 border-gold/20 p-8 md:p-12 px-6 md:px-16 my-12 rounded-2xl shadow-lg">
        <div class="text-center mb-8">
          <h3 class="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-3">
            Verify Furniture Instantly with Relico
          </h3>
          <div class="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p class="text-brown-dark/90 text-lg mb-6 leading-relaxed">
              When a seller says "early 1800s," you need fast evidence. <strong class="text-gold">Relico</strong> helps you scan construction clues, compare maker details, and get informed value ranges in seconds.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Photograph joinery, hardware, and marks for instant analysis</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Cross-check style and period details before you commit</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Estimate value ranges based on real market behavior</span>
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-3 text-xl">✓</span>
                <span class="text-brown-dark/80">Build confidence when negotiating or deciding to walk away</span>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="relative mx-auto max-w-xs">
              <img
                src="/Assets/ss1.jpg"
                alt="Relico app for antique furniture checks"
                class="rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute -bottom-4 -right-4 bg-gold text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm">
                Fast Verification
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
          <p class="text-brown-dark/80 text-center mb-4 font-medium">
            Compare clues in real time and avoid expensive mistakes.
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 38.5-16.8 53.3-16.8s33.6 16.8 54.7 16.8c32.6 0 65.5-75.8 88.3-124.2-34.9-12.8-64.5-53.5-65.8-88.5zm-48.7-155.4c13.6-16.6 24.5-37.5 21.8-58.7-18.8 1.2-41.4 12.5-55 28.7-11.5 13.5-22.3 36.2-19.4 58 21.9 1.6 41.5-10.8 52.6-28z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                <span class="text-lg font-bold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white rounded-lg px-6 py-3 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-md hover:shadow-xl"
            >
              <svg class="w-6 h-6 mr-3" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                <span class="text-lg font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center">
          <p class="text-brown-dark/60 text-sm italic">
            Use every clue you can, then verify before you buy.
          </p>
        </div>
      </div>

      <h2>12. Understand Condition vs. Authenticity vs. Value</h2>
      <p>A piece can be genuinely antique and still have low value. Value depends on demand, maker reputation, condition, and rarity. A heavily restored common piece may sell for less than a pristine example from a less famous period. Buyers pay for authenticity, but they also pay for desirability and condition quality.</p>

      <p>When pricing, compare sold listings rather than asking prices. Match by dimensions, materials, period, condition level, and region when possible. If your piece has major restoration, disclose it clearly. Transparency increases buyer trust and reduces returns.</p>

      <h2>When to Seek a Professional Appraisal</h2>
      <p>If you suspect high value, uncertain attribution, or legal/insurance needs, get a certified appraiser. Written appraisals are essential for estate settlements, tax documentation, and insurance scheduling. Digital tools are excellent for fast screening, but formal valuation is still the standard for high-stakes decisions.</p>

      <h2>Final Checklist Before You Buy or Sell</h2>
      <ul>
        <li>Photograph all sides, joinery, hardware, and marks.</li>
        <li>Confirm whether hardware appears original or replaced.</li>
        <li>Check for restoration, refinishing, and structural repairs.</li>
        <li>Compare at least three to five sold examples.</li>
        <li>Document provenance and keep copies of every record.</li>
        <li>Use a second-opinion tool before payment.</li>
      </ul>

      <p>Telling if furniture is truly antique is less about intuition and more about disciplined observation. Once you train your eye to read joinery, wood, hardware, finish, and wear as a single story, confidence comes quickly. Over time, you will avoid costly reproductions, recognize quality sooner, and build a collection based on evidence rather than guesswork.</p>

      <p>Approach every piece like a historian and a buyer at the same time. Respect the craft, verify the claims, and keep your standards consistent. That combination is what separates casual browsing from smart collecting.</p>
    `
  }
];

export const blogPosts: BlogPost[] = [...pseoBlogPosts, ...baseBlogPosts];
