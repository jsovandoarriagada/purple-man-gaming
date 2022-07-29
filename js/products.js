/* LOAD PRODUCTS FUNCTION */
const loadProducts = async () => {
  // FETCH PRODUCTS.JSON
  const response = await fetch("./products.json");
  // SAVE RESPONSE AS A JAVASCRIPT OBJECT
  const data = await response.json();
  // SET PRODUCTS ARRAY AS DATA.PRODUCTS
  products = data.products;
  // USE DISPLAY PRODUCTS FUNCTION
  displayProducts();
};

/* DISPLAY PRODUCTS FUNCTION */
const displayProducts = () => {
  // USE A FUNCTION ON EACH PRODUCT OF PRODUCTS ARRAY
  products.forEach((product) => {
    // SET HTML CONTENT ON PRODUCTS ELEMENT
    productsContainerElement.innerHTML += `           
        <div class="product">
          <div class="product__content">
            <figure class="product__figure">
              <img class="product__img" src="${product.cardImage}" alt="${product.name}" />
            </figure>
            <div class="product__body">
              <div class="product__display">
                <div class="product__cost">
                  <p class="product__discount">${product.discount}</p>
                  <div class="product__price">
                    <p class="product__price--base">$<span>${product.basePrice}</span> USD</p>
                    <p class="product__price--final">$<span>${product.finalPrice}</span> USD</p>
                  </div>
                </div>
                <div class="product__platform">
                  <img class="product__platform--img" src="${product.platformLogo}" alt="${product.platform}" />
                  <p>${product.platform}</p>
                </div>
              </div>
              <button class="product__button" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>ADD TO CART</p>
              </button>
            </div>
          </div>
        </div>
      `;
  });
};

// USE LOAD PRODUCTS FUNCTION
loadProducts();
