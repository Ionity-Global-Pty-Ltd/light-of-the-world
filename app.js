const products = [
  {
    id: "morning-mercy",
    name: "Morning Mercy",
    category: "jar",
    price: 28,
    tag: "Bestseller",
    description: "Bergamot, white tea, and soft rain.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    alt: "A softly glowing candle in a glass jar"
  },
  {
    id: "garden-grace",
    name: "Garden Grace",
    category: "jar",
    price: 30,
    tag: "New pour",
    description: "Rosemary, lemon leaf, and moss.",
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=85",
    alt: "A natural candle beside green foliage"
  },
  {
    id: "sabbath-pillar",
    name: "Sabbath Pillar",
    category: "pillar",
    price: 24,
    tag: "Slow burn",
    description: "Unscented beeswax for a quiet table.",
    image: "https://images.unsplash.com/photo-1542038382126-77ae2819338d?auto=format&fit=crop&w=800&q=85",
    alt: "Simple pillar candles on a table"
  },
  {
    id: "table-of-welcome",
    name: "Table of Welcome",
    category: "gift",
    price: 54,
    tag: "Gift set",
    description: "Two votives and a handwritten blessing.",
    image: "https://images.unsplash.com/photo-1542038382126-77ae2819338d?auto=format&fit=crop&w=800&q=85",
    alt: "A candle gift wrapped with ribbon"
  },
  {
    id: "cedar-psalm",
    name: "Cedar Psalm",
    category: "jar",
    price: 32,
    tag: "Woodland",
    description: "Cedarwood, amber, and a hint of smoke.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=85",
    alt: "A warm candle in a dark glass jar"
  },
  {
    id: "joyful-light",
    name: "Joyful Light",
    category: "pillar",
    price: 26,
    tag: "Festive",
    description: "Orange peel, clove, and warm vanilla.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85&crop=right",
    alt: "Candles glowing with a warm orange light"
  },
  {
    id: "still-water",
    name: "Still Water",
    category: "jar",
    price: 29,
    tag: "Restful",
    description: "Eucalyptus, sage, and clean linen.",
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=85&crop=left",
    alt: "A calming candle near dried flowers"
  },
  {
    id: "gathered-in-light",
    name: "Gathered in Light",
    category: "gift",
    price: 68,
    tag: "For sharing",
    description: "Three minis for host gifts and gentle hellos.",
    image: "https://images.unsplash.com/photo-1542038382126-77ae2819338d?auto=format&fit=crop&w=800&q=85&crop=top",
    alt: "A collection of handmade candles"
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
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
let cart = loadCart();
let activeFilter = "all";
let toastTimer;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("lotw-cart"));
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("lotw-cart", JSON.stringify(cart));
}

function renderProducts() {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card ${activeFilter !== "all" && activeFilter !== product.category ? "is-hidden" : ""}" style="animation-delay: ${index * 60}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" />
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
  document.querySelector("#verse-date").textContent = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(now);
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
dailyVerse();
renderProducts();
renderCart();