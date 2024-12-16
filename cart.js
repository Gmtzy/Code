document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const clearCartButton = document.getElementById("clear-cart");

  function renderCart() {
    cartList.innerHTML = ""; // Clear current cart items
    let total = 0;

    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} -  ₱ ${item.price.toFixed(2)}
        <button class="remove-item" data-index=" ₱{index}">Remove</button>
      `;
      cartList.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
  }

  function removeItem(index) {
    cartItems.splice(index, 1); // Remove item from array
    localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
    renderCart(); // Re-render the cart
  }

  // Event listener for removing items
  cartList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.dataset.index;
      removeItem(index);
    }
  });

  // Clear cart functionality
  clearCartButton.addEventListener("click", function () {
    cartItems = [];
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
  });

  renderCart(); // Initial render
});
