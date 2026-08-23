/* ==========================================================================
   PRODUCTS — edit this list to match your real inventory.
   category must be one of: ceramics | crochet | thrift | stickers | jewelry

   Prices are in PKR (whole rupees, no decimals).

   IMAGES + VIDEOS — two ways to give a product photos:
   1) image: "images/c1.jpg"  → single photo (old style, still works fine).
   2) media: [ ... ]          → a gallery of multiple photos/videos, shown as
      a manual slideshow when someone opens the product. Each entry looks like:
        { type: "image", src: "images/ring1.jpg" }
        { type: "video", src: "images/ring1.mp4" }
      Order in the array = order in the slideshow. If you set "media", it's
      used instead of "image" for the product's own page (the grid thumbnail
      still uses "image", or the first media image if "image" isn't set).
      Leave both out and the product just shows its category's line icon.

   stock: optional. How many you have on hand. Leave it out (or set to null)
   for unlimited/made-to-order items. Once someone's cart hits the stock
   number, the "Add to cart" button disables and the + stepper stops going
   higher. Set stock to 0 to mark something sold out right away.
   NOTE: stock is only used for crochet / stickers / jewelry. Every other
   category (ceramics, thrift, and any new category you add) is treated as
   one-of-a-kind automatically — see the "EXCLUSIVE ITEMS" note lower down.

   tag: optional short label shown on the card ("Vintage", "One of a kind"...).
   Crochet and stickers automatically get a "Preorder" badge as well — no
   need to add it yourself, see PREORDER_CATEGORIES below.
   ========================================================================== */
/* ==========================================================================
   PRODUCTS — with a "media" gallery added to every item, plus 4 mockup
   jewelry products at the bottom.

   IMPORTANT: I don't have your real photo/video filenames, so each
   product's media array below just reuses its existing "image" as the
   first slide, then adds PLACEHOLDER paths for a second photo and a
   video (following the naming pattern from your own example comment,
   e.g. "images/c1-2.jpg", "images/c1.mp4"). Replace those placeholder
   paths with your actual files, or delete the extra entries / the whole
   "media" array for any product that only has one photo — remember: if
   "media" isn't set, the code just falls back to "image" automatically.
   ========================================================================== */

/* RING SIZES + ARTICLE COUNTS — shared by every ring / jewelry product
   below. Change RING_ARTICLE_COUNT or BRACELET_ARTICLE_COUNT here to add
   or remove article-number options everywhere at once.
   RING_SIZES is currently unused (both rings are article-only, no size
   selector) — it's still here, along with the underlying "ring" variant
   type further down, in case you ever want a size dropdown back on a
   ring product; just set that product's variantType to "ring" and give
   it "sizes: RING_SIZES" again. */
const RING_SIZES = ["15.5", "16", "16.5", "17", "17.5", "18", "19/19.5"];
const RING_ARTICLE_COUNT = 25;     // change this one number for every ring product
const BRACELET_ARTICLE_COUNT = 10; // change this one number for every other jewelry product

/* PER-ARTICLE / PER-SIZE STOCK — how many physical pieces you actually
   have of one specific article number (or, for rings, one specific
   size + article combo).

   Every article/combo defaults to a stock of 1 (one-of-a-kind, same as
   before) unless you list it here. You only need to list the ones that
   have MORE than one piece — anything not listed stays at 1.

   ARTICLE-ONLY products (bracelets, handcuff bracelet, necklaces) use an
   object keyed by article number:
     articleStock: { "3": 2, "8": 9 }   // Article 3 has 2 pieces, Article 8 has 9

   RING products use an object keyed by "size__article":
     sizeArticleStock: { "17__3": 2, "18__8": 9 }
     // Size 17 / Article 3 has 2 pieces, Size 18 / Article 8 has 9 pieces
     // (Size 17 / Article 8 and Size 18 / Article 3 are untouched — still 1 each)

   Under the hood each piece of stock gets its own internal claim slot, so
   when two different customers each buy one of Article 3's 2 pieces, the
   first purchase locks only ONE of those two slots — the other stays
   orderable until it's gone too. */

