function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart(cart);
    _updateBadges();
    _refreshIfOpen();
}

function removeFromCart(productId) {
    saveCart(getCart().filter(i => i.id !== productId));
    _updateBadges();
    _refreshIfOpen();
}

function changeQuantity(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity = Math.max(0, item.quantity + delta);
    saveCart(item.quantity === 0 ? cart.filter(i => i.id !== productId) : cart);
    _updateBadges();
    _refreshIfOpen();
}

function _count() {
    return getCart().reduce((s, i) => s + i.quantity, 0);
}

function _total() {
    return getCart().reduce((s, item) => {
        const p = typeof allProducts !== 'undefined' && allProducts.find(p => p.id === item.id);
        return s + (p ? p.price * item.quantity : 0);
    }, 0);
}

function _fmt(n) {
    return n.toLocaleString('ru-RU') + ' ₽';
}

function _updateBadges() {
    const count = _count();
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('visible');
    document.getElementById('cartDrawer').classList.add('open');
    document.body.style.overflow = 'hidden';
    _renderDrawer();
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('visible');
    document.getElementById('cartDrawer').classList.remove('open');
    document.body.style.overflow = '';
}

function _refreshIfOpen() {
    const d = document.getElementById('cartDrawer');
    if (d && d.classList.contains('open')) _renderDrawer();
}

function _renderDrawer() {
    const cart = getCart();
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    if (!body || !footer) return;

    if (cart.length === 0) {
        body.innerHTML = '<p class="cart-empty">Корзина пуста</p>';
        footer.innerHTML = '';
        return;
    }

    body.innerHTML = cart.map(item => {
        const p = typeof allProducts !== 'undefined' && allProducts.find(p => p.id === item.id);
        if (!p) return '';
        return `<div class="cart-item">
            <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
            <div class="cart-item-info">
                <div class="cart-item-name">${p.name}</div>
                <div class="cart-item-price-line">${_fmt(p.price * item.quantity)}</div>
                <div class="cart-item-qty">
                    <button onclick="changeQuantity(${p.id},-1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${p.id},1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕</button>
        </div>`;
    }).join('');

    footer.innerHTML = `
        <div class="cart-total">
            <span>Итого</span>
            <strong>${_fmt(_total())}</strong>
        </div>
        <div class="order-form" id="orderForm">
            <input type="text" id="oName" placeholder="Имя" autocomplete="name">
            <input type="tel" id="oPhone" placeholder="Телефон" autocomplete="tel">
            <input type="text" id="oContact" placeholder="Telegram или Instagram">
            <button class="btn-order" id="submitBtn" onclick="_submitOrder()">ОТПРАВИТЬ ЗАЯВКУ</button>
        </div>`;
}

function _submitOrder() {
    const name = document.getElementById('oName');
    const phone = document.getElementById('oPhone');
    let ok = true;
    [name, phone].forEach(el => {
        if (!el.value.trim()) {
            el.style.borderColor = 'oklch(68% 0.22 25)';
            ok = false;
        } else {
            el.style.borderColor = '';
        }
    });
    if (!ok) return;

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'ОТПРАВЛЯЕМ...';
    btn.disabled = true;

    setTimeout(() => {
        const body = document.getElementById('cartBody');
        const footer = document.getElementById('cartFooter');
        if (!body || !footer) return;
        body.innerHTML = `<div class="order-success">
            <div class="success-check">✓</div>
            <div class="success-title">Заявка принята!</div>
            <div class="success-text">Мы свяжемся с тобой в ближайшее время</div>
        </div>`;
        footer.innerHTML = '';
        saveCart([]);
        _updateBadges();
    }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
        <div class="cart-drawer" id="cartDrawer">
            <div class="cart-drawer-header">
                <span class="cart-drawer-title">КОРЗИНА</span>
                <button class="cart-close" onclick="closeCart()">✕</button>
            </div>
            <div class="cart-body" id="cartBody"></div>
            <div class="cart-footer" id="cartFooter"></div>
        </div>`);

    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', openCart);
    });

    _updateBadges();
});
