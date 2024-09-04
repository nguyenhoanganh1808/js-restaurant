import fattoushImg from "../images/Fattoush salad.svg";
import vegetableImg from "../images/Vegetable salad.svg";
import eggImg from "../images/Egg salad.svg";
import heartImg from "../images/heart.svg";

export default function MenuPage() {
  let content = document.getElementById("content");
  content.style.background = "none";

  const introduction = renderIntroduction();
  content.appendChild(introduction);
}

function renderIntroduction() {
  const introduction = document.createElement("div");
  introduction.classList.add("introduction");
  const pMenu = document.createElement("p");
  pMenu.textContent = "Menu";
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = "Discover our amazing dishes!";
  div.appendChild(h2);

  introduction.appendChild(pMenu);
  introduction.appendChild(div);

  const foodCategory = renderCategory();
  introduction.appendChild(foodCategory);

  return introduction;
}

function renderCategory() {
  const divCategory = document.createElement("div");
  divCategory.classList.add("food-category");

  const foodCard1 = renderCategoryCard(
    fattoushImg,
    "Fattoush salad",
    "Description of the item",
    "24.00",
    "4.9"
  );
  const foodCard2 = renderCategoryCard(
    vegetableImg,
    "Vegetable salad",
    "Description of the item",
    "26.00",
    "4.9"
  );
  const foodCard3 = renderCategoryCard(
    eggImg,
    "Egg salad",
    "Description of the item",
    "23.00",
    "4.9"
  );

  const foodCard4 = renderCategoryCard(
    eggImg,
    "Egg salad",
    "Description of the item",
    "23.00",
    "4.9"
  );

  const foodCard5 = renderCategoryCard(
    eggImg,
    "Egg salad",
    "Description of the item",
    "23.00",
    "4.9"
  );

  divCategory.appendChild(foodCard1);
  divCategory.appendChild(foodCard2);
  divCategory.appendChild(foodCard3);
  divCategory.appendChild(foodCard4);
  divCategory.appendChild(foodCard5);

  return divCategory;
}

function renderCategoryCard(src, title, des, price, star) {
  const divCategoryCard = document.createElement("div");
  divCategoryCard.classList.add("food-card");

  const divFavoriteIcon = document.createElement("div");
  divFavoriteIcon.classList.add("favorite-icon");

  const imgFavoriteIcon = document.createElement("img");
  imgFavoriteIcon.src = heartImg;
  imgFavoriteIcon.classList.add("filter-white");
  divFavoriteIcon.appendChild(imgFavoriteIcon);

  const imgFood = document.createElement("img");
  imgFood.src = src;
  const dtFood = document.createElement("dt");
  dtFood.textContent = title;
  const ddFood = document.createElement("dd");
  ddFood.textContent = des;

  const divMoneyAndStar = document.createElement("div");
  const pPrice = document.createElement("p");
  pPrice.classList.add("money");
  const spanDollar = document.createElement("span");
  spanDollar.textContent = "$";
  pPrice.appendChild(spanDollar);
  pPrice.textContent = price;

  const pStart = document.createElement("p");
  pStart.classList.add("star");
  pStart.textContent = star;

  divMoneyAndStar.appendChild(pPrice);
  divMoneyAndStar.appendChild(pStart);

  divCategoryCard.appendChild(divFavoriteIcon);
  divCategoryCard.appendChild(imgFood);
  divCategoryCard.appendChild(dtFood);
  divCategoryCard.appendChild(ddFood);
  divCategoryCard.appendChild(divMoneyAndStar);

  return divCategoryCard;
}
