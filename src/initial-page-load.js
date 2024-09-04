import mainDishImage from "../images/main-dish.svg";
import breakFastImage from "../images/break-fast.svg";
import dessertImage from "../images/dessert.svg";
import browserAllImage from "../images/brwse-all.svg";

export default function InitialPageLoad() {
  const divContent = document.querySelector("#content");
  const divIntro = createIntroductionSection();
  const divCategory = createCategorySection();

  divContent.appendChild(divIntro);
  divContent.appendChild(divCategory);
}

function createIntroductionSection() {
  const divIntroduction = document.createElement("div");
  divIntroduction.classList.add("introduction");
  //create element
  const pWelcome = document.createElement("p");
  pWelcome.textContent = "WELCOME";
  const h2Title = document.createElement("h2");
  h2Title.textContent = "Dive into Delights Of Delectable Food";
  const pDes = document.createElement("p");
  pDes.textContent =
    "Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship";

  const divContainer = document.createElement("div");
  const orderBtn = document.createElement("button");
  orderBtn.id = "order";
  orderBtn.textContent = "Order now";

  const watchvideoBtn = document.createElement("button");
  watchvideoBtn.id = "watch-video";
  watchvideoBtn.textContent = "Watch Video";

  divContainer.appendChild(orderBtn);
  divContainer.appendChild(watchvideoBtn);

  divIntroduction.appendChild(pWelcome);
  divIntroduction.appendChild(h2Title);
  divIntroduction.appendChild(pDes);
  divIntroduction.appendChild(divContainer);

  return divIntroduction;
}

function createCategorySection() {
  const divCategory = document.createElement("div");
  divCategory.classList.add("category");

  const pTitle = document.createElement("p");
  pTitle.textContent = "Customer Favorites";
  const h2Title = document.createElement("h2");
  h2Title.textContent = "Popular Catagories";

  const divCategoryGrid = document.createElement("div");
  divCategoryGrid.classList.add("category-grid");
  const card1 = createCardItem(mainDishImage, "Main dish", "(86 dishes)");
  const card2 = createCardItem(breakFastImage, "Break fast", "(12 break fast)");
  const card3 = createCardItem(dessertImage, "Dessert", "(48 dessert)");
  const card4 = createCardItem(browserAllImage, "Browse All", "(255 itemss)");

  divCategoryGrid.appendChild(card1);
  divCategoryGrid.appendChild(card2);
  divCategoryGrid.appendChild(card3);
  divCategoryGrid.appendChild(card4);

  divCategory.appendChild(pTitle);
  divCategory.appendChild(h2Title);
  divCategory.appendChild(divCategoryGrid);

  return divCategory;
}

function createCardItem(src, title, des) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const imgEle = document.createElement("img");
  imgEle.setAttribute("src", src);

  const h3Title = document.createElement("h3");
  h3Title.textContent = title;

  const pDes = document.createElement("p");
  pDes.textContent = des;

  divCard.appendChild(imgEle);
  divCard.appendChild(h3Title);
  divCard.appendChild(pDes);

  return divCard;
}
