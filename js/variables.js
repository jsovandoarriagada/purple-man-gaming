/* SELECT ELEMENTS */
const productsContainerElement = document.querySelector(".products__container");
const cartItemsElement = document.querySelector(".cart__items");
const fullPriceElement = document.getElementById("summary__full");
const discountElement = document.getElementById("summary__discount");
const totalElement = document.getElementById("summary__total");
const productsButtonElement = document.getElementById("products");
const cartButtonElement = document.getElementById("cart");
const productsElement = document.querySelector(".products");
const cartElement = document.querySelector(".cart");

/* PRODUCTS ARRAY */
let products = [];

/* CART ARRAY */
let cart = JSON.parse(localStorage.getItem("CART")) || [];
