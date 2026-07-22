const products = [
  {
    id: "lavender-sabbath",
    name: "Lavender Sabbath",
    category: "jar",
    price: 289,
    tag: "Lavender original",
    description: "Lavender essential oil, rosemary, and cedar leaf.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    alt: "A softly glowing candle in a glass jar"
  },
  {
    id: "jasmine-prayer",
    name: "Jasmine Prayer",
    category: "jar",
    price: 319,
    tag: "Floral herb",
    description: "Jasmine absolute, lavender, and geranium leaf.",
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=85",
    alt: "A natural candle beside green foliage"
  },
  {
    id: "rosemary-renewal",
    name: "Rosemary Renewal",
    category: "jar",
    price: 279,
    tag: "Herbal fresh",
    description: "Rosemary, eucalyptus, and sage essential oils.",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=85",
    alt: "A softly glowing jar candle in the evening"
  },
  {
    id: "lavender-pillar",
    name: "Lavender Garden Pillar",
    category: "pillar",
    price: 199,
    tag: "Slow burn",
    description: "Lavender essential oil with a quiet herbal finish.",
    image: "https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?auto=format&fit=crop&w=800&q=85",
    alt: "Lit pillar candles beside dried botanicals"
  },
  {
    id: "lemongrass-grace",
    name: "Lemongrass Grace",
    category: "jar",
    price: 269,
    tag: "Bright herb",
    description: "Lemongrass, basil, and lavender essential oils.",
    image: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=800&q=85",
    alt: "A warm votive candle burning at the edge of a bath"
  },
  {
    id: "eucalyptus-peace",
    name: "Eucalyptus Peace",
    category: "jar",
    price: 279,
    tag: "Clear air",
    description: "Eucalyptus, spearmint, and rosemary essential oils.",
    image: "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=800&q=85",
    alt: "White candles and a reed diffuser on fresh linen"
  },
  {
    id: "lavender-prayer-set",
    name: "Lavender Prayer Set",
    category: "gift",
    price: 649,
    tag: "Gift set",
    description: "Three botanical votives: lavender, jasmine, and rosemary.",
    image: "https://images.unsplash.com/photo-1611800065908-233b597db552?auto=format&fit=crop&w=800&q=85",
    alt: "A trio of botanical candles arranged for a quiet ritual"
  },
  {
    id: "centurion-garden-set",
    name: "Centurion Garden Set",
    category: "gift",
    price: 699,
    tag: "Local favourite",
    description: "Lavender candle, 10 ml oil blend, and a handwritten blessing.",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=800&q=85",
    alt: "A bright table set with candles and fresh botanicals"
  },
  {
    id: "lavender-essential-oil",
    name: "Lavender Essential Oil",
    category: "oil",
    price: 149,
    tag: "10 ml",
    description: "Lavender oil for a diffuser or oil burner.",
    image: "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=800&q=85",
    alt: "A lavender field glowing in soft evening light"
  },
  {
    id: "stillness-oil-blend",
    name: "Stillness Oil Blend",
    category: "oil",
    price: 169,
    tag: "10 ml",
    description: "Lavender, jasmine, clary sage, and geranium for diffusers.",
    image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=800&q=85",
    alt: "A soft floral bloom in lavender tones"
  },
  {
    id: "eucalyptus-focus-oil",
    name: "Eucalyptus Focus Oil",
    category: "oil",
    price: 159,
    tag: "10 ml",
    description: "Eucalyptus, rosemary, and peppermint for a diffuser or oil burner.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85",
    alt: "An amber glass essential oil bottle in warm light"
  }
];