const PRODUCTS = [
  { id: "c1", name: "Off White Ceramic Elevated Dish", category: "ceramics", price: 450, desc: "Condition: 10/10, 4.6 inch diameter bowl ,For Dressing tables and to be used as a trinket dish ", tag: "Must Have", featured: true, image: "images/c13.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c13.jpg" },
      { type: "image", src: "images2/c13-2.webp" }

    ] },
  { id: "c2", name: "Eggshell White Stackable Ceramic Servers (Tab Style)", category: "ceramics", price: 1200, desc: "Condition: 10/10 , Set of 4 stackable servers , Stacked:3.8 inch approx ,Single : 1 inch approx . Diameter 4.2 inch approx", tag: null, image: "images/c9.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c9.jpg" },
      { type: "image", src: "images2/c9-2.webp" },
       { type: "image", src: "images2/c9-3.webp" }
    ] },
  { id: "c3", name: "Hexagonal Trinket Dish", category: "ceramics", price: 350, desc: "Condition: 10/10 , Diameter:4.13 in approx 0.12 in approx height", tag: "Must Have", image: "images/c3.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c3.jpg" },
      { type: "image", src: "images2/c3-2.webp" }
    ] },
  { id: "c4", name: "Vintage Churchill Ports of Call Soup Bowl", category: "ceramics", price: 400, desc: "Condition: 10/10 , Diameter: 6 in approx", tag: " Vinatge", image: "images/c4.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c4.jpg" },
      { type: "image", src: "images2/c4-2.webp" }
      
    ] },
  { id: "c5", name: "Grey and White Lidded Jar", category: "ceramics", price: 450, desc: "Condition: 10/9 , Minor chip inside lid . Height:2.6 in approx , Diameter:3.13 inch approx", tag: null, image: "images/c10.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c10.jpg" },
      { type: "image", src: "images2/c10-2.webp" }
     
    ] },
  { id: "c6", name: "Ivory Grvay Boat ", category: "ceramics", price: 450, desc: "Condition: 10/8  Made in Staffordshire UK , Swinnertons gravy boat, L:7.28 inch approx, H:2.56 inch approx , W:2.95inch approx", tag: "Vintage", image: "images/c11.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c11.jpg" },
      { type: "image", src: "images2/c11-2.webp" }
     
    ] },

    { id: "c7", name: "Vintage Ceramic Money Box ", category: "ceramics", price: 450, desc: "Condition: 10/9 , Reusuable , slight damage to the opener at the bottom but still usable , D:3.14x1.14x2.13 inch approx", tag: "Vintage", image: "images/c6.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c6.jpg" },
      { type: "image", src: "images2/c6-2.webp" }
    ] },
   
  { id: "r1", name: "Chunky Wool Beanie", category: "crochet", price: 2800, desc: "Merino blend, one size.", tag: null, featured: true, stock: 4,
    media: [
      { type: "image", src: "images/r1-1.jpg" },
      { type: "image", src: "images/r1-2.jpg" },
      { type: "video", src: "images/r1.mp4" }
    ] },
  { id: "r2", name: "Granny Square Tote", category: "crochet", price: 3600, desc: "Cotton yarn, lined interior.", tag: "Made to order", stock: null,
    media: [
      { type: "image", src: "images/r2-1.jpg" },
      { type: "image", src: "images/r2-2.jpg" },
      { type: "video", src: "images/r2.mp4" }
    ] },
  { id: "r3", name: "Market Produce Bag", category: "crochet", price: 1600, desc: "Stretchy net bag, machine washable.", tag: null, stock: 6,
    media: [
      { type: "image", src: "images/r3-1.jpg" },
      { type: "image", src: "images/r3-2.jpg" },
      { type: "video", src: "images/r3.mp4" }
    ] },
  { id: "r4", name: "Amigurumi Frog", category: "crochet", price: 2200, desc: "5in stuffed friend.", tag: "One of a kind", stock: 1,
    media: [
      { type: "image", src: "images/r4-1.jpg" },
      { type: "image", src: "images/r4-2.jpg" },
      { type: "video", src: "images/r4.mp4" }
    ] },

  { id: "t1", name: "Vintage IKEA Candle Holder", category: "thrift", price: 300, desc: "Condition: 10/9 Ice Blue VTG Ikea.Diameter:2.95 in approx , Height:1.02 inch approx", tag: "Vintage", featured: true, image: "images/c2.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c2.jpg" },
      { type: "image", src: "images2/c2-2.webp" }
    ] },
  { id: "t2", name: "Jam Shed Vintage Mason Jar", category: "thrift", price: 300, desc: "Condition: 10/10 Dimesion:2.6 x 2.6 x 4.1 inch approx ", tag: null, image: "images/c5.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c5.jpg" },
      { type: "image", src: "images2/c5-2.webp" }
    ] },
  { id: "t3", name: "Airtight Preserving Jar with Lid", category: "thrift", price: 450, desc: "Condition: 10/10 , Airtight for Food, Width:2.13 , Height:6.10", tag: null, image: "images/c1.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c1.jpg" },
      { type: "image", src: "images2/c1-2.webp" }
    ] },
  { id: "t4", name: "Wood Embossed Cottage Jar ", category: "thrift", price: 450, desc: "Condition: 10/8 , Dimension: 7.4x3.14", tag: "One of a kind", image: "images/c7.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c7.jpg" },
      { type: "image", src: "images2/c7-2.webp" }
    ] },
  { id: "t5", name: "Watercolour Paintings By Noel", category: "thrift", price: 400, desc: "Condition: 10/8 ,", tag: "One of a kind", image: "images/c8.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c8.jpg" },
      { type: "image", src: "images2/c8-2.webp" }
    ] },
  { id: "t6", name: "1970s Clear Crystal Lidded Bowl", category: "thrift", price: 500, desc: "Condition: 10/9 , D:4.14 inch approx , H:1.8 ", tag: null, image: "images/c12.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c12.jpg" },
      { type: "image", src: "images2/c12-2.webp" }
    ] },
  { id: "t7", name: "101 Wipe Off IQ Challenges", category: "thrift", price: 500, desc: "Condition: 10/8(a little rough on the exterior of the box), Comes with Duster and mini Marker.", tag: "One of a kind", image: "images/c14.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c14.jpg" },
      { type: "image", src: "images2/c14-2.webp" },
       { type: "image", src: "images2/c14-3.webp" }
    ] },
  { id: "t8", name: "Pocket-Sized Charades Game", category: "thrift", price: 400, desc: "Condition: 10/10 , about 50 cards in tin box", tag: "One of a kind", image: "images/c15.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c15.jpg" },
      { type: "image", src: "images2/c15-2.webp" }
    ] },

  { id: "s1", name: "Frog on a Mushroom", category: "stickers", price: 400, desc: "Waterproof vinyl, 2in.", tag: null, stock: 12,
    media: [
      { type: "image", src: "images/s1-1.jpg" },
      { type: "image", src: "images/s1-2.jpg" },
      { type: "video", src: "images/s1.mp4" }
    ] },
  { id: "s2", name: "Mend It Yourself", category: "stickers", price: 400, desc: "Waterproof vinyl, 2.5in.", tag: null, stock: 12,
    media: [
      { type: "image", src: "images/s2-1.jpg" },
      { type: "image", src: "images/s2-2.jpg" },
      { type: "video", src: "images/s2.mp4" }
    ] },
  { id: "s3", name: "Little Ceramic Pot", category: "stickers", price: 300, desc: "Waterproof vinyl, 1.5in.", tag: null, stock: 10,
    media: [
      { type: "image", src: "images/s3-1.jpg" },
      { type: "image", src: "images/s3-2.jpg" },
      { type: "video", src: "images/s3.mp4" }
    ] },
  { id: "s4", name: "Sticker Pack — Set of 5", category: "stickers", price: 1500, desc: "Assorted shop favorites.", tag: "Bestseller", featured: true, stock: 8,
    media: [
      { type: "image", src: "images/s4-1.jpg" },
      { type: "image", src: "images/s4-2.jpg" },
      { type: "video", src: "images/s4.mp4" }
    ] },

  /* JEWELRY — gold/silver bracelets, a handcuff bracelet, and gold/silver
     rings. Replace names/prices/desc/media paths with your real pieces.

     SIZE + ARTICLE SELECTORS (rings only)
     Rings need TWO choices before they can be added to cart: a ring SIZE
     and an ARTICLE number. Every specific size+article combination (e.g.
     "size 17, article 5") is tracked as its own one-of-a-kind piece —
     once someone adds "size 17 / article 5" to their cart, that exact
     combination locks for everyone else (same system as the thrift/
     ceramics one-of-a-kind items above), while every OTHER size/article
     combo for that same ring stays orderable. A different visitor can
     still buy "size 17 / article 6" or "size 18 / article 5" at the same
     time — this only locks the one exact pairing.

     To give a product this behaviour, set:
       variantType: "ring"        (needs a size + an article number)
       sizes: RING_SIZES           (the 7 sizes defined below)
       articleCount: RING_ARTICLE_COUNT   (how many article numbers, 1..N)

     ARTICLE-ONLY SELECTOR (bracelets & anything else jewelry)
     Every other jewelry product just needs an ARTICLE number (no size).
     Set:
       variantType: "article"
       articleCount: BRACELET_ARTICLE_COUNT

     Change RING_ARTICLE_COUNT / BRACELET_ARTICLE_COUNT below to add or
     remove article numbers for every ring / every other jewelry product
     in one place. To give ONE specific product a different count than
     the rest, just set that product's own articleCount to a different
     number instead of the shared constant. */
  { id: "j1", name: "Gold Bracelet", category: "jewelry", price: 3500, desc: "18k gold-plated, adjustable clasp.", tag: null, featured: true,
    image: "images/j1-main.jpg",
    media: [
      { type: "image", src: "images/j1-main.jpg" },
      { type: "image", src: "images/j1-side.jpg" },
      { type: "video", src: "images/j1-video.mp4" }
    ],
    variantType: "article", articleCount: BRACELET_ARTICLE_COUNT,
    // Example: Article 3 has 2 pieces, Article 8 has 9 pieces. Every other
    // article number (1,2,4,5,6,7,9,10) stays at the default of 1.
    articleStock: { "3": 2, "8": 9 } },

  { id: "j2", name: "Silver Bracelet", category: "jewelry", price: 2800, desc: "Sterling silver, adjustable clasp.", tag: null,
    image: "images/j2-main.jpg",
    media: [
      { type: "image", src: "images/j2-main.jpg" },
      { type: "image", src: "images/j2-side.jpg" },
      { type: "video", src: "images/j2-video.mp4" }
    ],
    variantType: "article", articleCount: BRACELET_ARTICLE_COUNT,
    articleStock: {} },

  { id: "j3", name: "Hand Cuff Bracelet", category: "jewelry", price: 3200, desc: "Open-cuff style, one-size-fits-most.", tag: null,
    image: "images/j3-main.jpg",
    media: [
      { type: "image", src: "images/j3-main.jpg" },
      { type: "image", src: "images/j3-side.jpg" },
      { type: "video", src: "images/j3-video.mp4" }
    ],
    variantType: "article", articleCount: BRACELET_ARTICLE_COUNT,
    articleStock: {} },

  { id: "j4", name: "Gold Ring", category: "jewelry", price: 4200, desc: "18k gold-plated band.", tag: null, featured: true,
    image: "images/j4-main.jpg",
    media: [
      { type: "image", src: "imagesjrg/j4(1).webp" },
      { type: "image", src: "imagesjrg/j4(2).webp" }
    ],
    // No size selector — article number only, same as the bracelets.
    // 25 articles total. Change any single number below to set that
    // article's exact stock; every entry defaults to 1 (one-of-a-kind).
    variantType: "article", articleCount: 25,
    articleStock: {
      "1": 1,
      "2": 1,
      "3": 2,
      "4": 1,
      "5": 1,
      "6": 1,
      "7": 1,
      "8": 9,
      "9": 1,
      "10": 1,
      "11": 1,
      "12": 1,
      "13": 1,
      "14": 1,
      "15": 1,
      "16": 1,
      "17": 1,
      "18": 1,
      "19": 1,
      "20": 1,
      "21": 1,
      "22": 1,
      "23": 1,
      "24": 1,
      "25": 1
    } },

  { id: "j5", name: "Silver Ring", category: "jewelry", price: 3000, desc: "Sterling silver band.", tag: null,
    image: "images/j5-main.jpg",
    media: [
      { type: "image", src: "imagesjrs/j5(1).webp" },
      { type: "image", src: "imagesjrs/j5(2).webp" },
       { type: "image", src: "imagesjrs/j5(3).webp" },
      { type: "image", src: "imagesjrs/j5(4).webp" },{ type: "image", src: "imagesjrs/j5(5).webp" },
       { type: "image", src: "imagesjrs/j5(6).webp" },{ type: "image", src: "imagesjrs/j5(7).webp" }
      ],
    // 126 articles total. Change any single number below to set that
    // article's exact stock; every entry defaults to 1 (one-of-a-kind).
    variantType: "article", articleCount: 126,
    articleStock: {
      "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1, "9": 1, "10": 1,
      "11": 1, "12": 1, "13": 1, "14": 1, "15": 1, "16": 1, "17": 1, "18": 1, "19": 1, "20": 1,
      "21": 1, "22": 1, "23": 1, "24": 1, "25": 1, "26": 1, "27": 1, "28": 1, "29": 1, "30": 1,
      "31": 1, "32": 1, "33": 1, "34": 1, "35": 1, "36": 1, "37": 1, "38": 1, "39": 1, "40": 1,
      "41": 1, "42": 1, "43": 1, "44": 1, "45": 1, "46": 1, "47": 1, "48": 1, "49": 1, "50": 1,
      "51": 1, "52": 1, "53": 1, "54": 1, "55": 1, "56": 1, "57": 1, "58": 1, "59": 1, "60": 1,
      "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1,
      "71": 1, "72": 1, "73": 1, "74": 1, "75": 1, "76": 1, "77": 1, "78": 1, "79": 1, "80": 1,
      "81": 1, "82": 1, "83": 1, "84": 1, "85": 1, "86": 1, "87": 1, "88": 1, "89": 1, "90": 1,
      "91": 1, "92": 1, "93": 1, "94": 1, "95": 1, "96": 1, "97": 1, "98": 1, "99": 1, "100": 1,
      "101": 1, "102": 1, "103": 1, "104": 1, "105": 1, "106": 1, "107": 1, "108": 1, "109": 1, "110": 1,
      "111": 1, "112": 1, "113": 1, "114": 1, "115": 1, "116": 1, "117": 1, "118": 1, "119": 1, "120": 1,
      "121": 1, "122": 1, "123": 1, "124": 1, "125": 1, "126": 1
    } },
  /* NECKLACES — same "jewelry" category as the bracelets/rings above
     (shows up under the same Jewelry filter pill), just a different kind
     of piece. Works exactly like the bracelets: article-only selector,
     and articleStock for any article number that has more than one
     piece. */
  { id: "n1", name: "Gold Chain Necklace", category: "jewelry", price: 3800, desc: "18k gold-plated, adjustable length.", tag: null, featured: true,
    image: "images/n1-main.jpg",
    media: [
      { type: "image", src: "images/n1-main.jpg" },
      { type: "image", src: "images/n1-side.jpg" },
      { type: "video", src: "images/n1-video.mp4" }
    ],
    variantType: "article", articleCount: BRACELET_ARTICLE_COUNT,
    articleStock: {} },

  { id: "n2", name: "Silver Pendant Necklace", category: "jewelry", price: 3200, desc: "Sterling silver chain with pendant.", tag: null,
    image: "images/n2-main.jpg",
    media: [
      { type: "image", src: "images/n2-main.jpg" },
      { type: "image", src: "images/n2-side.jpg" },
      { type: "video", src: "images/n2-video.mp4" }
    ],
    variantType: "article", articleCount: BRACELET_ARTICLE_COUNT,
    articleStock: {} },
];

