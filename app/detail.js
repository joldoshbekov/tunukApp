const id = new URLSearchParams(window.location.search).get("id");
const showFoods = document.querySelector(".detail-container");
const showImg = document.querySelector(".header-content-img");
let countOfProduct = document.querySelector(".detail-count").value;
const addTocart = document.getElementById("add-to-cart");

const getFoodsDetails = async function () {
  let url = "http://localhost:3000/foods/" + id;
  const requestGetFoods = await fetch(url);
  const getFoodDetails = await requestGetFoods.json();

  const foodDetailTemplate = `
      <div class="detail-content">
          <h3>${getFoodDetails.foodTitle}</h3>
          <p class="foods-items-content-text-price">
              <strong>${getFoodDetails.foodPrice} сом</strong>
          </p>
          <p class="foods-items-content-text-decription">${getFoodDetails.foodDescription}</p>
      </div>
      `;
  showImg.insertAdjacentHTML(
    "afterbegin",
    `<img src="${getFoodDetails.foodImg}" alt="" />`
  );
  showFoods.insertAdjacentHTML("afterbegin", foodDetailTemplate);

  const addProductToCart = function () {
    countOfProduct = document.querySelector(".detail-count").value;
    const localId = localStorage.setItem("productId", id);
    const localCount = localStorage.setItem("productCount", countOfProduct);
  };

  addTocart.addEventListener("click", addProductToCart);
};

window.addEventListener("DOMContentLoaded", () => getFoodsDetails());