const verses = [
  { quote: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.", reference: "John 8:12 KJV" },
  { quote: "Thy word is a lamp unto my feet, and a light unto my path.", reference: "Psalm 119:105 KJV" },
  { quote: "The LORD is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1 KJV" },
  { quote: "Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.", reference: "Isaiah 60:1 KJV" },
  { quote: "For with thee is the fountain of life: in thy light shall we see light.", reference: "Psalm 36:9 KJV" },
  { quote: "Ye are the light of the world. A city that is set on an hill cannot be hid.", reference: "Matthew 5:14 KJV" },
  { quote: "The light shineth in darkness; and the darkness comprehended it not.", reference: "John 1:5 KJV" }
];

const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const drawerScrim = document.querySelector("#drawer-scrim");
const checkoutDialog = document.querySelector("#checkout-dialog");
const toast = document.querySelector("#toast");
const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  currencyDisplay: "narrowSymbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
let cart = loadCart();
let activeFilter = "all";
let toastTimer;

const blendRecommendations = {
  rest: {
    candle: {
      productId: "lavender-sabbath",
      reason: "Lavender, rosemary, and cedar leaf make a gentle beginning for a slower evening.",
      blessing: "May this small light make room for calm, rest, and a settled heart."
    },
    oil: {
      productId: "stillness-oil-blend",
      reason: "Let lavender, jasmine, clary sage, and geranium soften the room from your diffuser.",
      blessing: "May this small light make room for calm, rest, and a settled heart."
    }
  },
  clarity: {
    candle: {
      productId: "rosemary-renewal",
      reason: "Rosemary, eucalyptus, and sage bring a green, clear note to a focused morning or workspace.",
      blessing: "May you find clear thought, steady breath, and grace for what is in front of you."
    },
    oil: {
      productId: "eucalyptus-focus-oil",
      reason: "Eucalyptus, rosemary, and peppermint create a bright herbal ritual at the diffuser.",
      blessing: "May you find clear thought, steady breath, and grace for what is in front of you."
    }
  },
  welcome: {
    candle: {
      productId: "jasmine-prayer",
      reason: "Jasmine, lavender, and geranium leaf make a floral-herbal welcome for a shared table.",
      blessing: "May your home feel open, warm, and ready for every good conversation."
    },
    oil: {
      productId: "lavender-essential-oil",
      reason: "A few drops of lavender oil give an entryway or living room a calm, generous welcome.",
      blessing: "May your home feel open, warm, and ready for every good conversation."
    }
  },
  gift: {
    candle: {
      productId: "centurion-garden-set",
      reason: "A lavender candle, botanical oil blend, and handwritten blessing create a thoughtful South African gift.",
      blessing: "May this gift carry a little light into the days ahead."
    },
    oil: {
      productId: "centurion-garden-set",
      reason: "The Centurion Garden Set includes both a candle and an oil blend, ready to give with a handwritten blessing.",
      blessing: "May this gift carry a little light into the days ahead."
    }
  }
};

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("lotw-cart-za"));
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("lotw-cart-za", JSON.stringify(cart));
}

function renderProducts() {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card ${activeFilter !== "all" && activeFilter !== product.category ? "is-hidden" : ""}" style="animation-delay: ${index * 60}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async" />
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <div><h3>${product.name}</h3></div>
        <span class="product-price">${currency.format(product.price)}</span>
        <p class="product-description">${product.description}</p>
        <button class="add-product" type="button" data-product-id="${product.id}" aria-label="Add ${product.name} to bag">+</button>
      </div>
    </article>
  `).join("");
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${product.name} is in your bag.`);
}

function updateQuantity(productId, quantity) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  if (quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== productId);
  } else {
    item.quantity = quantity;
  }
  saveCart();
  renderCart();
}

function cartDetails() {
  return cart.map((item) => ({ product: getProduct(item.id), quantity: item.quantity })).filter((item) => item.product);
}

