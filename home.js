 const buttons = document.querySelectorAll('.buy-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                const book = btn.closest('.book');
                const title = book.querySelector('h3').innerText;
                const price = book.querySelector('.price').innerText;
                const img = book.querySelector('img').src;

                let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
                cart.push({ title, price, img });
                localStorage.setItem('carrinho', JSON.stringify(cart));

                alert(`${title} foi adicionado ao carrinho! 🛒`);
            });
        });