const CATEGORY_LABEL = { ceramics: "Ceramics", crochet: "Crochet", thrift: "Thrifted", stickers: "Stickers", jewelry: "Jewelry" };

/* Flat delivery charge (PKR) added to every order. Change this one number
   whenever your delivery cost changes — nothing else needs editing. */
const DELIVERY_CHARGE = 250;

/* Minimal line-art icons (no emoji), one per category — inherits color via currentColor */
const CATEGORY_ICON = {
  ceramics: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6h12v6c4 4 6 9 6 14 0 9-7 16-12 16s-12-7-12-16c0-5 2-10 6-14V6z" stroke-linejoin="round"/><path d="M18 6h12" stroke-linecap="round"/></svg>`,
  crochet: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="21" cy="27" r="13"/><path d="M21 15c4 4 4 9 0 12M14 21c4 2 8 2 12 0M13 30c4-2 9-2 13 0" stroke-linecap="round"/><path d="M33 10c2 2 2 5 0 7" stroke-linecap="round"/></svg>`,
  thrift: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8a4 4 0 1 1 4 4l-4 4 18 12H6l18-12-4-4"/><line x1="6" y1="32" x2="42" y2="32"/></svg>`,
  stickers: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 10h20l8 8v20H10V10z"/><path d="M30 10v8h8"/><circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  jewelry: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M14 10h20l6 9-16 19-16-19z"/><path d="M14 10l4 9-4-9zM34 10l-4 9 4-9zM8 19h32M18 19l6 19 6-19"/></svg>`,
};

/* Categories where products are NOT one-of-a-kind — normal per-browser
   stock rules apply (see "stock" field above). Every other category
   (ceramics, thrift, and anything new you add later) is treated as
   EXCLUSIVE below: once one visitor adds it to their cart, it locks for
   everyone else, everywhere, until they remove it or the order ships. */
const NON_EXCLUSIVE_CATEGORIES = ["crochet", "stickers", "jewelry"];

/* Categories that always show a "Preorder" badge, regardless of the
   product's own "tag" field. */
const PREORDER_CATEGORIES = ["crochet", "stickers"];

function isExclusive(p) { return !NON_EXCLUSIVE_CATEGORIES.includes(p.category); }
function isPreorder(p) { return PREORDER_CATEGORIES.includes(p.category); }

/* Label to show on an unavailable exclusive item: "Sold" once someone's
   order for it has actually gone through, "Reserved" while it's just
   sitting in someone else's cart mid-checkout. Non-exclusive items that
   are out of stock always just say "Sold out". */
function exclusiveStatusLabel(p) {
  if (!isExclusive(p)) return "Sold out";
  return claimedItems.get(p.id) === "sold" ? "Sold" : "Reserved";
}

/* ==========================================================================
   VARIANT SELECTORS (rings: size + article / other jewelry: article only)

   A specific size+article (or article-only) combination is tracked the
   exact same way as a one-of-a-kind thrift/ceramics item — a "claim" in
   Netlify Blobs that's temporarily "reserved" on add-to-cart and becomes
   permanently "sold" once an order for it completes (see the EXCLUSIVE-
   ITEM CLAIMS section below). The only difference is the id we claim: for
   variants it's a composite id built from the product + the exact size/
   article chosen, e.g. "j4__17__05", instead of just the product id.
   ========================================================================== */
function hasVariants(p) { return p.variantType === "ring" || p.variantType === "article"; }
function isRingVariant(p) { return p.variantType === "ring"; }

/* Builds the composite claim/cart key for one exact size+article (or
   article-only) combination of a variant product. */
function variantKey(p, size, article) {
  return isRingVariant(p) ? `${p.id}__${size}__${article}` : `${p.id}__${article}`;
}

/* Given a cart/claim key, figures out which product (and, for variant
   keys, which size/article) it refers to. Works for plain product ids too. */
function parseCartKey(key) {
  const parts = key.split("__");
  const product = PRODUCTS.find(pp => pp.id === parts[0]);
  if (!product) return { product: null };
  if (hasVariants(product) && isRingVariant(product) && parts.length >= 3) {
    return { product, size: parts[1], article: parts[2] };
  }
  if (hasVariants(product) && !isRingVariant(product) && parts.length >= 2) {
    return { product, article: parts[1] };
  }
  return { product };
}

/* Every possible size+article (or article-only) combination a variant
   product can be ordered in. */
function allVariantCombos(p) {
  const combos = [];
  if (isRingVariant(p)) {
    for (const size of p.sizes) {
      for (let a = 1; a <= p.articleCount; a++) combos.push({ size, article: String(a) });
    }
  } else if (hasVariants(p)) {
    for (let a = 1; a <= p.articleCount; a++) combos.push({ article: String(a) });
  }
  return combos;
}

/* How many physical pieces exist for one exact combo — looks it up in
   the product's articleStock (article-only) or sizeArticleStock (rings)
   override table, defaulting to 1 (one-of-a-kind) if not listed. */
function stockForCombo(p, combo) {
  if (isRingVariant(p)) {
    const map = p.sizeArticleStock || {};
    const val = map[`${combo.size}__${combo.article}`];
    return (val != null && val > 0) ? val : 1;
  }
  if (hasVariants(p)) {
    const map = p.articleStock || {};
    const val = map[combo.article];
    return (val != null && val > 0) ? val : 1;
  }
  return 1;
}

/* One combo (e.g. "Article 3", or "Size 17 / Article 3") can represent
   more than one physical piece. Internally, each piece gets its own
   claim slot — "j1__3__u1", "j1__3__u2", etc. — so it can be claimed,
   released, and sold independently of its siblings, using the exact
   same one-of-a-kind claim system as ceramics/thrift (no backend
   changes needed). This returns every unit slot for a combo. */
function comboUnitKeys(p, combo) {
  const base = variantKey(p, combo.size, combo.article);
  const stock = stockForCombo(p, combo);
  const keys = [];
  for (let u = 1; u <= stock; u++) keys.push(`${base}__u${u}`);
  return keys;
}

/* Is this exact combo still orderable? True if at least one of its unit
   slots is sitting in THIS browser's own cart (we're already holding
   it), or if at least one unit slot hasn't been claimed by anyone else
   yet. */
function isComboAvailable(p, combo) {
  const units = comboUnitKeys(p, combo);
  if (units.some(u => cart[u])) return true;
  return units.some(u => !claimedItems.has(u));
}

function productHasAnyAvailableCombo(p) {
  return allVariantCombos(p).some(c => isComboAvailable(p, c));
}

/* ==========================================================================
   STATE
   ========================================================================== */
let currentFilter = "all";
let currentSort = "featured";
let cart = loadCart(); // { [productId]: quantity }

/* IDs currently claimed by ANY visitor, for exclusive-category items —
   a Map of id -> "reserved" | "sold". "reserved" means it's sitting in
   someone's cart mid-checkout (temporary, expires if abandoned); "sold"
   means an order for it was actually completed (permanent). Loaded from
   /.netlify/functions/claimed-items and refreshed periodically so
   everyone's view stays roughly in sync. */
let claimedItems = new Map();

/* ==========================================================================
   ELEMENTS
   ========================================================================== */
const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyMsg = document.getElementById("cartEmptyMsg");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDeliveryEl = document.getElementById("cartDelivery");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const checkoutFormView = document.getElementById("checkoutForm");
const checkoutPaymentView = document.getElementById("checkoutPayment");
const checkoutConfirmView = document.getElementById("checkoutConfirm");
const paymentAckCheckbox = document.getElementById("paymentAckCheckbox");
const paymentSentBtn = document.getElementById("paymentSentBtn");
const orderSummary = document.getElementById("orderSummary");
const orderSubtotalEl = document.getElementById("orderSubtotal");
const orderDeliveryEl = document.getElementById("orderDelivery");
const orderTotal = document.getElementById("orderTotal");
const detailsForm = document.getElementById("detailsForm");

const productOverlay = document.getElementById("productOverlay");
const productSlideTrack = document.getElementById("productSlideTrack");
const productSlideDots = document.getElementById("productSlideDots");
const productSlidePrev = document.getElementById("productSlidePrev");
const productSlideNext = document.getElementById("productSlideNext");

/* ==========================================================================
   PRODUCT RENDERING
   ========================================================================== */
function getVisibleProducts() {
  let list = currentFilter === "all"
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentFilter);

  switch (currentSort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break; // featured = original order
  }
  return list;
}

function renderProducts() {
  const list = getVisibleProducts();

  resultCount.textContent = currentFilter === "all"
    ? `Showing all ${list.length} pieces`
    : `Showing ${list.length} in ${CATEGORY_LABEL[currentFilter]}`;

  emptyState.hidden = list.length !== 0;
  productGrid.innerHTML = list.map(productCardHTML).join("");

  productGrid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-add]")) return;
      openProduct(card.dataset.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProduct(card.dataset.id);
      }
    });
  });

  productGrid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.dataset.add;
      const p = PRODUCTS.find(pp => pp.id === id);

      // Variant products (rings, and other jewelry with an article
      // selector) can't be added straight from the grid — they need a
      // size/article chosen first, so just open the product page instead.
      if (p && hasVariants(p)) {
        openProduct(id);
        return;
      }

      btn.disabled = true;
      btn.textContent = "Adding…";
      const added = await addToCart(id);
      if (added) {
        btn.textContent = "Added";
        btn.classList.add("is-added");
      } else {
        btn.textContent = "Just sold";
      }
      setTimeout(() => { renderProducts(); }, 900);
    });
  });
}

function productCardHTML(p) {
  const variant = hasVariants(p);
  const inCart = variant ? 0 : (cart[p.id] || 0);
  const stock = variant ? null : stockOf(p.id);
  const soldOut = variant ? !productHasAnyAvailableCombo(p) : (stock <= 0 && inCart <= 0);
  const maxedOut = variant ? false : (inCart >= stock);
  const preorder = isPreorder(p);

  let badgeTag = "";
  if (soldOut) {
    badgeTag = `<span class="card-tag">${variant ? "Sold out" : exclusiveStatusLabel(p)}</span>`;
  } else if (preorder) {
    badgeTag = `<span class="card-tag card-tag-preorder">Preorder</span>`;
  } else if (p.tag) {
    badgeTag = `<span class="card-tag">${p.tag}</span>`;
  }

  const addLabel = soldOut
    ? (variant ? "Sold out" : exclusiveStatusLabel(p))
    : variant
      ? (isRingVariant(p) ? "Choose size & article" : "Choose article")
      : (maxedOut ? "In cart" : "Add to cart");

  return `
    <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      <div class="card-photo">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : CATEGORY_ICON[p.category]}
        <span class="card-badge">${CATEGORY_LABEL[p.category]}</span>
        ${badgeTag}
      </div>
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price mono">Rs ${p.price.toLocaleString()}</span>
          <button class="add-btn${variant ? " add-btn-select" : ""}" data-add="${p.id}" ${soldOut ? "disabled" : ""}>${addLabel}</button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   FILTER + SORT CONTROLS
   ========================================================================== */
