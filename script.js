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
  { id: "c5", name: "Grey and White Lidded Jar", category: "ceramics", price: 450, desc: "Condition: 10/9 , Minor chip inside lid . Height:2.6 in approx , Diameter:3.13 inch approx", tag: null, image: "images/c10.jpg", stock: 1,
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
const checkoutConfirmView = document.getElementById("checkoutConfirm");
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
  const inCart = cart[p.id] || 0;
  const stock = stockOf(p.id);
  const soldOut = stock <= 0 && inCart <= 0;
  const maxedOut = inCart >= stock;
  const preorder = isPreorder(p);

  let badgeTag = "";
  if (soldOut) {
    badgeTag = `<span class="card-tag">${exclusiveStatusLabel(p)}</span>`;
  } else if (preorder) {
    badgeTag = `<span class="card-tag card-tag-preorder">Preorder</span>`;
  } else if (p.tag) {
    badgeTag = `<span class="card-tag">${p.tag}</span>`;
  }

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
          <button class="add-btn" data-add="${p.id}" ${soldOut || maxedOut ? "disabled" : ""}>${soldOut ? exclusiveStatusLabel(p) : (maxedOut ? "In cart" : "Add to cart")}</button>
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
   HERO SLIDESHOW — cycles through featured products
   ========================================================================== */
const slideshowTrack = document.getElementById("slideshowTrack");
const slideDots = document.getElementById("slideDots");
let slideIndex = 0;
let slideTimer = null;

function getFeatured() {
  const featured = PRODUCTS.filter(p => p.featured);
  return featured.length ? featured : PRODUCTS.slice(0, 4);
}

function renderSlideshow() {
  const featured = getFeatured();

  slideshowTrack.innerHTML = featured.map((p, i) => `
    <div class="slide${i === 0 ? " is-active" : ""}" data-slide="${i}">
      <div class="slide-icon">${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : CATEGORY_ICON[p.category]}</div>
      <div class="slide-info">
        <p class="slide-eyebrow">${CATEGORY_LABEL[p.category]}</p>
        <h3 class="slide-name">${p.name}</h3>
        <p class="slide-price mono">Rs ${p.price.toLocaleString()}</p>
      </div>
    </div>
  `).join("");

  slideDots.innerHTML = featured.map((_, i) => `
    <button class="slide-dot${i === 0 ? " is-active" : ""}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join("");

  slideDots.querySelectorAll("[data-dot]").forEach(dot => {
    dot.addEventListener("click", () => goToSlide(Number(dot.dataset.dot)));
  });

  slideIndex = 0;
  startSlideTimer();
}

function goToSlide(i) {
  const slides = slideshowTrack.querySelectorAll(".slide");
  const dots = slideDots.querySelectorAll(".slide-dot");
  if (!slides.length) return;
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, idx) => s.classList.toggle("is-active", idx === slideIndex));
  dots.forEach((d, idx) => d.classList.toggle("is-active", idx === slideIndex));
}

function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(slideIndex + 1), 4500);
}

document.getElementById("slidePrev").addEventListener("click", () => { goToSlide(slideIndex - 1); startSlideTimer(); });
document.getElementById("slideNext").addEventListener("click", () => { goToSlide(slideIndex + 1); startSlideTimer(); });

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
  const inCart = cart[p.id] || 0;
  const stock = stockOf(p.id);
  const soldOut = stock <= 0 && inCart <= 0;
  const maxedOut = inCart >= stock;
  const preorder = isPreorder(p);

  document.getElementById("productTitle").textContent = p.name;
  document.getElementById("productBadge").textContent = CATEGORY_LABEL[p.category];

  const tagEl = document.getElementById("productTag");
  let tagText = "";
  if (soldOut) tagText = exclusiveStatusLabel(p);
  else if (preorder) tagText = "Preorder";
  else if (p.tag) tagText = p.tag;
  if (tagText) { tagEl.textContent = tagText; tagEl.hidden = false; } else { tagEl.hidden = true; }

  document.getElementById("productDesc").textContent = p.desc;
  document.getElementById("productPrice").textContent = `Rs ${p.price.toLocaleString()}`;

  const addBtn = document.getElementById("productAddBtn");
  addBtn.disabled = soldOut || maxedOut;
  addBtn.textContent = soldOut ? exclusiveStatusLabel(p) : (maxedOut ? "In cart" : "Add to cart");
  addBtn.onclick = async () => {
    addBtn.disabled = true;
    addBtn.textContent = "Adding…";
    const added = await addToCart(p.id);
    if (!added) renderProducts();
    renderProductModal();
  };

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
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return 0;
  if (isExclusive(p)) {
    // One-of-a-kind: available (1) unless someone else has already
    // claimed it. If it's already sitting in THIS browser's cart, it
    // counts as reserved by us, so it stays selectable/removable here.
    if (cart[id]) return 1;
    return claimedItems.has(id) ? 0 : 1;
  }
  return (p.stock != null) ? p.stock : Infinity;
}

async function addToCart(id) {
  const p = PRODUCTS.find(pp => pp.id === id);
  if (!p) return false;
  const current = cart[id] || 0;
  if (current >= stockOf(id)) return false;

  if (isExclusive(p) && current === 0) {
    const ok = await claimItem(id);
    if (!ok) {
      // Someone else has it — reflect that immediately. We don't know
      // whether it's "sold" or just "reserved" until the next poll, so
      // assume the more likely case (still reserved) for now.
      if (!claimedItems.has(id)) claimedItems.set(id, "reserved");
      return false;
    }
  }

  cart[id] = current + 1;
  saveCart();
  renderCart();
  return true;
}

function setQty(id, qty) {
  qty = Math.min(qty, stockOf(id));
  const p = PRODUCTS.find(pp => pp.id === id);
  const wasInCart = !!cart[id];

  if (qty <= 0) {
    delete cart[id];
    if (wasInCart && p && isExclusive(p)) {
      claimedItems.delete(id);
      releaseItem(id);
    }
  } else {
    cart[id] = qty;
  }
  saveCart();
  renderCart();
  renderProducts();
  if (currentProductId === id) renderProductModal();
}

function removeFromCart(id) {
  const p = PRODUCTS.find(pp => pp.id === id);
  const wasInCart = !!cart[id];
  delete cart[id];
  saveCart();
  renderCart();
  renderProducts();
  if (currentProductId === id) renderProductModal();
  if (wasInCart && p && isExclusive(p)) {
    claimedItems.delete(id);
    releaseItem(id);
  }
}

function cartLines() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === id), qty }))
    .filter(line => line.product);
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
    <div class="cart-item" data-line="${line.product.id}">
      <div class="cart-item-photo">${line.product.image ? `<img src="${line.product.image}" alt="${line.product.name}" loading="lazy">` : CATEGORY_ICON[line.product.category]}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${line.product.name}</p>
        <p class="cart-item-price mono">Rs ${line.product.price.toLocaleString()}</p>
        <div class="cart-item-row-end">
          <div class="qty-stepper">
            <button data-step="-1" aria-label="Decrease quantity">–</button>
            <span>${line.qty}</span>
            <button data-step="1" aria-label="Increase quantity" ${line.qty >= stockOf(line.product.id) ? "disabled" : ""}>+</button>
          </div>
          <button class="cart-item-remove" data-remove>Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  cartSubtotalEl.textContent = `Rs ${cartSubtotal().toLocaleString()}`;
  if (cartDeliveryEl) cartDeliveryEl.textContent = lines.length ? `Rs ${DELIVERY_CHARGE.toLocaleString()}` : `Rs 0`;
  if (cartTotalEl) cartTotalEl.textContent = `Rs ${cartTotal().toLocaleString()}`;

  cartItemsEl.querySelectorAll(".cart-item").forEach(row => {
    const id = row.dataset.line;
    const currentQty = cart[id] || 0;
    row.querySelector('[data-step="-1"]').addEventListener("click", () => setQty(id, currentQty - 1));
    row.querySelector('[data-step="1"]').addEventListener("click", () => setQty(id, currentQty + 1));
    row.querySelector('[data-remove]').addEventListener("click", () => removeFromCart(id));
  });
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
      <span>${line.qty} × ${line.product.name}</span>
      <span class="mono">Rs ${(line.product.price * line.qty).toLocaleString()}</span>
    </div>
  `).join("");
  orderSubtotalEl.textContent = `Rs ${cartSubtotal().toLocaleString()}`;
  orderDeliveryEl.textContent = `Rs ${DELIVERY_CHARGE.toLocaleString()}`;
  orderTotal.textContent = `Rs ${cartTotal().toLocaleString()}`;

  checkoutFormView.hidden = false;
  checkoutConfirmView.hidden = true;
  checkoutOverlay.classList.add("is-open");
  closeCart();
}

function closeCheckout() {
  checkoutOverlay.classList.remove("is-open");
}

checkoutBtn.addEventListener("click", openCheckout);
document.getElementById("checkoutCloseBtn").addEventListener("click", closeCheckout);
checkoutOverlay.addEventListener("click", (e) => { if (e.target === checkoutOverlay) closeCheckout(); });

detailsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = detailsForm.querySelector('button[type="submit"]');
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Placing order…"; }

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
    .map(line => `${line.qty} x ${line.product.name} - Rs ${(line.product.price * line.qty).toLocaleString()}`)
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
  // one-of-a-kind items in it flip from a temporary "reserved" hold to
  // permanently "sold" and gone from stock for good.
  const exclusiveIds = cartLines()
    .map(line => line.product)
    .filter(isExclusive)
    .map(p => p.id);
  await finalizeExclusiveOrder(exclusiveIds);

  document.getElementById("confirmName").textContent = name.split(" ")[0] || "friend";
  document.getElementById("confirmOrderId").textContent = orderId;
  document.getElementById("confirmEmail").textContent = email;

  checkoutFormView.hidden = true;
  checkoutConfirmView.hidden = false;

  cart = {};
  saveCart();
  renderCart();
  renderProducts();
  detailsForm.reset();
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Place order"; }
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
