/* ════════════════════════════════════════
   VAULTT — Main JavaScript
   ════════════════════════════════════════ */

// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1, name: "ProSound ANC Headphones", category: "electronics",
    price: 249.99, originalPrice: 349.99, rating: 4.8, reviews: 312,
    badge: "Best Seller", emoji: "🎧", color: "#1a1a2e",
    description: "Industry-leading active noise cancellation with 30-hour battery life. Premium 40mm drivers deliver rich, immersive sound. Foldable design with plush ear cushions for all-day comfort.",
    features: ["30hr Battery Life", "ANC Technology", "Bluetooth 5.2", "Fast Charging"]
  },
  {
    id: 2, name: "Minimal Leather Watch", category: "fashion",
    price: 189.00, originalPrice: null, rating: 4.9, reviews: 156,
    badge: "New", emoji: "⌚", color: "#2e1a0e",
    description: "Timeless minimalist design with genuine Italian leather strap. Sapphire crystal glass, water-resistant to 50m. A statement piece that complements every outfit.",
    features: ["Sapphire Crystal", "Italian Leather", "50m Water Resistant", "2yr Warranty"]
  },
  {
    id: 3, name: "Smart Home Hub Pro", category: "electronics",
    price: 129.99, originalPrice: 179.99, rating: 4.6, reviews: 89,
    badge: "Sale", emoji: "🏠", color: "#0e1a2e",
    description: "Control your entire smart home from one device. Compatible with 10,000+ devices. Voice control via Alexa, Google Assistant, and Siri.",
    features: ["Voice Control", "10K+ Devices", "Zigbee & Z-Wave", "App Control"]
  },
  {
    id: 4, name: "Organic Linen Shirt", category: "fashion",
    price: 85.00, originalPrice: null, rating: 4.7, reviews: 203,
    badge: null, emoji: "👔", color: "#2e2a1a",
    description: "Crafted from 100% certified organic linen. Breathable, lightweight, and effortlessly stylish. Pre-washed for an instant soft feel. Available in 8 versatile colors.",
    features: ["100% Organic Linen", "Pre-washed Soft", "8 Colors", "Sustainable"]
  },
  {
    id: 5, name: "Ceramic Pour-Over Set", category: "home",
    price: 65.00, originalPrice: null, rating: 4.9, reviews: 441,
    badge: "Top Rated", emoji: "☕", color: "#1a2e1a",
    description: "Handcrafted ceramic pour-over dripper with matching carafe and mug. Brews the perfect cup every time. Each piece is unique with natural glaze variations.",
    features: ["Handcrafted Ceramic", "350ml Carafe", "Dishwasher Safe", "Gift Ready"]
  },
  {
    id: 6, name: "Trail Runner Pro X", category: "sports",
    price: 155.00, originalPrice: 195.00, rating: 4.5, reviews: 178,
    badge: "Sale", emoji: "👟", color: "#1e1a2e",
    description: "Built for the toughest terrain. Carbon fiber shank for stability, Vibram outsole for grip. Waterproof GORE-TEX membrane.",
    features: ["GORE-TEX Waterproof", "Vibram Outsole", "Carbon Shank", "Drop 8mm"]
  },
  {
    id: 7, name: "Wireless Charging Pad", category: "electronics",
    price: 49.99, originalPrice: 69.99, rating: 4.4, reviews: 265,
    badge: null, emoji: "⚡", color: "#0e0e0e",
    description: "15W fast wireless charging for all Qi-enabled devices. Slim 5mm profile with anti-slip surface. Charges through cases up to 5mm thick.",
    features: ["15W Fast Charge", "Qi Compatible", "Anti-slip Surface", "Charges Through Cases"]
  },
  {
    id: 8, name: "Merino Wool Sweater", category: "fashion",
    price: 120.00, originalPrice: null, rating: 4.8, reviews: 92,
    badge: "New", emoji: "🧥", color: "#1a1a1a",
    description: "Premium extra-fine Merino wool, sourced from New Zealand. Temperature-regulating, naturally odor-resistant, and incredibly soft against skin.",
    features: ["Extra-fine Merino", "Temperature Regulating", "Anti-odor", "Machine Washable"]
  },
  {
    id: 9, name: "Bamboo Yoga Mat", category: "sports",
    price: 78.00, originalPrice: null, rating: 4.7, reviews: 334,
    badge: null, emoji: "🧘", color: "#1a2e1a",
    description: "Eco-friendly natural rubber base with bamboo fabric surface. Superior grip in hot or sweaty conditions. 4mm thick for joint protection.",
    features: ["Natural Rubber Base", "Bamboo Surface", "4mm Thickness", "Carry Strap"]
  },
  {
    id: 10, name: "Artisan Soy Candle Set", category: "home",
    price: 55.00, originalPrice: null, rating: 4.6, reviews: 188,
    badge: null, emoji: "🕯️", color: "#2e1a0e",
    description: "Hand-poured soy wax candles in three signature scents. 45-hour burn time each. Packaged in beautiful reusable glass jars.",
    features: ["Hand-poured Soy Wax", "3 Signature Scents", "45hr Burn Time", "Reusable Jars"]
  },
  {
    id: 11, name: "4K Action Camera", category: "electronics",
    price: 299.00, originalPrice: 379.00, rating: 4.5, reviews: 127,
    badge: "Sale", emoji: "📷", color: "#0e1a2e",
    description: "Capture life at 4K/60fps with stunning 20MP photo resolution. Waterproof to 10m without housing. Built-in stabilization eliminates camera shake.",
    features: ["4K/60fps Video", "20MP Photos", "Waterproof 10m", "Built-in Stabilization"]
  },
  {
    id: 12, name: "Linen Throw Pillow Set", category: "home",
    price: 48.00, originalPrice: null, rating: 4.8, reviews: 256,
    badge: null, emoji: "🛋️", color: "#2e2a1a",
    description: "Set of 2 handwoven linen throw pillows with removable, washable covers. Natural earth-tone palette. Hypoallergenic recycled fiber fill.",
    features: ["Set of 2", "Removable Covers", "Hypoallergenic Fill", "Hand-woven"]
  }
];

