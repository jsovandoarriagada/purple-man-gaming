/* PRODUCTS BUTTON EVENT LISTENER */
productsButtonElement.addEventListener("click", () => {
  // SHOW PRODUCTS
  productsElement.style.display = "block";
  // HIDE CART
  cartElement.style.display = "none";
});

/* CART BUTTON EVENT LISTENER */
cartButtonElement.addEventListener("click", () => {
  // HIDE PRODUCTS
  productsElement.style.display = "none";
  // SHOW CART
  cartElement.style.display = "block";
});
