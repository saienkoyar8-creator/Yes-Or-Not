/* ===== i18n TRANSLATIONS ===== */
const translations = {
  uk: {
    nav_home: 'Головна',
    nav_catalog: 'Каталог',
    welcome_sub: 'Сучасний вуличний одяг для тих, хто створює стиль',
    welcome_btn: 'Перейти до каталогу',
    about_title: 'Про бренд',
    about_text: 'Про бренд',
    new_title: 'Новинки',
    contact_title: "Зв'язатися з нами",
    contact_q_ph: 'Ваше питання...',
    contact_e_ph: 'Ваш email...',
    contact_btn: 'Надіслати',
    contact_our_email: 'Наша пошта',
    catalog_title: 'Товари',
    cart_title: 'Кошик',
    cart_total: 'Разом:',
    cart_checkout: 'Оплатити',
    cart_empty: 'Кошик порожній',
    size_label: 'РОЗМІР',
    add_to_cart: 'ДОДАТИ ДО КОШИКА',
    photo_placeholder: 'ФОТО',
    product_color_label: 'КОЛІР',
    product_feature_quality: '— Преміальні матеріали',
    product_feature_fit: '— Сучасний крій',
    product_feature_time: '— Термін виготовлення: 7-12 днів',
    colors: {
      black: 'чорний',
      grey: 'сірий',
      white: 'білий',
      navy: 'темно-синій',
      'b/w': 'чорно-білий'
    },
    categories: {
      'T-SHIRT': 'ФУТБОЛКА',
      HOODIE: 'ХУДІ',
      LONGSLEEVE: 'ЛОНГСЛІВ',
      JACKET: 'КУРТКА',
      PANTS: 'ШТАНИ',
      ACCESSORIES: 'АКСЕСУАРИ',
      SHORTS: 'ШОРТИ',
      SHIRT: 'СОРОЧКА'
    },
    checkout_heading: 'Ваші дані',
    checkout_self: 'Я отримувач',
    checkout_other: 'Інший отримувач',
    checkout_contact_info: 'Контактна інформація',
    checkout_lastname_ph: 'Прізвище',
    checkout_firstname_ph: "Ім'я",
    checkout_email_ph: 'Електронна пошта',
    checkout_delivery: 'Спосіб доставки',
    checkout_city_ph: 'Оберіть місто',
    checkout_warehouse_ph: 'Оберіть відділення',
    checkout_comment: 'Коментар до замовлення',
    checkout_comment_ph: 'Запишіть ваш коментар тут...',
    checkout_order: 'Ваше замовлення',
    checkout_details: 'Деталі замовлення',
    checkout_promo_ph: 'Промокод або подарункова картка',
    checkout_apply: 'Застосувати',
    checkout_subtotal: 'Підсумок',
    checkout_shipping: 'Доставка',
    checkout_shipping_val: 'За тарифами перевізника',
    checkout_total: 'Загальна вартість',
    checkout_pay: 'Оплатити',
    alert_order: 'Замовлення оформлено! Дякуємо за покупку.',
    alert_question: 'Дякуємо! Ваше питання надіслано.',
  },
  en: {
    nav_home: 'Home',
    nav_catalog: 'Catalog',
    welcome_sub: 'Modern streetwear for those who create style',
    welcome_btn: 'Go to catalog',
    about_title: 'About brand',
    about_text: 'About brand',
    new_title: 'New arrivals',
    contact_title: 'Contact us',
    contact_q_ph: 'Your question...',
    contact_e_ph: 'Your email...',
    contact_btn: 'Send',
    contact_our_email: 'Our email',
    catalog_title: 'Products',
    cart_title: 'Cart',
    cart_total: 'Total:',
    cart_checkout: 'Checkout',
    cart_empty: 'Cart is empty',
    size_label: 'SIZE',
    add_to_cart: 'ADD TO CART',
    photo_placeholder: 'PHOTO',
    product_color_label: 'COLOR',
    product_feature_quality: '— Premium quality materials',
    product_feature_fit: '— Modern fit design',
    product_feature_time: '— Production time: 7-12 days',
    colors: {
      black: 'black',
      grey: 'grey',
      white: 'white',
      navy: 'navy',
      'b/w': 'b/w'
    },
    categories: {
      'T-SHIRT': 'T-SHIRT',
      HOODIE: 'HOODIE',
      LONGSLEEVE: 'LONGSLEEVE',
      JACKET: 'JACKET',
      PANTS: 'PANTS',
      ACCESSORIES: 'ACCESSORIES',
      SHORTS: 'SHORTS',
      SHIRT: 'SHIRT'
    },
    checkout_heading: 'Your details',
    checkout_self: "I'm the recipient",
    checkout_other: 'Other recipient',
    checkout_contact_info: 'Contact information',
    checkout_lastname_ph: 'Last name',
    checkout_firstname_ph: 'First name',
    checkout_email_ph: 'Email',
    checkout_delivery: 'Delivery method',
    checkout_city_ph: 'Select city',
    checkout_warehouse_ph: 'Select warehouse',
    checkout_comment: 'Order comment',
    checkout_comment_ph: 'Write your comment here...',
    checkout_order: 'Your order',
    checkout_details: 'Order details',
    checkout_promo_ph: 'Promo code or gift card',
    checkout_apply: 'Apply',
    checkout_subtotal: 'Subtotal',
    checkout_shipping: 'Shipping',
    checkout_shipping_val: 'According to carrier rates',
    checkout_total: 'Total cost',
    checkout_pay: 'Pay',
    alert_order: 'Order placed! Thank you for your purchase.',
    alert_question: 'Thank you! Your question has been sent.',
  }
};

