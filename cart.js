function renderCart() {
    const container = document.getElementById('cart-container');
    const totalDisplay = document.getElementById('total');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
      totalDisplay.textContent = "";
      return;
    }
  
    container.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.price;
  
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      container.appendChild(div);
    });
  
    totalDisplay.textContent = `Total: $${total}`;
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
  
  function checkout() {
    alert("Thanks for your order!");
    localStorage.removeItem('cart');
    window.location.href = 'menu.html';
  }
  
  renderCart();