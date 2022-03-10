"user strict";

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const searchButton = document.querySelector(".fa-search");
const searchBlock = document.querySelector(".search-block");
const closeSearchBlock = document.querySelector(".fa-times");
let productAddedToCart = 0;
// swiper slider
let data = "";
const slider = new Swiper(".swiper", {
  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper = new Swiper(".category-menu-container", {
  loop: false,
  spaceBetween: 20,
});

// get food produts

const getFoodProduct = async () => {
  const url = "http://localhost:3000/foods/";
  const request = await fetch(url);
  data = await request.json();
  showFoods();
};

const showFoods = () => {
  const printPost = document.querySelector(".foods-items");
  data.forEach((element) => {
    printPost.insertAdjacentHTML(
      "afterbegin",
      `<a href="detail.html?id=${element.id}">
          <div class="foods-items-content">
            <div class="foods-items-content-text">
              <h3>${element.foodTitle}</h3>
              <p class="foods-items-content-text-decription">
                ${element.foodDescription}
              </p>
              <p class="foods-items-content-text-price">
                <strong>${element.foodPrice} сом</strong>
              </p>
              <p class="foods-items-content-text-id">id: ${element.id}</p>
            </div>
            <div class="foods-items-content-img">
              ${
                localStorage.getItem("productId") == element.id &&
                localStorage.getItem("productCount")
                  ? "<span>" + localStorage.getItem("productCount") + "</span>"
                  : " "
              }
              </span>
              <img src="${element.foodImg}" alt="" />
            </div>
          </div>
        </a>
        <hr>
      `
    );
  });
};

// search
const showSearchBlock = function () {
  header.classList.add("hidden");
  for (let prop of sections) {
    prop.classList.add("hidden");
  }
  searchBlock.classList.remove("hidden");
};

const hideSearchBlock = function () {
  header.classList.remove("hidden");
  for (let prop of sections) {
    prop.classList.remove("hidden");
  }
  searchBlock.classList.add("hidden");
};

searchButton.addEventListener("click", showSearchBlock);
closeSearchBlock.addEventListener("click", hideSearchBlock);
window.addEventListener("DOMContentLoaded", getFoodProduct);
