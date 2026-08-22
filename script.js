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
const PRODUCTS = [
  { id: "c1", name: "Off White Ceramic Elevated Dish", category: "ceramics", price: 450, desc: "Condition: 10/10, 4.6 inch diameter bowl ,For Dressing tables and to be used as a trinket dish ", tag: "Must Have", featured: true, image: "images/c13.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c13.jpg" },
      { type: "image", src: "images/c13-2.jpg" },
      { type: "video", src: "images/c13.mp4" }
    ] },
  { id: "c2", name: "Eggshell White Stackable Ceramic Servers (Tab Style)", category: "ceramics", price: 1200, desc: "Condition: 10/10 , Set of 4 stackable servers , Stacked:3.8 inch approx ,Single : 1 inch approx . Diameter 4.2 inch approx", tag: null, image: "images/c9.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c9.jpg" },
      { type: "image", src: "images/c9-2.jpg" },
      { type: "video", src: "images/c9.mp4" }
    ] },
  { id: "c3", name: "Hexagonal Trinket Dish", category: "ceramics", price: 350, desc: "Condition: 10/10 , Diameter:4.13 in approx 0.12 in approx height", tag: "Must Have", image: "images/c3.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c3.jpg" },
      { type: "image", src: "images/c3-2.jpg" },
      { type: "video", src: "images/c3.mp4" }
    ] },
  { id: "c4", name: "Vintage Churchill Ports of Call Soup Bowl", category: "ceramics", price: 400, desc: "Condition: 10/10 , Diameter: 6 in approx", tag: " Vinatge", image: "images/c4.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c4.jpg" },
      { type: "image", src: "images/c4-2.jpg" },
      { type: "video", src: "images/c4.mp4" }
    ] },
  { id: "c5", name: "Grey and White Lidded Jar", category: "ceramics", price: 450, desc: "Condition: 10/9 . Height:2.6 in approx , Diameter:3.13 inch approx", tag: null, image: "images/c10.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c10.jpg" },
      { type: "image", src: "images/c10-2.jpg" },
      { type: "video", src: "images/c10.mp4" }
    ] },
  { id: "c6", name: "Ivory Grvay Boat ", category: "ceramics", price: 450, desc: "Condition: 10/8  Made in Staffordshire UK , Swinnertons gravy boat, L:7.28 inch approx, H:2.56 inch approx , W:2.95inch approx", tag: "Vintage", image: "images/c11.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c11.jpg" },
      { type: "image", src: "images/c11-2.jpg" },
      { type: "video", src: "images/c11.mp4" }
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

  { id: "t1", name: "Vinatge IKEA Candle Holder", category: "thrift", price: 300, desc: "Condition: 10/9 Ice Blue VTG Ikea.Diameter:2.95 in approx , Height:1.02 inch approx", tag: "Vintage", featured: true, image: "images/c2.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c2.jpg" },
      { type: "image", src: "images/c2-2.jpg" },
      { type: "video", src: "images/c2.mp4" }
    ] },
  { id: "t2", name: "Jam Shed Vintage Mason Jar", category: "thrift", price: 300, desc: "Condition: 10/10 Dimesion:2.6 x 2.6 x 4.1 inch approx ", tag: null, image: "images/c5.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c5.jpg" },
      { type: "image", src: "images/c5-2.jpg" },
      { type: "video", src: "images/c5.mp4" }
    ] },
  { id: "t3", name: "Airtight Preserving Jar with Lid", category: "thrift", price: 450, desc: "Condition: 10/10 , Airtight for Food, Width:2.13 , Height:6.10", tag: null, image: "images/c1.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c1.jpg" },
      { type: "image", src: "images/c1-2.jpg" },
      { type: "video", src: "images/c1.mp4" }
    ] },
  { id: "t4", name: "Wood Embossed Cottage Jar ", category: "thrift", price: 450, desc: "Condition: 10/8 , Dimension: 7.4x3.14", tag: "One of a kind", image: "images/c7.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c7.jpg" },
      { type: "image", src: "images/c7-2.jpg" },
      { type: "video", src: "images/c7.mp4" }
    ] },
  { id: "t5", name: "Watercolour Paintings By Noel", category: "thrift", price: 400, desc: "Condition: 10/8 ,", tag: "One of a kind", image: "images/c8.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c8.jpg" },
      { type: "image", src: "images/c8-2.jpg" },
      { type: "video", src: "images/c8.mp4" }
    ] },
  { id: "t6", name: "1970s Clear Crystal Lidded Bowl", category: "thrift", price: 500, desc: "Condition: 10/9 , D:4.14 inch approx , H:1.8 ", tag: null, image: "images/c12.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c12.jpg" },
      { type: "image", src: "images/c12-2.jpg" },
      { type: "video", src: "images/c12.mp4" }
    ] },
  { id: "t7", name: "101 Wipe Off Iq Challenges", category: "thrift", price: 500, desc: "Condition: 10/8(a little rough on the exterior of the box), Comes with Duster and mini Marker.", tag: "One of a kind", image: "images/c14.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c14.jpg" },
      { type: "image", src: "images/c14-2.jpg" },
      { type: "video", src: "images/c14.mp4" }
    ] },
  { id: "t8", name: "Pocket-Sized Charades Game", category: "thrift", price: 400, desc: "Condition: 10/10 , about 50 cards in tin box", tag: "One of a kind", image: "images/c15.jpg", stock: 1,
    media: [
      { type: "image", src: "images/c15.jpg" },
      { type: "image", src: "images/c15-2.jpg" },
      { type: "video", src: "images/c15.mp4" }
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

  /* JEWELRY — 4 mockup products. Replace names/prices/desc/media paths
     with your real pieces, or delete any of these you don't need. */
  { id: "j1", name: "Thin Brass Band Ring", category: "jewelry", price: 900, desc: "Adjustable, tarnish-resistant brass.", tag: null, featured: true,
    image: "images/j1-main.jpg",
    media: [
      { type: "image", src: "images/j1-main.jpg" },
      { type: "image", src: "images/j1-side.jpg" },
      { type: "video", src: "images/j1-video.mp4" }
    ],
    stock: 3 },
  { id: "j2", name: "Freshwater Pearl Drop Earrings", category: "jewelry", price: 1400, desc: "Sterling silver hooks, genuine freshwater pearls.", tag: "Must Have",
    image: "images/j2-main.jpg",
    media: [
      { type: "image", src: "images/j2-main.jpg" },
      { type: "image", src: "images/j2-side.jpg" },
      { type: "video", src: "images/j2-video.mp4" }
    ],
    stock: 5 },
  { id: "j3", name: "Layered Coin Necklace", category: "jewelry", price: 1800, desc: "Gold-plated, two-layer chain with coin pendant.", tag: null,
    image: "images/j3-main.jpg",
    media: [
      { type: "image", src: "images/j3-main.jpg" },
      { type: "image", src: "images/j3-side.jpg" },
      { type: "video", src: "images/j3-video.mp4" }
    ],
    stock: 4 },
  { id: "j4", name: "Chunky Knot Bracelet", category: "jewelry", price: 1100, desc: "Adjustable cord, brass knot charm.", tag: "One of a kind",
    image: "images/j4-main.jpg",
    media: [
      { type: "image", src: "images/j4-main.jpg" },
      { type: "image", src: "images/j4-side.jpg" },
      { type: "video", src: "images/j4-video.mp4" }
    ],
    stock: 1 },
];