function renderCart() {
  const items = cartDetails();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  cartCount.textContent = itemCount;
  cartCount.setAttribute("aria-label", `${itemCount} ${itemCount === 1 ? "item" : "items"}`);
  if (cartCount.dataset.count && cartCount.dataset.count !== String(itemCount)) {
    cartCount.classList.remove("bump");
    void cartCount.offsetWidth;
    cartCount.classList.add("bump");
  }
  cartCount.dataset.count = String(itemCount);
  cartTotal.textContent = currency.format(total);

  if (!items.length) {
    cartItems.innerHTML = '<p class="cart-empty">Your bag is waiting for a little light.</p>';
    return;
  }

  cartItems.innerHTML = items.map(({ product, quantity }) => `
    <article class="cart-item">
      <img src="${product.image}" alt="" />
      <div>
        <h3>${product.name}</h3>
        <p>${currency.format(product.price)}</p>
        <div class="quantity" aria-label="Quantity for ${product.name}">
          <button type="button" data-action="decrease" data-product-id="${product.id}" aria-label="Decrease ${product.name} quantity">-</button>
          <span>${quantity}</span>
          <button type="button" data-action="increase" data-product-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-action="remove" data-product-id="${product.id}">Remove</button>
    </article>
  `).join("");
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  drawerScrim.hidden = false;
  document.body.classList.add("is-locked");
  cartDrawer.querySelector(".close-cart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  drawerScrim.hidden = true;
  document.body.classList.remove("is-locked");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function dailyVerse() {
  const now = new Date();
  const dateKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const index = [...dateKey].reduce((hash, character) => ((hash * 31) + character.charCodeAt(0)) >>> 0, 7) % verses.length;
  const verse = verses[index];
  document.querySelector("#daily-verse").textContent = verse.quote;
  document.querySelector("#verse-reference").textContent = verse.reference;
  document.querySelector("#verse-date").textContent = new Intl.DateTimeFormat("en-ZA", { weekday: "long", month: "long", day: "numeric" }).format(now);
}

function beginCheckout() {
  if (!cart.length) {
    showToast("Choose a candle first, then we can arrange delivery.");
    return;
  }
  closeCart();
  checkoutDialog.showModal();
}

function createOrderEmail(formData) {
  const items = cartDetails();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const orderLines = items.map(({ product, quantity }) => `- ${quantity} x ${product.name} (${currency.format(product.price * quantity)})`).join("\n");
  const body = [
    "Hello Light of the World,",
    "",
    "I would like to arrange delivery for this candle order:",
    orderLines,
    "",
    `Estimated order total: ${currency.format(total)}`,
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Delivery address: ${formData.get("address")}`,
    `Gift note / request: ${formData.get("note") || "None"}`,
    "",
    "Please let me know the delivery and payment details. Thank you."
  ].join("\n");
  window.location.href = `mailto:ai@ionity.today?subject=${encodeURIComponent("Light of the World candle order")}&body=${encodeURIComponent(body)}`;
  showToast("Your order email is ready to send.");
}

function renderBlendRecommendation(formData) {
  const moment = formData.get("moment");
  const format = formData.get("format");
  const recommendation = blendRecommendations[moment]?.[format];
  const blendResult = document.querySelector("#blend-result");
  const product = recommendation && getProduct(recommendation.productId);

  if (!product) {
    blendResult.innerHTML = "<p>We could not find a blend for that moment. Please try again.</p>";
    return;
  }

  blendResult.innerHTML = `
    <p class="eyebrow">YOUR BOTANICAL LIGHT</p>
    <h3>${product.name}</h3>
    <p class="blend-result-copy">${recommendation.reason}</p>
    <div class="blend-result-actions">
      <span class="blend-result-price">${currency.format(product.price)}</span>
      <button class="button button-secondary" type="button" data-recommendation-id="${product.id}">Add this blend to bag</button>
    </div>
    <p class="blend-result-blessing">${recommendation.blessing}</p>
  `;
}

document.querySelectorAll(".filter").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    activeFilter = filterButton.dataset.filter;
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("is-active", button === filterButton));
    renderProducts();
  });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) addToCart(button.dataset.productId);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const item = cart.find((cartItem) => cartItem.id === button.dataset.productId);
  if (!item) return;
  if (button.dataset.action === "increase") updateQuantity(item.id, item.quantity + 1);
  if (button.dataset.action === "decrease") updateQuantity(item.id, item.quantity - 1);
  if (button.dataset.action === "remove") updateQuantity(item.id, 0);
});

document.querySelector(".cart-trigger").addEventListener("click", openCart);
document.querySelector(".close-cart").addEventListener("click", closeCart);
drawerScrim.addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", beginCheckout);
document.querySelector(".dialog-close").addEventListener("click", () => checkoutDialog.close());

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  createOrderEmail(new FormData(event.currentTarget));
  checkoutDialog.close();
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get("email");
  window.location.href = `mailto:ai@ionity.today?subject=${encodeURIComponent("Light of the World updates")}&body=${encodeURIComponent(`Hello Light of the World,\n\nPlease keep me in the loop at ${email}.\n\nThank you.`)}`;
  showToast("Your message is ready to send.");
});

const hero = document.querySelector(".hero");
const digitalCandle = document.querySelector(".digital-candle");

const pixelFlame = (() => {
  const canvas = document.querySelector("#flame-canvas");
  if (!canvas || !canvas.getContext) return { setAmbience() {}, toggle: () => true, isLit: () => true };

  const width = canvas.width;
  const height = canvas.height;
  const context = canvas.getContext("2d");
  const frame = context.createImageData(width, height);
  const heat = new Uint8Array(width * height);
  const maxHeat = 48;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const paletteStops = {
    lavender: [[42, 29, 84], [92, 58, 156], [154, 110, 214], [211, 179, 255], [255, 232, 171], [255, 249, 227]],
    jasmine: [[84, 42, 33], [173, 90, 58], [232, 146, 92], [250, 200, 138], [255, 232, 171], [255, 250, 232]],
    herbal: [[20, 66, 48], [45, 110, 72], [104, 165, 92], [174, 214, 117], [236, 245, 206], [255, 252, 235]]
  };
  const smokeStops = [[38, 44, 52], [74, 82, 92], [118, 126, 136], [164, 171, 180], [206, 211, 218], [232, 235, 240]];
  let ambienceName = "lavender";
  let lit = true;
  let palette = buildPalette(paletteStops.lavender);
  let wind = 0;
  let targetWind = 0;
  let breath = 0;
  let running = false;
  let frameHandle = 0;
  let lastTick = 0;

  function buildPalette(stops, alphaScale = 34) {
    const colors = [];
    for (let index = 0; index <= maxHeat; index += 1) {
      const position = (index / maxHeat) * (stops.length - 1);
      const stop = Math.min(stops.length - 2, Math.floor(position));
      const mix = position - stop;
      const from = stops[stop];
      const to = stops[stop + 1];
      colors.push([
        Math.round(from[0] + (to[0] - from[0]) * mix),
        Math.round(from[1] + (to[1] - from[1]) * mix),
        Math.round(from[2] + (to[2] - from[2]) * mix),
        index < 5 ? 0 : Math.min(255, (index - 4) * alphaScale)
      ]);
    }
    return colors;
  }

  function applyPalette() {
    palette = lit ? buildPalette(paletteStops[ambienceName] || paletteStops.lavender) : buildPalette(smokeStops, 15);
  }

  function stepFire() {
    breath += 0.08;
    targetWind = Math.max(-1.6, Math.min(1.6, (targetWind + (Math.random() - 0.5) * 0.3) * 0.98));
    wind += (targetWind - wind) * 0.08;

    const wickCentre = Math.floor(width / 2);
    const bottomRow = (height - 1) * width;
    if (lit) {
      const wickGlow = maxHeat - 3 + Math.round(Math.sin(breath) * 2);
      const wickHalf = Math.random() < 0.05 ? 6 : 4;
      for (let x = 0; x < width; x += 1) {
        const distance = Math.abs(x - wickCentre);
        heat[bottomRow + x] = distance <= wickHalf ? Math.max(0, wickGlow - distance * 4 - ((Math.random() * 5) | 0)) : 0;
      }
      if (Math.random() < 0.18) {
        const emberColumn = Math.min(width - 1, Math.max(0, wickCentre + Math.round(wind * 3) + (((Math.random() * 9) | 0) - 4)));
        const emberRow = 8 + ((Math.random() * 16) | 0);
        heat[emberRow * width + emberColumn] = maxHeat - ((Math.random() * 7) | 0);
      }
    } else {
      for (let x = 0; x < width; x += 1) {
        const distance = Math.abs(x - wickCentre);
        heat[bottomRow + x] = distance <= 1 && Math.random() < 0.42 ? 9 + ((Math.random() * 8) | 0) : 0;
      }
    }

    for (let y = height - 1; y > 0; y -= 1) {
      const row = y * width;
      const sway = Math.round(wind + Math.sin(breath + y * 0.22) * 0.4);
      for (let x = 0; x < width; x += 1) {
        const drift = ((Math.random() * 3) | 0) - 1 + sway;
        const destinationX = Math.min(width - 1, Math.max(0, x + drift));
        const value = heat[row + x] - ((Math.random() * 3.4) | 0);
        heat[row - width + destinationX] = value > 0 ? value : 0;
      }
    }
  }

  function renderFire() {
    const pixels = frame.data;
    for (let index = 0; index < heat.length; index += 1) {
      const color = palette[heat[index]];
      const offset = index * 4;
      pixels[offset] = color[0];
      pixels[offset + 1] = color[1];
      pixels[offset + 2] = color[2];
      pixels[offset + 3] = color[3];
    }
    context.putImageData(frame, 0, 0);
  }

  function tick(timestamp) {
    if (!running) return;
    frameHandle = window.requestAnimationFrame(tick);
    if (timestamp - lastTick < 33) return;
    lastTick = timestamp;
    stepFire();
    renderFire();
  }

  function start() {
    if (running || reducedMotion.matches || document.hidden) return;
    running = true;
    frameHandle = window.requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    window.cancelAnimationFrame(frameHandle);
  }

  function renderStill() {
    for (let index = 0; index < 90; index += 1) stepFire();
    renderFire();
  }

  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    targetWind = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2.4;
  });

  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  new IntersectionObserver(
    (entries) => entries.forEach((entry) => (entry.isIntersecting ? start() : stop())),
    { threshold: 0.05 }
  ).observe(canvas);

  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) {
        stop();
        renderStill();
      } else {
        start();
      }
    });
  }

  renderStill();
  start();

  return {
    isLit: () => lit,
    toggle() {
      lit = !lit;
      applyPalette();
      if (!running) renderStill();
      return lit;
    },
    setAmbience(name) {
      if (paletteStops[name]) ambienceName = name;
      applyPalette();
      if (!running) renderFire();
    }
  };
})();

function updateCandleLabel() {
  const ambience = hero.dataset.ambience || "lavender";
  const state = pixelFlame.isLit()
    ? `burning with a gentle ${ambience} glow`
    : "resting with a soft wisp of smoke";
  digitalCandle.setAttribute("aria-label", `A living pixel candle ${state}. Press to blow it out or relight it.`);
}

digitalCandle.addEventListener("click", () => {
  const isLit = pixelFlame.toggle();
  digitalCandle.classList.toggle("is-out", !isLit);
  digitalCandle.setAttribute("aria-pressed", String(isLit));
  updateCandleLabel();
  showToast(isLit ? "Relit. Arise, shine; your light has come." : "A soft breath of smoke. Tap to relight your candle.");
});

digitalCandle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    digitalCandle.click();
  }
});

document.querySelectorAll(".ambience-button").forEach((button) => {
  button.addEventListener("click", () => {
    const ambience = button.dataset.ambience;
    hero.dataset.ambience = ambience;
    pixelFlame.setAmbience(ambience);
    updateCandleLabel();
    document.querySelectorAll(".ambience-button").forEach((ambienceButton) => {
      const isActive = ambienceButton === button;
      ambienceButton.classList.toggle("is-active", isActive);
      ambienceButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

const blendGuideForm = document.querySelector("#blend-guide-form");
const blendResult = document.querySelector("#blend-result");
blendGuideForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderBlendRecommendation(new FormData(blendGuideForm));
});
blendResult.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recommendation-id]");
  if (button) addToCart(button.dataset.recommendationId);
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");
menuToggle.addEventListener("click", () => {
  const isOpen = primaryNavigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
primaryNavigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  primaryNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) closeCart();
});

document.querySelector("#year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

const revealTargets = document.querySelectorAll(
  ".verse-section > *, .section-heading, .collection-controls, .blend-guide-section > *, .story-section > *, .promise-section article, .ritual-section > *, .contact-content, .site-footer"
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
revealTargets.forEach((target) => {
  target.classList.add("reveal");
  revealObserver.observe(target);
});
dailyVerse();
renderProducts();
renderCart();