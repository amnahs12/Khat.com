/* ==========================================================================
   PRODUCTS — edit this list to match your real inventory.
   category must be one of: ceramics | crochet | thrift | stickers
   Prices are in PKR (whole rupees, no decimals).
   image: optional. Path to a photo, e.g. "images/c1.jpg". Leave it out (or
   set to null) and that product will just show its category's line icon
   instead — nothing breaks, so add photos whenever you have them.
   stock: optional. How many you have on hand. Leave it out (or set to null)
   for unlimited/made-to-order items. Once someone's cart hits the stock
   number, the "Add to cart" button disables and the +  stepper stops going
   higher. Set stock to 0 to mark something sold out right away.
   ========================================================================== */
const PRODUCTS = [
  { id: "c1", name: "Off White Ceramic Elevated Dish", category: "ceramics", price: 450, desc: "Condition: 10/10, 4.6 inch diameter bowl ,For Dressing tables and to be used as a trinket dish ", tag: "One of a kind", featured: true, image: "images/c13.jpg", stock: 1 },
  { id: "c2", name: "Eggshell White Stackable Ceramic Servers (Tab Style)", category: "ceramics", price: 1200, desc: "Condition: 10/10 , Set of 4 stackable servers , Stacked:3.8 inch approx ,Single : 1 inch approx . Diameter 4.2 inch approx", tag: null,image: "images/c9.jpg", stock: 1 },
  { id: "c3", name: "Hexagonal Trinket Dish", category: "ceramics", price: 350, desc: "Condition: 10/10 , Diameter:4.13 in approx 0.12 in approx height", tag: "One of a kind",image: "images/c3.jpg", stock: 1 },
  { id: "c4", name: "Vintage Churchill Ports of Call Soup Bowl", category: "ceramics", price: 400, desc: "Condition: 10/10 , Diameter: 6 in approx", tag: null,image: "images/c4.jpg", stock: 1 },
  {id: "c5", name: "Grey and White Lidded Jar", category: "ceramics", price: 450, desc: "Condition: 10/9 . Height:2.6 in approx , Diameter:3.13 inch approx", tag: null,image: "images/c10.jpg", stock: 1 },
  {id: "c6", name: "Ivory Gray Boat ", category: "ceramics", price: 450, desc: "Condition: 10/8  Made in Staffordshire UK , Swinnertons gravy boat, L:7.28 inch approx, H:2.56 inch approx , W:2.95inch approx", tag: null,image: "images/c11.jpg", stock: 1 },

  { id: "r1", name: "Chunky Wool Beanie", category: "crochet", price: 2800, desc: "Merino blend, one size.", tag: null, featured: true, stock: 4 },
  { id: "r2", name: "Granny Square Tote", category: "crochet", price: 3600, desc: "Cotton yarn, lined interior.", tag: "Made to order", stock: null },
  { id: "r3", name: "Market Produce Bag", category: "crochet", price: 1600, desc: "Stretchy net bag, machine washable.", tag: null, stock: 6 },
  { id: "r4", name: "Amigurumi Frog", category: "crochet", price: 2200, desc: "5in stuffed friend.", tag: "One of a kind", stock: 1 },

  { id: "t1", name: "Vinatge IKEA Candle Holder", category: "thrift", price: 300, desc: "Condition: 10/9 Ice Blue VTG Ikea.Diameter:2.95 in approx , Height:1.02 inch approx", tag: "One of a kind", featured: true , image: "images/c2.jpg", stock: 1 },
  { id: "t2", name: "Jam Shed Vintage Mason Jar", category: "thrift", price: 300, desc: "Condition: 10/10 Dimesion:2.6 x 2.6 x 4.1 inch approx ", tag: "One of a kind",image: "images/c5.jpg", stock: 1 },
  { id: "t3", name: "Airtight Preserving Jar with Lid", category: "thrift", price: 450, desc: "Condition: 10/10 , Airtight for Food, Width:2.13 , Height:6.10", tag: null,image:"images/c1.jpg", stock: 1 },
  { id: "t4", name: "Wood Embossed Cottage Jar ", category: "thrift", price: 450, desc: "Condition: 10/8 , Dimension: 7.4x3.14", tag: "One of a kind",image:"images/c7.jpg", stock: 1 },
  {id: "t5", name: "Watercolour Paintings By Noel", category: "thrift", price: 400, desc: "Condition: 10/8 ,", tag: "One of a kind",image:"images/c8.jpg", stock: 1 },
  {id: "t6", name: "1970s Clear Crystal Lidded Bowl", category: "thrift", price: 500, desc: "Condition: 10/9 , D:4.14 inch approx , H:1.8 ", tag: "One of a kind",image:"images/c12.jpg", stock: 1},  
  {id: "t7", name: "101 Wipe Off Iq Challenges", category: "thrift", price: 500, desc: "Condition: 10/8(a little rough on the exterior of the box), Comes with Duster and mini Marker.", tag: "One of a kind",image:"images/c14.jpg", stock: 1 }, 
  {id: "t8", name: "Pocket-Sized Charades Game", category: "thrift", price: 400, desc: "Condition: 10/10 , about 50 cards in tin box", tag: "One of a kind",image:"images/c15.jpg", stock: 1},

  { id: "s1", name: "Frog on a Mushroom", category: "stickers", price: 400, desc: "Waterproof vinyl, 2in.", tag: null, stock: 12 },
  { id: "s2", name: "Mend It Yourself", category: "stickers", price: 400, desc: "Waterproof vinyl, 2.5in.", tag: null, stock: 12 },
  { id: "s3", name: "Little Ceramic Pot", category: "stickers", price: 300, desc: "Waterproof vinyl, 1.5in.", tag: null, stock: 10 },
  { id: "s4", name: "Sticker Pack — Set of 5", category: "stickers", price: 1500, desc: "Assorted shop favorites.", tag: "Bestseller", featured: true, stock: 8 },
];

