document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products');
    if (!container || typeof allProducts === 'undefined') return;

    const category = document.body.dataset.category;
    const products = category ? allProducts.filter(p => p.category === category) : allProducts;

    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-card__img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-card__info">
                <div class="product-card__name">${p.name}</div>
                <div class="product-card__price">${p.price.toLocaleString('ru-RU')} ₽</div>
                <button class="btn-cart" onclick="handleAddToCart(this,${p.id})">В КОРЗИНУ</button>
            </div>
        </div>`).join('');
});

function handleAddToCart(btn, id) {
    addToCart(id);
    btn.textContent = 'ДОБАВЛЕНО ✓';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = 'В КОРЗИНУ';
        btn.classList.remove('added');
    }, 1500);
}
