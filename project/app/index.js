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
  const url = "http://localhost:3000/foods";
  const request = await fetch(url);
  data = await request.json();
  showFoods();
};

const showFoods = () => {
  const printPost = document.querySelector(".foods-items");
  data.forEach((element) => {
    console.log(element);
    printPost.insertAdjacentHTML(
      "afterbegin",
      `<div class="foods-items-content">
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
                <img src="${element.foodImg}" alt="" />
          </div>
        </div>
        <hr>
      `
    );
  });
};

window.addEventListener("DOMContentLoaded", getFoodProduct);
