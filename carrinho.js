  const cartContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const paymentForm = document.getElementById('payment-form');
    const successMsg = document.getElementById('success-message');

    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

    function renderCart() {
      cartContainer.innerHTML = '';
      if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty">Seu carrinho está vazio 😔</p>';
        totalEl.innerText = '';
        checkoutBtn.style.display = 'none';
        paymentForm.style.display = 'none';
        return;
      }

      let total = 0;
      cart.forEach((item, index) => {
        const priceNum = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        total += priceNum;

        cartContainer.innerHTML += `
          <div class="item">
            <img src="${item.img}" alt="${item.title}">
            <div class="item-info">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remover</button>
          </div>
        `;
      });

      totalEl.innerText = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
      checkoutBtn.style.display = 'block';
    }

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(cart));
      renderCart();
    }

    checkoutBtn.addEventListener('click', () => {
      checkoutBtn.style.display = 'none';
      paymentForm.style.display = 'block';
    });

    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Limpa o carrinho e formulário
      localStorage.removeItem('carrinho');
      cart = [];
      paymentForm.reset();
      paymentForm.style.display = 'none';

      // Mostra mensagem de sucesso
      successMsg.style.display = 'block';
      renderCart();

      // Some após 5 segundos
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    });

    renderCart();