const FAQS = [
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy. Items must be in their original condition with tags attached. Simply contact our support team and we'll guide you through the process."
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3–5 business days. Express shipping (1–2 business days) is available for an additional fee. Free standard shipping on all orders over $75."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! We ship to over 50 countries worldwide. International shipping typically takes 7–14 business days. Additional customs fees may apply depending on your country."
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package in real-time on our website or the carrier's site."
  },
  {
    q: "Are your products authentic?",
    a: "Absolutely. Every product sold on VAULTT is 100% authentic and sourced directly from verified manufacturers. We have a zero-tolerance policy for counterfeits."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are SSL-secured."
  }
];

// ════════════════════════════════════════
// ROUTING
// ════════════════════════════════════════
function showPage(page, cat) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'home') {
    renderFeatured();
  }

  if (page === 'products') {
    if (cat) {
      const radio = document.querySelector(`input[name="cat"][value="${cat}"]`);
      if (radio) radio.checked = true;
    } else {
      const allRadio = document.querySelector('input[name="cat"][value="all"]');
      if (allRadio) allRadio.checked = true;
    }
    applyFilters();
  }

  if (page === 'contact') {
    renderFAQs();
    setTimeout(initObserver, 100);
  }
}

// ════════════════════════════════════════
// NAVBAR SCROLL
// ════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// ════════════════════════════════════════
// CART
// ════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('vaultt_cart') || '[]');

function saveCart() {
  localStorage.setItem('vaultt_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartDrawer();
}

function updateQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); renderCartDrawer(); }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartDrawer();
}

function getTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function getCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartUI() {
  const el = document.getElementById('cartCount');
  const count = getCount();
  el.textContent = count;
  el.style.display = count > 0 ? 'flex' : 'none';
}

function renderCartDrawer() {
  const itemsEl = document.getElementById('cartItems');
  const footEl  = document.getElementById('cartFoot');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-bag">🛍️</div>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started</p>
        <button class="btn-p" onclick="closeCart(); showPage('products')">Shop Now</button>
      </div>`;
    footEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-emoji" style="background:${item.color}">${item.emoji}</div>
      <div class="ci-info">
        <h5>${item.name}</h5>
        <span class="ci-price">$${item.price.toFixed(2)}</span>
      </div>
      <div class="ci-actions">
        <button onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateQty(${item.id}, 1)">+</button>
        <button class="rm" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </div>`).join('');

  const total = getTotal();
  footEl.innerHTML = `
    <div class="cart-sub">
      <span>Subtotal (${getCount()} items)</span>
      <strong>$${total.toFixed(2)}</strong>
    </div>
    <div class="cart-ship">
      ${total >= 75
        ? '<span class="free-ship">✓ Free shipping applied!</span>'
        : '<span>Free shipping on orders over $75</span>'}
    </div>
    <button class="btn-p btn-full" style="margin-top:4px"
      onclick="showToast('🎉 Checkout coming soon!'); closeCart()">
      Proceed to Checkout →
    </button>
    <button class="btn-g btn-full" onclick="clearCart()">Clear Cart</button>`;
}

function openCart() {
  renderCartDrawer();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOv').classList.remove('open');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════
// PRODUCTS
// ════════════════════════════════════════
function renderStars(r) {
  let s = '★'.repeat(Math.floor(r));
  if (r % 1 >= 0.5) s += '½';
  s += '☆'.repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0));
  return s;
}