document.querySelectorAll(".pill").forEach(pill => {
  pill.addEventListener("click", () => {
    currentFilter = pill.dataset.filter;
    document.querySelectorAll(".pill").forEach(p => p.classList.toggle("is-active", p === pill));
    renderProducts();
  });
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

/* ==========================================================================
   HERO SLIDESHOW — small square-thumbnail product carousel. Several
   fixed-size 1:1 cards (same visual treatment as the main product grid
   cards — object-fit: cover, never stretched) sit side by side inside a
   fixed frame, scroll-snapped, and paged with the prev/next arrows or the
   dots below (one dot per page of cards, not per individual card).
   Clicking a card opens that product's detail modal, same as the grid.
   ========================================================================== */
const slideshowTrack = document.getElementById("slideshowTrack");
const slideDots = document.getElementById("slideDots");
let slidePage = 0;
let slidePageCount = 1;
let slidePerView = 1;
let slideTimer = null;

function getFeatured() {
  const featured = PRODUCTS.filter(p => p.featured);
  return featured.length ? featured : PRODUCTS.slice(0, 8);
}

function renderSlideshow() {
  const items = getFeatured();

  slideshowTrack.innerHTML = items.map(p => `
    <button class="slide-card" type="button" data-product-id="${p.id}" aria-label="View ${p.name}">
      <div class="slide-card-photo">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : CATEGORY_ICON[p.category]}
      </div>
      <p class="slide-card-name">${p.name}</p>
      <p class="slide-card-price mono">Rs ${p.price.toLocaleString()}</p>
    </button>
  `).join("");

  slideshowTrack.querySelectorAll(".slide-card").forEach(card => {
    card.addEventListener("click", () => openProduct(card.dataset.productId));
  });

  slideshowTrack.addEventListener("scroll", onSlideshowScroll, { passive: true });
  window.addEventListener("resize", recalcSlidePaging);

  slidePage = 0;
  recalcSlidePaging();
  startSlideTimer();
}

/* Works out how many small cards fit in the visible frame at once, and
   how many "pages" that makes — recalculated on load and on resize so it
   stays correct at any screen width. */
function recalcSlidePaging() {
  const cards = slideshowTrack.querySelectorAll(".slide-card");
  if (!cards.length) { slidePageCount = 1; renderSlideDots(); return; }

  const gap = parseFloat(getComputedStyle(slideshowTrack).columnGap || "14") || 14;
  const cardWidth = cards[0].getBoundingClientRect().width;
  const step = cardWidth + gap;
  const viewportWidth = slideshowTrack.clientWidth;

  slidePerView = Math.max(1, Math.floor((viewportWidth + gap) / step));
  slidePageCount = Math.max(1, Math.ceil(cards.length / slidePerView));
  slidePage = Math.min(slidePage, slidePageCount - 1);
  renderSlideDots();
}

function renderSlideDots() {
  slideDots.innerHTML = Array.from({ length: slidePageCount }).map((_, i) => `
    <button class="slide-dot${i === slidePage ? " is-active" : ""}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join("");
  slideDots.querySelectorAll("[data-dot]").forEach(dot => {
    dot.addEventListener("click", () => { goToSlide(Number(dot.dataset.dot)); startSlideTimer(); });
  });
}

function pageScrollLeft(page) {
  const cards = slideshowTrack.querySelectorAll(".slide-card");
  if (!cards.length) return 0;
  const idx = Math.min(page * slidePerView, cards.length - 1);
  return cards[idx].offsetLeft;
}

function goToSlide(page) {
  slidePage = (page + slidePageCount) % slidePageCount;
  slideshowTrack.scrollTo({ left: pageScrollLeft(slidePage), behavior: "smooth" });
  renderSlideDots();
}

/* Keeps the dots in sync if someone drags/swipes the carousel by hand
   instead of using the arrows. */
let scrollSettleTimer = null;
function onSlideshowScroll() {
  clearTimeout(scrollSettleTimer);
  scrollSettleTimer = setTimeout(() => {
    const cards = slideshowTrack.querySelectorAll(".slide-card");
    if (!cards.length) return;
    const scrollLeft = slideshowTrack.scrollLeft;
    let nearestIdx = 0;
    let nearestDist = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.offsetLeft - scrollLeft);
      if (dist < nearestDist) { nearestDist = dist; nearestIdx = i; }
    });
    slidePage = Math.min(Math.floor(nearestIdx / slidePerView), slidePageCount - 1);
    renderSlideDots();
  }, 120);
}

function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(slidePage + 1), 4500);
}

document.getElementById("slidePrev").addEventListener("click", () => { goToSlide(slidePage - 1); startSlideTimer(); });
document.getElementById("slideNext").addEventListener("click", () => { goToSlide(slidePage + 1); startSlideTimer(); });

const slideshowEl = document.getElementById("slideshow");
slideshowEl.addEventListener("mouseenter", () => clearInterval(slideTimer));
slideshowEl.addEventListener("mouseleave", startSlideTimer);

/* ==========================================================================
   PRODUCT DETAIL MODAL — opened by clicking a card. Shows a manual
   (no autoplay) slideshow through every image/video in the product's
   "media" gallery, or falls back to its single "image" / category icon.
   ========================================================================== */
let currentProductId = null;
let productSlideIndex = 0;

function getMedia(p) {
  if (p.media && p.media.length) return p.media;
  if (p.image) return [{ type: "image", src: p.image }];
  return [{ type: "icon" }];
}

function openProduct(id) {
  const p = PRODUCTS.find(pp => pp.id === id);
  if (!p) return;
  currentProductId = id;
  productSlideIndex = 0;
  renderProductModal();
  productOverlay.classList.add("is-open");
}

function closeProduct() {
  productOverlay.classList.remove("is-open");
  productSlideTrack.querySelectorAll("video").forEach(v => v.pause());
  currentProductId = null;
}

function renderProductModal() {
  const p = PRODUCTS.find(pp => pp.id === currentProductId);
  if (!p) return;

  const media = getMedia(p);
  const variant = hasVariants(p);
  const preorder = isPreorder(p);

  const soldOutWhole = variant
    ? !productHasAnyAvailableCombo(p)
    : (stockOf(p.id) <= 0 && !(cart[p.id] || 0));

  document.getElementById("productTitle").textContent = p.name;
  document.getElementById("productBadge").textContent = CATEGORY_LABEL[p.category];

  const tagEl = document.getElementById("productTag");
  let tagText = "";
  if (soldOutWhole) tagText = variant ? "Sold out" : exclusiveStatusLabel(p);
  else if (preorder) tagText = "Preorder";
  else if (p.tag) tagText = p.tag;
  if (tagText) { tagEl.textContent = tagText; tagEl.hidden = false; } else { tagEl.hidden = true; }

  document.getElementById("productDesc").textContent = p.desc;
  document.getElementById("productPrice").textContent = `Rs ${p.price.toLocaleString()}`;

  const variantsEl = document.getElementById("productVariants");
  const addBtn = document.getElementById("productAddBtn");

  if (variant) {
    if (soldOutWhole) {
      variantsEl.hidden = true;
      variantsEl.innerHTML = "";
      addBtn.onclick = null;
      addBtn.disabled = true;
      addBtn.textContent = "Sold out";
    } else {
      variantsEl.hidden = false;
      variantsEl.innerHTML = buildVariantSelectorsHTML(p);
      wireVariantSelectors(p); // sets addBtn's label/disabled state + onclick
    }
  } else {
    variantsEl.hidden = true;
    variantsEl.innerHTML = "";
    const inCart = cart[p.id] || 0;
    const stock = stockOf(p.id);
    const soldOut = stock <= 0 && inCart <= 0;
    const maxedOut = inCart >= stock;
    addBtn.disabled = soldOut || maxedOut;
    addBtn.textContent = soldOut ? exclusiveStatusLabel(p) : (maxedOut ? "In cart" : "Add to cart");
    addBtn.onclick = async () => {
      addBtn.disabled = true;
      addBtn.textContent = "Adding…";
      const added = await addToCart(p.id);
      if (!added) renderProducts();
      renderProductModal();
    };
  }

  productSlideTrack.innerHTML = media.map((m, i) => `
    <div class="p-slide${i === 0 ? " is-active" : ""}" data-p-slide="${i}">
      ${m.type === "video" ? `<video src="${m.src}" controls playsinline></video>` :
        m.type === "image" ? `<img src="${m.src}" alt="${p.name}" loading="lazy">` :
        `<div class="p-slide-icon">${CATEGORY_ICON[p.category]}</div>`}
    </div>
  `).join("");

  productSlideDots.innerHTML = media.length > 1 ? media.map((_, i) => `
    <button class="slide-dot${i === 0 ? " is-active" : ""}" data-p-dot="${i}" aria-label="Go to item ${i + 1}"></button>
  `).join("") : "";

  productSlideDots.querySelectorAll("[data-p-dot]").forEach(dot => {
    dot.addEventListener("click", () => goToProductSlide(Number(dot.dataset.pDot)));
  });

  productSlidePrev.hidden = media.length <= 1;
  productSlideNext.hidden = media.length <= 1;
  productSlideIndex = 0;
}

/* Builds the markup for a variant product's selector row: a size <select>
   (rings only) plus an article <select>. Options are populated/refreshed
   in wireVariantSelectors() below, since article availability depends on
   which size is picked (for rings). */
function buildVariantSelectorsHTML(p) {
  const sizeField = isRingVariant(p) ? `
    <label class="variant-field">
      <span>Size</span>
      <select id="variantSize">
        <option value="">Choose size…</option>
        ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
      </select>
    </label>` : "";

  return `
    <div class="variant-fields${isRingVariant(p) ? "" : " variant-fields-single"}">
      ${sizeField}
      <label class="variant-field">
        <span>Article no.</span>
        <select id="variantArticle"><option value="">Choose article…</option></select>
      </label>
    </div>
  `;
}

/* Wires up the size/article <select> elements: populates article options
   (disabling any exact combo someone else already has), keeps the Add to
   cart button's label/enabled-state in sync with the current selection,
   and handles the actual add-to-cart click. */
function wireVariantSelectors(p) {
  const sizeSel = document.getElementById("variantSize");
  const articleSel = document.getElementById("variantArticle");
  const addBtn = document.getElementById("productAddBtn");

  function currentSelection() {
    return {
      size: isRingVariant(p) ? (sizeSel ? sizeSel.value : "") : null,
      article: articleSel ? articleSel.value : "",
    };
  }

  function updateAddButtonState() {
    const { size, article } = currentSelection();
    const ready = isRingVariant(p) ? !!(size && article) : !!article;
    if (!ready) {
      addBtn.disabled = true;
      addBtn.textContent = isRingVariant(p) ? "Choose size & article" : "Choose an article";
      return;
    }
    const available = isComboAvailable(p, { size, article });
    addBtn.disabled = !available;
    addBtn.textContent = available ? "Add to cart" : "Just taken — pick another";
  }

  function refreshArticleOptions() {
    const size = isRingVariant(p) ? (sizeSel ? sizeSel.value : "") : null;

    if (isRingVariant(p) && !size) {
      articleSel.innerHTML = `<option value="">Choose size first…</option>`;
      articleSel.disabled = true;
      updateAddButtonState();
      return;
    }

    articleSel.disabled = false;
    const opts = [`<option value="">Choose article…</option>`];
    for (let a = 1; a <= p.articleCount; a++) {
      const article = String(a);
      const available = isComboAvailable(p, { size, article });
      opts.push(`<option value="${article}" ${available ? "" : "disabled"}>Article ${article}${available ? "" : " — taken"}</option>`);
    }
    articleSel.innerHTML = opts.join("");
    updateAddButtonState();
  }

  addBtn.onclick = async () => {
    const { size, article } = currentSelection();
    if (!article || (isRingVariant(p) && !size)) return;
    addBtn.disabled = true;
    addBtn.textContent = "Adding…";
    const added = await addToCart(p.id, { size, article });
    if (!added) renderProducts();
    renderProductModal(); // fresh selectors + up-to-date availability, ready to add another
  };

  if (sizeSel) sizeSel.addEventListener("change", refreshArticleOptions);
  articleSel.addEventListener("change", updateAddButtonState);

  refreshArticleOptions();
}

function goToProductSlide(i) {
  const p = PRODUCTS.find(pp => pp.id === currentProductId);
  if (!p) return;
  const media = getMedia(p);
  if (!media.length) return;

  // pause any playing video on the slide we're leaving
  const leaving = productSlideTrack.querySelector(`[data-p-slide="${productSlideIndex}"] video`);
  if (leaving) leaving.pause();

  productSlideIndex = (i + media.length) % media.length;
  productSlideTrack.querySelectorAll(".p-slide").forEach((s, idx) => s.classList.toggle("is-active", idx === productSlideIndex));
  productSlideDots.querySelectorAll(".slide-dot").forEach((d, idx) => d.classList.toggle("is-active", idx === productSlideIndex));
}

productSlidePrev.addEventListener("click", () => goToProductSlide(productSlideIndex - 1));
productSlideNext.addEventListener("click", () => goToProductSlide(productSlideIndex + 1));
document.getElementById("productCloseBtn").addEventListener("click", closeProduct);
productOverlay.addEventListener("click", (e) => { if (e.target === productOverlay) closeProduct(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productOverlay.classList.contains("is-open")) closeProduct();
});

/* ==========================================================================
   EXCLUSIVE-ITEM CLAIMS — talks to Netlify Functions so a one-of-a-kind
   item (crochet, thrift, ...) locks for everyone else the moment someone
   adds it to their cart, WITHOUT going permanently out of stock until
   their order actually completes:

     add to cart        → temporary "reserved" claim (expires automatically
                           if the order is never finished — see
                           netlify/functions/cleanup-expired-claims.mjs,
                           which runs on a schedule and sweeps these up)
     checkout completes  → claim is upgraded to permanent "sold"
     removed from cart   → reservation is released immediately

   Requires the functions in netlify/functions/ to be deployed — if
   they're missing, calls fail open and the site falls back to the old
   "local browser only" behaviour.
   ========================================================================== */
async function claimItem(id) {
  try {
    const res = await fetch("/.netlify/functions/claim-item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return !!data.ok;
  } catch (err) {
    console.error("Claim request failed:", err);
    return false;
  }
}

function releaseItem(id) {
  fetch("/.netlify/functions/release-item", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  }).catch(err => console.error("Release request failed:", err));
}

/* Called only once a checkout actually completes — turns each exclusive
   item's temporary reservation into a permanent "sold" claim. */
async function finalizeExclusiveOrder(ids) {
  if (!ids.length) return;
  try {
    await fetch("/.netlify/functions/finalize-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    });
  } catch (err) {
    console.error("Could not finalize sold items:", err);
  }
  ids.forEach(id => claimedItems.set(id, "sold"));
}

async function fetchClaimedItems() {
  try {
    const res = await fetch("/.netlify/functions/claimed-items");
    if (!res.ok) return;
    const data = await res.json();
    claimedItems = new Map((data.claimed || []).map(c => [c.id, c.status]));
    renderProducts();
    renderCart();
    if (currentProductId) renderProductModal();
  } catch (err) {
    console.error("Could not load claimed items:", err);
  }
}

/* ==========================================================================
   SEQUENTIAL ORDER NUMBERS — talks to
   netlify/functions/next-order-number.mjs, which keeps a single shared
   counter in Netlify Blobs so orders come out 1001, 1002, 1003, ...
   instead of random codes, and never collide even if two people check
   out at the same moment.

   If the function can't be reached for some reason (not deployed yet,
   a network hiccup), we fall back to the old random ID so a checkout
   can never get stuck — you'd just see one oddly-formatted order number
   that day instead of a break in the sequence.
   ========================================================================== */
async function getNextOrderNumber() {
  try {
    const res = await fetch("/.netlify/functions/next-order-number", { method: "POST" });
    if (!res.ok) return null;
    const data = await res.json();
    return (data && data.ok && data.orderNumber) ? data.orderNumber : null;
  } catch (err) {
    console.error("Could not get sequential order number, falling back:", err);
    return null;
  }
}

/* ==========================================================================
   CART — persisted to localStorage so it survives a page reload
   ========================================================================== */
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("khattCart")) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem("khattCart", JSON.stringify(cart));
}

function stockOf(id) {
  const parsed = parseCartKey(id);
  const p = parsed.product;
  if (!p) return 0;

  if (parsed.size != null || parsed.article != null) {
    // A specific size+article (or article-only) combo — same one-of-a-
    // kind logic as an exclusive product, just keyed by the combo instead
    // of the product itself.
    if (cart[id]) return 1;
    return claimedItems.has(id) ? 0 : 1;
  }

  if (isExclusive(p)) {
    // One-of-a-kind: available (1) unless someone else has already
    // claimed it. If it's already sitting in THIS browser's cart, it
    // counts as reserved by us, so it stays selectable/removable here.
    if (cart[id]) return 1;
    return claimedItems.has(id) ? 0 : 1;
  }
  return (p.stock != null) ? p.stock : Infinity;
}

/* variant: { size, article } — only needed for products where
   hasVariants(p) is true. Ignored otherwise. */
async function addToCart(id, variant = null) {
  const p = PRODUCTS.find(pp => pp.id === id);
  if (!p) return false;

  if (hasVariants(p)) {
    if (!variant || !variant.article || (isRingVariant(p) && !variant.size)) return false;
    return addVariantToCart(p, variant);
  }

  const key = id;
  const current = cart[key] || 0;
  if (current >= stockOf(key)) return false;

  const needsClaim = isExclusive(p);
  if (needsClaim && current === 0) {
    const ok = await claimItem(key);
    if (!ok) {
      // Someone else has it — reflect that immediately. We don't know
      // whether it's "sold" or just "reserved" until the next poll, so
      // assume the more likely case (still reserved) for now.
      if (!claimedItems.has(key)) claimedItems.set(key, "reserved");
      return false;
    }
  }

  cart[key] = current + 1;
  saveCart();
  renderCart();
  return true;
}

/* Claims one physical unit of a size+article (or article-only) combo.
   Tries each of the combo's unit slots in turn — skipping any we
   already hold or the server says is taken — so when a combo has more
   than one piece in stock, different buyers each land on a different
   piece instead of colliding on a single shared claim. The specific
   unit key that wins (e.g. "j1__3__u2") is what actually lives in the
   cart from here on, and is what gets released/finalized later. */
async function addVariantToCart(p, variant) {
  const units = comboUnitKeys(p, variant);
  for (const unitKey of units) {
    if (cart[unitKey]) continue;             // we already hold this exact piece
    if (claimedItems.has(unitKey)) continue; // someone else already has it (per our last poll)
    const ok = await claimItem(unitKey);
    if (ok) {
      cart[unitKey] = 1;
      saveCart();
      renderCart();
      return true;
    }
    // Lost the race for this particular piece — mark it taken and try the next one.
    claimedItems.set(unitKey, "reserved");
  }
  return false; // every piece of this combo is spoken for
}

function setQty(key, qty) {
  qty = Math.min(qty, stockOf(key));
  const parsed = parseCartKey(key);
  const p = parsed.product;
  const isVariantLine = parsed.size != null || parsed.article != null;
  const wasInCart = !!cart[key];
  const needsRelease = isVariantLine || (p && isExclusive(p));

  if (qty <= 0) {
    delete cart[key];
    if (wasInCart && needsRelease) {
      claimedItems.delete(key);
      releaseItem(key);
    }
  } else {
    cart[key] = qty;
  }
  saveCart();
  renderCart();
  renderProducts();
  if (p && currentProductId === p.id) renderProductModal();
}

function removeFromCart(key) {
  const parsed = parseCartKey(key);
  const p = parsed.product;
  const isVariantLine = parsed.size != null || parsed.article != null;
  const wasInCart = !!cart[key];
  const needsRelease = isVariantLine || (p && isExclusive(p));

  delete cart[key];
  saveCart();
  renderCart();
  renderProducts();
  if (p && currentProductId === p.id) renderProductModal();
  if (wasInCart && needsRelease) {
    claimedItems.delete(key);
    releaseItem(key);
  }
}

function cartLines() {
  return Object.entries(cart)
    .map(([key, qty]) => {
      const parsed = parseCartKey(key);
      if (!parsed.product) return null;
      const variantInfo = (parsed.size != null || parsed.article != null)
        ? { size: parsed.size || null, article: parsed.article }
        : null;
      return { key, product: parsed.product, variant: variantInfo, qty };
    })
    .filter(Boolean);
}

function cartSubtotal() {
  return cartLines().reduce((sum, line) => sum + line.product.price * line.qty, 0);
}

function cartTotal() {
  const lines = cartLines();
  if (lines.length === 0) return 0;
  return cartSubtotal() + DELIVERY_CHARGE;
}

function renderCart() {
  const lines = cartLines();
  const totalQty = lines.reduce((n, l) => n + l.qty, 0);

  cartCountEl.textContent = totalQty;
  cartEmptyMsg.hidden = lines.length !== 0;
  checkoutBtn.disabled = lines.length === 0;

  cartItemsEl.innerHTML = lines.map(line => `
    <div class="cart-item" data-line="${line.key}">
      <div class="cart-item-photo">${line.product.image ? `<img src="${line.product.image}" alt="${line.product.name}" loading="lazy">` : CATEGORY_ICON[line.product.category]}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${line.product.name}${variantLabelHTML(line.variant)}</p>
        <p class="cart-item-price mono">Rs ${line.product.price.toLocaleString()}</p>
        <div class="cart-item-row-end">
          ${line.variant
            ? `<span class="qty-fixed">Qty: 1</span>`
            : `<div class="qty-stepper">
                <button data-step="-1" aria-label="Decrease quantity">–</button>
                <span>${line.qty}</span>
                <button data-step="1" aria-label="Increase quantity" ${line.qty >= stockOf(line.product.id) ? "disabled" : ""}>+</button>
              </div>`}
          <button class="cart-item-remove" data-remove>Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  cartSubtotalEl.textContent = `Rs ${cartSubtotal().toLocaleString()}`;
  if (cartDeliveryEl) cartDeliveryEl.textContent = lines.length ? `Rs ${DELIVERY_CHARGE.toLocaleString()}` : `Rs 0`;
  if (cartTotalEl) cartTotalEl.textContent = `Rs ${cartTotal().toLocaleString()}`;

  cartItemsEl.querySelectorAll(".cart-item").forEach(row => {
    const key = row.dataset.line;
    const currentQty = cart[key] || 0;
    const stepMinus = row.querySelector('[data-step="-1"]');
    const stepPlus = row.querySelector('[data-step="1"]');
    if (stepMinus) stepMinus.addEventListener("click", () => setQty(key, currentQty - 1));
    if (stepPlus) stepPlus.addEventListener("click", () => setQty(key, currentQty + 1));
    row.querySelector('[data-remove]').addEventListener("click", () => removeFromCart(key));
  });
}

/* Small " — Size 17, Article 5" / " — Article 5" suffix for cart rows. */
function variantLabelHTML(variant) {
  if (!variant) return "";
  const parts = [];
  if (variant.size) parts.push(`Size ${variant.size}`);
  parts.push(`Article ${variant.article}`);
  return ` <span class="cart-item-variant">— ${parts.join(", ")}</span>`;
}

/* ==========================================================================
   CART DRAWER open/close
   ========================================================================== */
function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  drawerOverlay.classList.add("is-open");
}
function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  drawerOverlay.classList.remove("is-open");
}
document.getElementById("cartOpenBtn").addEventListener("click", openCart);
document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
drawerOverlay.addEventListener("click", closeCart);

/* ==========================================================================
   CHECKOUT MODAL
   ========================================================================== */
function openCheckout() {
  if (cartLines().length === 0) return;

  orderSummary.innerHTML = cartLines().map(line => `
    <div class="order-summary-row">
      <span>${line.qty} × ${line.product.name}${variantLabelHTML(line.variant)}</span>
      <span class="mono">Rs ${(line.product.price * line.qty).toLocaleString()}</span>
    </div>
  `).join("");
  orderSubtotalEl.textContent = `Rs ${cartSubtotal().toLocaleString()}`;
  orderDeliveryEl.textContent = `Rs ${DELIVERY_CHARGE.toLocaleString()}`;
  orderTotal.textContent = `Rs ${cartTotal().toLocaleString()}`;

  checkoutFormView.hidden = false;
  checkoutPaymentView.hidden = true;
  checkoutConfirmView.hidden = true;
  paymentAckCheckbox.checked = false;
  paymentSentBtn.disabled = true;
  checkoutOverlay.classList.add("is-open");
  closeCart();
}

function closeCheckout() {
  checkoutOverlay.classList.remove("is-open");
}

checkoutBtn.addEventListener("click", openCheckout);
document.getElementById("checkoutCloseBtn").addEventListener("click", closeCheckout);
checkoutOverlay.addEventListener("click", (e) => { if (e.target === checkoutOverlay) closeCheckout(); });

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!detailsForm.reportValidity()) return;

  // Shipping details are valid — move to the payment step. Nothing is
  // submitted or claimed permanently yet; that only happens once they
  // tick the box confirming they understand the order only ships after
  // payment is received, and click Confirm order.
  document.getElementById("paymentTotal").textContent = `Rs ${cartTotal().toLocaleString()}`;
  checkoutFormView.hidden = true;
  checkoutPaymentView.hidden = false;
});

