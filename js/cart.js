/* ADD TO CART FUNCTION */
const addToCart = (id) => {
  // IF ITEM IS IN CART ARRAY, THEN USE AN "ALREADY IN CART" TOASTIFY NOTIFICATION
  if (cart.some((item) => item.id === id)) {
    Toastify({
      text: "ALREADY IN CART",
      duration: 2000,
      style: {
        background: "#da1106",
        color: "#ffffff",
        fontWeight: "700",
        boxShadow: "none",
        border: "1px #161618 solid",
        borderRadius: "none",
        minWidth: "max-content",
      },
      offset: {
        y: 50,
      },
    }).showToast();
    // IF ITEM IS NOT IN CART ARRAY PUSH IT AND ADD QUANTITY PROPERTY TO IT, THEN USE A "SUCCESSFULLY ADDED" TOASTIFY NOTIFICATION
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({ ...item, quantity: 1 });
    Toastify({
      text: "SUCCESSFULLY ADDED",
      duration: 2000,
      style: {
        background: "#a153f9",
        color: "#161618",
        fontWeight: "700",
        boxShadow: "none",
        border: "1px #161618 solid",
        borderRadius: "none",
        minWidth: "max-content",
      },
      offset: {
        y: 50,
      },
    }).showToast();
  }
  // USE UPDATE CART ITEMS FUNCTION
  updateCartItems();
};

/* UPDATE CART ITEMS FUNCTION */
const updateCartItems = () => {
  displayCartItems();
  displayFullPrice();
  displayDiscount();
  displayTotal();
  // SAVE CART TO LOCALSTORAGE
  localStorage.setItem("CART", JSON.stringify(cart));
};

/* DISPLAY CART ITEMS FUNCTION */
const displayCartItems = () => {
  // SET HTML CONTENT TO EMPTY ON CART ITEMS ELEMENT
  cartItemsElement.innerHTML = "";
  // USE A FUNCTION ON EACH ITEM OF CART ARRAY
  cart.forEach((item) => {
    // SET HTML CONTENT ON CART ITEMS ELEMENT
    cartItemsElement.innerHTML += `
          <li class="item">
              <div class="item__game">
                  <img src="${item.cartImage}" alt="${item.name}" />
                  <div class="item__platform">
                      <img src="${item.platformLogo}" alt="${item.platform}" />
                      <p>${item.platform}</p>
                  </div>
              </div>
              <div class="item__quantity">
                  <i class="fa-solid fa-circle-minus" onclick="changeCartItemsQuantity('minus', ${item.id})"></i>
                  <p id="item__quantity--display">${item.quantity}</p>
                  <i class="fa-solid fa-circle-plus" onclick="changeCartItemsQuantity('plus', ${item.id})"></i>
              </div>
              <div class="item__cost">
                  <div class="item__discount">-<span>${item.discount}</span></div>
                  <div class="item__price">
                      <p class="item__price--base">$<span>${item.basePrice}</span> USD</p>
                      <p class="item__price--final">$<span>${item.finalPrice}</span> USD</p>
                  </div>
                  <i class="fa-solid fa-trash" onclick="removeItemFromCart(${item.id})"></i>
              </div>
          </li>
      `;
  });
};

/* DISPLAY FULL PRICE FUNCTION */
const displayFullPrice = () => {
  // INITIALIZE FULL PRICE VARIABLE TO 0
  let fullPrice = 0;
  // USE A FUNCTION ON EACH ITEM OF CART ARRAY
  cart.forEach((item) => {
    fullPrice += item.basePrice * item.quantity;
  });
  // SET HTML CONTENT (FULL PRICE VARIABLE) ON FULL PRICE ELEMENT
  fullPriceElement.innerHTML = fullPrice;
};

/* DISPLAY DISCOUNT FUNCTION */
const displayDiscount = () => {
  // INITIALIZE DISCOUNT VARIABLE TO 0
  let discount = 0;
  // USE A FUNCTION ON EACH ITEM OF CART ARRAY
  cart.forEach((item) => {
    discount += item.basePrice * item.quantity - item.finalPrice * item.quantity;
  });
  // SET HTML CONTENT (DISCOUNT VARIABLE) ON DISCOUNT ELEMENT
  discountElement.innerHTML = discount;
};

/* DISPLAY TOTAL FUNCTION */
const displayTotal = () => {
  // INITIALIZE TOTAL VARIABLE TO 0
  let total = 0;
  // USE A FUNCTION ON EACH ITEM OF CART ARRAY
  cart.forEach((item) => {
    total += item.finalPrice * item.quantity;
  });
  // SET HTML CONTENT (TOTAL VARIABLE) ON TOTAL ELEMENT
  totalElement.innerHTML = total;
};

/* CHANGE CART ITEMS QUANTITY FUNCTION */
const changeCartItemsQuantity = (operator, id) => {
  // SET CART ARRAY AS THE RESULT OF EXECUTE A CALLBACK FUNCTION ON EACH ITEM OF IT
  cart = cart.map((item) => {
    // SET QUANTITY VARIABLE AS ITEM'S QUANTITY PROPERTY VALUE
    let quantity = item.quantity;
    if (item.id === id) {
      // IF OPERATOR IS "MINUS" AND QUANTITY IS GREATER THAN 1, THEN DECREASE QUANTITY BY 1
      if (operator === "minus" && quantity > 1) quantity--;
      // IF OPERATOR IS "PLUS", THEN INCREASE QUANTITY BY 1
      if (operator === "plus") quantity++;
    }
    // RETURN AN OBJECT WITH ITEM ON IT AND ITS QUANTITY
    return { ...item, quantity };
  });
  // USE UPDATE CART ITEMS FUNCTION
  updateCartItems();
};

/* REMOVE ITEM FROM CART ARRAY */
const removeItemFromCart = (id) => {
  // SET CART ARRAY AS THE RESULT OF FILTER EACH ITEM WHOSE ID IS NOT THE ONE THAT WILL BE REMOVED
  cart = cart.filter((item) => item.id !== id);
  // USE UPDATE CART ITEMS FUNCTION
  updateCartItems();
};

/* CLEAR CART ITEMS FUNCTIONS */
const clearCartItems = () => {
  // SET CART ARRAY AS EMPTY
  cart = [];
  // USE UPDATE CART ITEMS FUNCTION
  updateCartItems();
};

/* FEATURE NOT AVAILABLE FUNCTION */
const featureNotAvailable = () => {
  // USE A SWEETALERT 2 "FEATURE NOT AVAILABLE" MODAL
  Swal.fire({
    color: "#ffffff",
    title: "FEATURE NOT AVAILABLE",
    background: "#454546",
    showConfirmButton: false,
    imageUrl: "./img/alert.png",
    imageWidth: 96,
    imageHeight: 85,
  });
};

// USE UPDATE CART ITEMS FUNCTION
updateCartItems();
