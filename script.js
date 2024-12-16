let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${productName} has been added to your cart!`);
}

function updateCartCount() {
  const cartLink = document.getElementById("cart-link");
  cartLink.textContent = `Cart (${cart.length})`;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
const aboutSection = document.getElementById('about-us');
console.log(aboutSection);