document.getElementById("paymentBackBtn").addEventListener("click", () => {
  checkoutPaymentView.hidden = true;
  checkoutFormView.hidden = false;
});

document.getElementById("paymentCloseBtn").addEventListener("click", closeCheckout);

paymentAckCheckbox.addEventListener("change", () => {
  paymentSentBtn.disabled = !paymentAckCheckbox.checked;
});

paymentSentBtn.addEventListener("click", async (e) => {
  const confirmBtn = e.currentTarget;
  confirmBtn.disabled = true;
  confirmBtn.textContent = "Confirming…";

  const data = new FormData(detailsForm);

  // Explicitly ensure JavaScript is passing the exact matching name to Netlify
  data.set("form-name", "CustomerOrder-form");

  const name = data.get("name");
  const email = data.get("email");

  // Sequential order number (1001, 1002, ...) from the shared counter in
  // Netlify Blobs. Falls back to the old random code only if that call
  // fails, so a checkout is never blocked by it.
  const orderNumber = await getNextOrderNumber();
  const orderId = orderNumber != null
    ? String(orderNumber)
    : "PK-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  // Build a readable order summary and stash it in the hidden "order-details"
  // field so it shows up inside the Netlify notification email.
  const summaryText = cartLines()
    .map(line => {
      const variantText = line.variant
        ? ` (${[line.variant.size ? `Size ${line.variant.size}` : null, `Article ${line.variant.article}`].filter(Boolean).join(", ")})`
        : "";
      return `${line.qty} x ${line.product.name}${variantText} - Rs ${(line.product.price * line.qty).toLocaleString()}`;
    })
    .join("\n");
  data.set("order-id", orderId);
  data.set("order-details",
    `Order ${orderId}\n\n${summaryText}\n\nSubtotal: Rs ${cartSubtotal().toLocaleString()}` +
    `\nDelivery: Rs ${DELIVERY_CHARGE.toLocaleString()}\nTotal: Rs ${cartTotal().toLocaleString()}`
  );

  // Submit to Netlify Forms so you get an email notification per order.
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
  .then((response) => {
    if (response.ok) {
      console.log("Netlify received the order successfully!");
    } else {
      console.error("Netlify form submission failed status:", response.status);
    }
  })
  .catch((error) => {
    console.error("Network error during submission:", error);
  });

  // The order is now actually going through — THIS is the moment any
  // one-of-a-kind items (or one-of-a-kind size/article combos) in it
  // flip from a temporary "reserved" hold to permanently "sold" and gone
  // from stock for good.
  const exclusiveIds = cartLines()
    .filter(line => line.variant || isExclusive(line.product))
    .map(line => line.key);
  await finalizeExclusiveOrder(exclusiveIds);

  document.getElementById("confirmName").textContent = name.split(" ")[0] || "friend";
  document.getElementById("confirmOrderId").textContent = orderId;
  document.getElementById("confirmEmail").textContent = email;

  checkoutPaymentView.hidden = true;
  checkoutConfirmView.hidden = false;

  cart = {};
  saveCart();
  renderCart();
  renderProducts();
  detailsForm.reset();
  confirmBtn.disabled = false;
  confirmBtn.textContent = "Confirm order";
});

document.getElementById("confirmCloseBtn").addEventListener("click", closeCheckout);

/* ==========================================================================
   INIT
   ========================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
renderSlideshow();
fetchClaimedItems();
setInterval(fetchClaimedItems, 20000); // keep availability in sync across visitors