let currentLang = 'uk';

function applyTranslations() {
  const t = translations[currentLang];
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      // Preserve inner badges for cart title
      if (key === 'cart_title') {
        const badge = el.querySelector('.cart-sidebar__badge');
        el.textContent = t[key] + ' ';
        if (badge) el.appendChild(badge);
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key]) el.placeholder = t[key];
  });
}

/* ===== DATA: Products ===== */
const products = [
  { id:1, name:'Shadow Tee', category:'T-SHIRT', price:1299, color:'black' },
  { id:2, name:'Urban Hoodie', category:'HOODIE', price:2499, color:'grey' },
  { id:3, name:'Stripe Longsleeve', category:'LONGSLEEVE', price:1899, color:'b/w' },
  { id:4, name:'Oversize Jacket', category:'JACKET', price:3499, color:'black' },
  { id:5, name:'Cargo Pants', category:'PANTS', price:2199, color:'black' },
  { id:6, name:'Classic Cap', category:'ACCESSORIES', price:899, color:'black' },
  { id:7, name:'Minimal Tee V2', category:'T-SHIRT', price:1399, color:'white' },
  { id:8, name:'Night Hoodie', category:'HOODIE', price:2699, color:'black' },
  { id:9, name:'Relaxed Shorts', category:'SHORTS', price:1599, color:'grey' },
  { id:10, name:'Zip Shirt', category:'SHIRT', price:1799, color:'navy' },
  { id:11, name:'Graphic Longsleeve', category:'LONGSLEEVE', price:1699, color:'black' },
  { id:12, name:'Essential Bag', category:'ACCESSORIES', price:1999, color:'black' },
];

const newProductIds = [1, 2, 3, 4];

/* ===== STATE ===== */
let cart = [];
let currentProductId = null;
let selectedSize = 'M';

/* ===== DOM REFS ===== */
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartCountEl = document.getElementById('cart-count');
const cartBadgeEl = document.getElementById('cart-badge');
const cartItemsEl = document.getElementById('cart-items');
const cartFooterEl = document.getElementById('cart-footer');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const addToCartBtn = document.getElementById('add-to-cart-btn');

/* Mobile Menu Refs */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const headerNav = document.getElementById('header-nav');
const menuOverlay = document.getElementById('menu-overlay');

/* ===== MOBILE MENU ===== */
function openMenu() {
  headerNav.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  headerNav.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.classList.remove('menu-open');
}

mobileMenuBtn.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

/* ===== LANGUAGE SWITCHER ===== */
document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switcher__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    applyTranslations();
    // Re-render dynamic content
    renderNewProducts();
    renderCatalog();
    if (currentProductId) renderProductDetail(currentProductId);
    updateCart();
    // Close menu if on mobile
    closeMenu();
  });
});

/* ===== ROUTING ===== */
function showPage(name, productId) {
  // Remove active + re-trigger animation
  pages.forEach(p => {
    p.classList.remove('active');
    p.style.animation = 'none';
    p.offsetHeight; // reflow
    p.style.animation = '';
  });
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');

  document.querySelectorAll('.header__link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === name);
  });

  if (name === 'product' && productId) {
    currentProductId = productId;
    selectedSize = 'M';
    renderProductDetail(productId);
  }
  if (name === 'checkout') {
    renderCheckout();
  }

  // Close mobile menu on navigation
  closeMenu();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

