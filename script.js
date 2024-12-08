// script.js

document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.querySelector('.cta-btn');
    ctaBtn.addEventListener('click', () => {
        alert('Willkommen! Entdecke unsere Produkte!');
    });

    const productButtons = document.querySelectorAll('.product-btn');
    productButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product').querySelector('h2').textContent;
            alert(`Mehr über ${productName} erfahren!`);
        });
    });
});
