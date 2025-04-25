const items = [
    { name: "Cheese Pizza", price: 300, oldPrice: 450, img: "image/pizza.jpg" },
    { name: "Cute Burger", price: 200, oldPrice: 300, img: "image/cute-burger.jpg" },
    { name: "Double Stack", price: 250, oldPrice: 300, img: "image/double-burger.jpg" },
    { name: "Happy Sandwich", price: 100, oldPrice: 150, img: "image/smile-sandwich.jpg" },
    { name: "Fried Chicken", price: 100, oldPrice: 150, img: "image/fried-chicken.jpg" },
    { name: "Cola Pizza Combo", price: 350, oldPrice: 400, img: "image/cola-pizza.jpg" },
    { name: "Biryani", price: 350, oldPrice: 400, img: "image/briyani.jpg" },
    { name: "Fried rice", price: 150, oldPrice: 200, img: "image/fried rice.jpg" },
    { name: "Roll Wrap", price: 60, oldPrice: 100, img: "image/wrap.jpg" },
    { name: "World Famous Fries", price: 120, oldPrice: 150, img: "image/fries.jpg" },
    { name: "Ice creames", price: 100, oldPrice: 120, img: "image/icecream.jpg" },
    { name: "Vegees", price: 100, oldPrice: 150, img: "image/vegessalad.jpg" }
  ];
  
  function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p><span class="price">$${item.price}</span><span class="old-price">$${item.oldPrice}</span></p>
        <button onclick="addToCart('${item.name}', ${item.price})">Order Now</button>
      `;
      container.appendChild(div);
    });
  }
  
  function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  renderMenu();