/* ===== PRODUCT CARD ===== */
function createProductCard(product) {
  const t = translations[currentLang];
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-card__image">${t.photo_placeholder}</div>
    <div class="product-card__body">
      <div class="product-card__name">${product.name}</div>
      <div class="product-card__price">₴${product.price.toLocaleString()}</div>
    </div>
  `;
  card.addEventListener('click', () => showPage('product', product.id));
  return card;
}

/* ===== NEW PRODUCTS ===== */
function renderNewProducts() {
  const grid = document.getElementById('new-products-grid');
  grid.innerHTML = '';
  newProductIds.forEach(id => {
    const p = products.find(x => x.id === id);
    if (p) grid.appendChild(createProductCard(p));
  });
}

/* ===== CATALOG ===== */
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  const count = document.getElementById('catalog-count');
  grid.innerHTML = '';
  count.textContent = products.length + ' items';
  products.forEach(p => grid.appendChild(createProductCard(p)));
}

/* ===== PRODUCT DETAIL ===== */
function renderProductDetail(id) {
  const t = translations[currentLang];
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('product-category').textContent = (t.categories && t.categories[p.category]) || p.category;
  document.getElementById('product-name').textContent = p.name;
  document.getElementById('product-price').textContent = '₴' + p.price.toLocaleString();
  document.getElementById('product-color').textContent = (t.colors && t.colors[p.color]) || p.color;
  document.getElementById('product-detail-image').textContent = t.photo_placeholder;

  // Reset size buttons
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === selectedSize);
  });
}

/* ===== SIZE SELECTOR ===== */
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.dataset.size;
  });
});

/* ===== CART ===== */
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(productId) {
  const existing = cart.find(x => x.id === productId && x.size === selectedSize);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1, size: selectedSize });
  }
  updateCart();
  openCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCart();
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty < 1) cart[idx].qty = 1;
  updateCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCart() {
  const t = translations[currentLang];
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = totalItems;
  cartBadgeEl.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-sidebar__empty">${t.cart_empty}</p>`;
    cartFooterEl.style.display = 'none';
  } else {
    cartFooterEl.style.display = 'block';
    cartItemsEl.innerHTML = cart.map((item, idx) => {
      const p = products.find(x => x.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item__image">${t.photo_placeholder}</div>
          <div class="cart-item__info">
            <div class="cart-item__name">${p.name}</div>
            <div class="cart-item__size">${item.size}</div>
            <div class="cart-item__controls">
              <button class="cart-item__qty-btn" onclick="changeQty(${idx},-1)">−</button>
              <span class="cart-item__qty">${item.qty}</span>
              <button class="cart-item__qty-btn" onclick="changeQty(${idx},1)">+</button>
              <button class="cart-item__remove" onclick="removeFromCart(${idx})">REMOVE</button>
            </div>
          </div>
          <div class="cart-item__price">₴${(p.price * item.qty).toLocaleString()}</div>
        </div>
      `;
    }).join('');
    cartTotalEl.textContent = '₴' + getCartTotal().toLocaleString();
  }
}

addToCartBtn.addEventListener('click', () => {
  if (currentProductId) addToCart(currentProductId);
});

checkoutBtn.addEventListener('click', () => {
  closeCart();
  showPage('checkout');
});

/* ===== CHECKOUT ===== */
function renderCheckout() {
  const t = translations[currentLang];
  const itemsEl = document.getElementById('checkout-items');
  const rowsEl = document.getElementById('checkout-summary-rows');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total-final');

  itemsEl.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="checkout__summary-item">
        <div class="checkout__summary-item-img">${t.photo_placeholder}</div>
        <div class="checkout__summary-item-info">
          <div class="checkout__summary-item-name">${p.name}</div>
          <div class="checkout__summary-item-meta">${item.size} &nbsp; ×${item.qty}</div>
        </div>
        <div class="checkout__summary-item-price">₴${(p.price * item.qty).toLocaleString()}</div>
      </div>
    `;
  }).join('');

  rowsEl.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="checkout__summary-detail-line">
        <span>${item.qty} × ${p.name}</span>
        <span>₴${(p.price * item.qty).toLocaleString()}</span>
      </div>
    `;
  }).join('');

  const total = getCartTotal();
  subtotalEl.textContent = total.toLocaleString() + ' грн';
  totalEl.textContent = total.toLocaleString() + ' грн';
}

// Notification System
function showNotification(message) {
  const container = document.getElementById('notification-container');
  if (!container) return;
  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(notif);

  setTimeout(() => {
    notif.classList.add('fade-out');
    notif.addEventListener('animationend', () => {
      notif.remove();
    });
  }, 3500);
}

// Pay button
document.getElementById('pay-btn').addEventListener('click', () => {
  const t = translations[currentLang];
  showNotification(t.alert_order);
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const t = translations[currentLang];
  showNotification(t.alert_question);
  e.target.reset();
});

/* ===== INIT ===== */
applyTranslations();
renderNewProducts();
renderCatalog();
updateCart();