const CATEGORY_LABEL = { ceramics: "Ceramics", crochet: "Crochet", thrift: "Thrifted", stickers: "Stickers" };

/* Flat delivery charge (PKR) added to every order. Change this one number
   whenever your delivery cost changes — nothing else needs editing. */
const DELIVERY_CHARGE = 250;

/* Minimal line-art icons (no emoji), one per category — inherits color via currentColor */
const CATEGORY_ICON = {
  ceramics: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6h12v6c4 4 6 9 6 14 0 9-7 16-12 16s-12-7-12-16c0-5 2-10 6-14V6z" stroke-linejoin="round"/><path d="M18 6h12" stroke-linecap="round"/></svg>`,
  crochet: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="21" cy="27" r="13"/><path d="M21 15c4 4 4 9 0 12M14 21c4 2 8 2 12 0M13 30c4-2 9-2 13 0" stroke-linecap="round"/><path d="M33 10c2 2 2 5 0 7" stroke-linecap="round"/></svg>`,
  thrift: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8a4 4 0 1 1 4 4l-4 4 18 12H6l18-12-4-4"/><line x1="6" y1="32" x2="42" y2="32"/></svg>`,
  stickers: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 10h20l8 8v20H10V10z"/><path d="M30 10v8h8"/><circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none"/></svg>`,
};

/* ==========================================================================
   STATE
   ========================================================================== */
let currentFilter = "all";
let currentSort = "featured";
let cart = loadCart(); // { [productId]: quantity }

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

  productGrid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.add);
      btn.textContent = "Added";
      btn.classList.add("is-added");
      setTimeout(() => { btn.textContent = "Add to cart"; btn.classList.remove("is-added"); }, 1100);
    });
  });
}

function productCardHTML(p) {
  const inCart = cart[p.id] || 0;
  const soldOut = p.stock != null && p.stock <= 0;
  const maxedOut = p.stock != null && inCart >= p.stock;
  return `
    <article class="card">
      <div class="card-photo">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : CATEGORY_ICON[p.category]}
        <span class="card-badge">${CATEGORY_LABEL[p.category]}</span>
        ${soldOut ? `<span class="card-tag">Sold out</span>` : (p.tag ? `<span class="card-tag">${p.tag}</span>` : "")}
      </div>
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price mono">Rs ${p.price.toLocaleString()}</span>
          <button class="add-btn" data-add="${p.id}" ${soldOut || maxedOut ? "disabled" : ""}>${soldOut ? "Sold out" : (maxedOut ? "In cart" : "Add to cart")}</button>
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
  return (p && p.stock != null) ? p.stock : Infinity;
}

function addToCart(id) {
  const current = cart[id] || 0;
  if (current >= stockOf(id)) return;
  cart[id] = current + 1;
  saveCart();
  renderCart();
}

function setQty(id, qty) {
  qty = Math.min(qty, stockOf(id));
  if (qty <= 0) { delete cart[id]; }
  else { cart[id] = qty; }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
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

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(detailsForm);
  const name = data.get("name");
  const email = data.get("email");

  const orderId = "KH-" + Math.random().toString(36).slice(2, 8).toUpperCase();

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
  // Falls through to the confirmation screen either way — see setup notes
  // for connecting the site to Netlify.
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  }).catch(() => { /* offline/local preview — ignore */ });

  document.getElementById("confirmName").textContent = name.split(" ")[0] || "friend";
  document.getElementById("confirmOrderId").textContent = orderId;
  document.getElementById("confirmEmail").textContent = email;

  checkoutFormView.hidden = true;
  checkoutConfirmView.hidden = false;

  cart = {};
  saveCart();
  renderCart();
  detailsForm.reset();
});

document.getElementById("confirmCloseBtn").addEventListener("click", closeCheckout);

/* ==========================================================================
   INIT
   ========================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
renderSlideshow();