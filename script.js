function addToCartAlert() {
  alert('Product added to cart!');
}
let cartItems = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

function addToCart(event) {
  const productCard = event.target.closest('.product-card');
  const productName = productCard.querySelector('h2').textContent;
  const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));

  cartItems.push({ name: productName, price: productPrice });
}

function displayCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; 

  if (cartItems.length === 0) {
      cartItemsContainer.textContent = 'Your cart is empty.';
  } else {
      const cartList = document.createElement('ul');
      cartItems.forEach(item => {
          const listItem = document.createElement('li');
          cartItemsContainer.textContent = 'Your Cart';
          listItem.textContent = `${item.name} - $${item.price}`;
          cartList.appendChild(listItem);
      });
      cartItemsContainer.appendChild(cartList);
  }
}
function handleAddToCart(event) {
addToCart(event); 
addToCartAlert(); 
}


addToCartButtons.forEach(button => {
  button.addEventListener('click', handleAddToCart);
});


const viewCartButton = document.getElementById('view-cart-btn');
viewCartButton.addEventListener('click', displayCart);
