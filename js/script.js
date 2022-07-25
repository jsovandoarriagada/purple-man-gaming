/* PRODUCTS ARRAY */
const products = [
  { id: 0, name: "Tiny Tina's Wonderlands", cardImage: "./img/cards/0.jpg", cartImage: "../img/cart/0.jpg", platform: "EPIC GAMES", platformLogo: "./img/logo/epic.png", discount: "20%", basePrice: 50, finalPrice: 40 },
  { id: 1, name: "Nightmare Reaper", cardImage: "./img/cards/1.jpg", cartImage: "../img/cart/1.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "50%", basePrice: 50, finalPrice: 25 },
  { id: 2, name: "Symphony of War", cardImage: "./img/cards/2.jpg", cartImage: "../img/cart/2.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "30%", basePrice: 40, finalPrice: 28 },
  { id: 3, name: "Railway Empire", cardImage: "./img/cards/3.jpg", cartImage: "../img/cart/3.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 45, finalPrice: 36 },
  { id: 4, name: "Wolcen", cardImage: "./img/cards/4.jpg", cartImage: "../img/cart/4.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "40%", basePrice: 50, finalPrice: 30 },
  { id: 5, name: "Chaos Reborn", cardImage: "./img/cards/5.jpg", cartImage: "../img/cart/5.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 40, finalPrice: 32 },
  { id: 6, name: "Final Fantasy VII Remake Intergrade", cardImage: "../img/cards/6.jpg", cartImage: "./img/cart/6.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 50, finalPrice: 40 },
  { id: 7, name: "Watch Dogs Legion", cardImage: "./img/cards/7.jpg", cartImage: "../img/cart/7.jpg", platform: "UBISOFT", platformLogo: "./img/logo/ubisoft.png", discount: "40%", basePrice: 60, finalPrice: 36 },
  { id: 8, name: "Destroy All Humans! 2", cardImage: "./img/cards/8.jpg", cartImage: "../img/cart/8.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "10%", basePrice: 30, finalPrice: 27 },
  { id: 9, name: "S.T.A.L.K.E.R. 2", cardImage: "./img/cards/9.jpg", cartImage: "../img/cart/9.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 25, finalPrice: 20 },
  { id: 10, name: "Monster Hunter Rise Sunbreak", cardImage: "../img/cards/10.jpg", cartImage: "./img/cart/10.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "50%", basePrice: 50, finalPrice: 25 },
  { id: 11, name: "Steel Rising", cardImage: "./img/cards/11.jpg", cartImage: "../img/cart/11.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "30%", basePrice: 40, finalPrice: 28 },
  { id: 12, name: "Stray", cardImage: "./img/cards/12.jpg", cartImage: "../img/cart/12.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 45, finalPrice: 36 },
  { id: 13, name: "NBA 2K23", cardImage: "./img/cards/13.jpg", cartImage: "../img/cart/13.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "40%", basePrice: 50, finalPrice: 30 },
  { id: 14, name: "Endling", cardImage: "./img/cards/14.jpg", cartImage: "../img/cart/14.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 40, finalPrice: 32 },
  { id: 15, name: "Capcom Fighting Collection", cardImage: "./img/cards/15.jpg", cartImage: "../img/cart/15.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 50, finalPrice: 40 },
  { id: 16, name: "Gotham Knights", cardImage: "./img/cards/16.jpg", cartImage: "../img/cart/16.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "40%", basePrice: 60, finalPrice: 36 },
  { id: 17, name: "Farming Simulator 22", cardImage: "./img/cards/17.jpg", cartImage: "../img/cart/17.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "10%", basePrice: 30, finalPrice: 27 },
  { id: 18, name: "Immortal Fenyx Rising", cardImage: "./img/cards/18.jpg", cartImage: "../img/cart/18.jpg", platform: "UBISOFT", platformLogo: "./img/logo/ubisoft.png", discount: "20%", basePrice: 25, finalPrice: 20 },
  { id: 19, name: "Shredder's Revenge", cardImage: "./img/cards/19.jpg", cartImage: "../img/cart/19.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 50, finalPrice: 40 },
  { id: 20, name: "Builder Simulator", cardImage: "./img/cards/20.jpg", cartImage: "../img/cart/20.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "50%", basePrice: 50, finalPrice: 25 },
  { id: 21, name: "Neon White", cardImage: "./img/cards/21.jpg", cartImage: "../img/cart/21.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "30%", basePrice: 40, finalPrice: 28 },
  { id: 22, name: "Scorn", cardImage: "./img/cards/22.jpg", cartImage: "../img/cart/22.jpg", platform: "STEAM", platformLogo: "./img/logo/steam.png", discount: "20%", basePrice: 45, finalPrice: 36 },
  { id: 23, name: "Ghost Recon Wildlands", cardImage: "./img/cards/23.jpg", cartImage: "../img/cart/23.jpg", platform: "UBISOFT", platformLogo: "./img/logo/ubisoft.png", discount: "40%", basePrice: 50, finalPrice: 30 },
];

/* SELECT ELEMENTS */
const productsElement = document.querySelector(".products");
const cartItemsElement = document.querySelector(".cart__items");
const fullPriceElement = document.getElementById("summary__full");
const discountElement = document.getElementById("summary__discount");
const totalElement = document.getElementById("summary__total");

/* DISPLAY PRODUCTS FUNCTION */
const displayProducts = () => {
  // USE A FUNCTION ON EACH PRODUCT OF PRODUCTS ARRAY
  products.forEach((product) => {
    // SET HTML CONTENT (EACH PRODUCT OF PRODUCTS ARRAY) ON PRODUCTS ELEMENT
    productsElement.innerHTML += `           
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

// USE DISPLAY PRODUCTS FUNCTION
displayProducts();

/* CART ARRAY */
let cart = JSON.parse(window.localStorage.getItem("CART")) || [];

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
        border: "none",
        borderRadius: "none",
        minWidth: "max-content",
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
        border: "none",
        borderRadius: "none",
        minWidth: "max-content",
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
    // SET HTML CONTENT (EACH ITEM PUSHED TO CART ARRAY) ON CART ITEMS ELEMENT
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
                <div class="item__discount">-<span>${item.discount}</span>%</div>
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

updateCartItems();
