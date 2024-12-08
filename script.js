// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const viewCartButton = document.getElementById('view-cart');
    const closeCartButton = document.getElementById('close-cart');

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toFixed(2)} € x ${item.quantity}`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = `Gesamt: ${total.toFixed(2)} €`;
    }

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productDiv = e.target.closest('.product');
            const product = {
                id: productDiv.dataset.id,
                name: productDiv.dataset.name,
                price: parseFloat(productDiv.dataset.price),
            };
            addToCart(product);
        });
    });

    viewCartButton.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    closeCartButton.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Danke für Ihren Einkauf!');
        cart.length = 0; // Warenkorb leeren
        updateCart();
        cartModal.classList.add('hidden');
    });
});