function productCard(p) {
  const disc = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : null;
  return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="prod-img" style="background:${p.color}">
        <span class="prod-emoji">${p.emoji}</span>
        ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
        ${disc   ? `<div class="prod-disc">-${disc}%</div>` : ''}
        <button class="quick-add"
          onclick="event.stopPropagation(); addToCart(${p.id})">
          + Add to Cart
        </button>
      </div>
      <div class="prod-info">
        <div class="prod-cat">${p.category}</div>
        <h3 class="prod-name">${p.name}</h3>
        <div class="prod-rating">
          <span class="stars-sm">${renderStars(p.rating)}</span>
          <span class="rev-count">(${p.reviews})</span>
        </div>
        <div class="prod-price">
          <span class="price-cur">$${p.price.toFixed(2)}</span>
          ${p.originalPrice
            ? `<span class="price-orig">$${p.originalPrice.toFixed(2)}</span>`
            : ''}
        </div>
      </div>
    </div>`;
}

function animateCards(container) {
  container.querySelectorAll('.product-card').forEach((c, i) => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(24px)';
    setTimeout(() => {
      c.style.transition = 'opacity .4s ease, transform .4s ease';
      c.style.opacity = '1';
      c.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

function renderFeatured() {
  const g = document.getElementById('featuredGrid');
  if (!g) return;
  const featured = PRODUCTS.filter(p => p.badge || p.rating >= 4.7).slice(0, 4);
  g.innerHTML = featured.map(productCard).join('');
  animateCards(g);
  initObserver();
}

// ── FILTERS ──
let maxPrice = 500;

function updatePrice(v) {
  maxPrice = parseInt(v);
  document.getElementById('priceLabel').textContent = '$' + v;
  applyFilters();
}

function applyFilters() {
  const cat    = document.querySelector('input[name="cat"]:checked')?.value || 'all';
  const rating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || '0');
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const sort   = document.getElementById('sortSelect')?.value || 'default';

  let list = PRODUCTS.filter(p => {
    if (cat !== 'all' && p.category !== cat) return false;
    if (p.price > maxPrice) return false;
    if (p.rating < rating) return false;
    if (search &&
        !p.name.toLowerCase().includes(search) &&
        !p.description.toLowerCase().includes(search)) return false;
    return true;
  });

  if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);
  else if (sort === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));

  const g   = document.getElementById('productsGrid');
  const noR = document.getElementById('noResults');
  const rc  = document.getElementById('resultsCount');
  if (!g) return;

  if (list.length === 0) {
    g.innerHTML = '';
    noR.classList.remove('hidden');
  } else {
    noR.classList.add('hidden');
    g.innerHTML = list.map(productCard).join('');
    animateCards(g);
  }

  if (rc) rc.textContent = `${list.length} product${list.length !== 1 ? 's' : ''} found`;
}

function resetFilters() {
  document.querySelector('input[name="cat"][value="all"]').checked = true;
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  document.getElementById('priceRange').value = 500;
  document.getElementById('priceLabel').textContent = '$500';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'default';
  maxPrice = 500;
  applyFilters();
}

// ════════════════════════════════════════
// MODAL
// ════════════════════════════════════════
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const disc = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : null;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img" style="background:${p.color}">
      <span class="modal-emoji">${p.emoji}</span>
      ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
      ${disc    ? `<div class="prod-disc">-${disc}%</div>`   : ''}
    </div>
    <div class="modal-details">
      <div class="prod-cat">${p.category}</div>
      <h2>${p.name}</h2>
      <div class="modal-rating">
        <span class="stars-sm">${renderStars(p.rating)}</span>
        <span class="rev-count">${p.rating} · ${p.reviews} reviews</span>
      </div>
      <div class="modal-price">
        <span class="price-cur lg">$${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="price-orig">$${p.originalPrice.toFixed(2)}</span>` : ''}
        ${disc ? `<span class="disc-tag">Save ${disc}%</span>` : ''}
      </div>
      <p class="modal-desc">${p.description}</p>
      <ul class="feat-list">
        ${p.features.map(f => `<li>✓ ${f}</li>`).join('')}
      </ul>
      <div class="modal-actions">
        <button class="btn-p btn-full"
          onclick="addToCart(${p.id}); closeModal()">
          Add to Cart →
        </button>
        <button class="btn-g" onclick="closeModal()">Continue Shopping</button>
      </div>
    </div>`;

  document.getElementById('prodModal').classList.add('open');
  document.getElementById('modalOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('prodModal').classList.remove('open');
  document.getElementById('modalOv').classList.remove('open');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════
// CONTACT / FAQ
// ════════════════════════════════════════
function renderFAQs() {
  const g = document.getElementById('faqGrid');
  if (!g || g.innerHTML) return;
  g.innerHTML = FAQS.map(f => `
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">
        ${f.q}
        <span class="faq-arr">↓</span>
      </button>
      <div class="faq-ans"><p>${f.a}</p></div>
    </div>`).join('');
}

function toggleFaq(btn) {
  const item   = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('formSuccess').classList.remove('hidden');
  }, 1200);
}

function resetContactForm() {
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').classList.remove('hidden');
  document.getElementById('formSuccess').classList.add('hidden');
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Send Message →';
  btn.disabled = false;
}

// ════════════════════════════════════════
// INTERSECTION OBSERVER
// ════════════════════════════════════════
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stat, .testi-card, .info-card')
    .forEach(el => obs.observe(el));
}

// ════════════════════════════════════════
// TOAST
// ════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  renderFeatured();
  setTimeout(initObserver, 300);
});
