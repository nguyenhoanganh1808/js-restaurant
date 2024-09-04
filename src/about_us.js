export default function AboutUsPage() {
  const divContent = document.querySelector("#content");

  const divIntroduction = document.createElement("div");
  divIntroduction.classList.add("introduction");

  const pAboutus = document.createElement("p");
  pAboutus.textContent = "ABOUT US";
  pAboutus.classList.add("green-text");

  const h2TItle = document.createElement("h2");
  h2TItle.textContent = "A few words about us";

  const divChefIntro = document.createElement("div");
  divChefIntro.classList.add("chef-intro");
  const divChefDetail = document.createElement("div");
  divChefDetail.classList.add("chef-detail");

  const h2Chef = document.createElement("h2");
  h2Chef.textContent = "Chet Murphy";
  const pChef = document.createElement("p");
  pChef.classList.add("green-text");
  pChef.textContent = "MASTER CHEF";

  const pChefDetail = document.createElement("p");
  pChefDetail.textContent =
    "Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus.";
  const imgChef = document.createElement("img");
  imgChef.src =
    "https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_pic9.png";
  divChefDetail.appendChild(h2Chef);
  divChefDetail.appendChild(pChef);
  divChefDetail.appendChild(pChefDetail);

  divChefIntro.appendChild(divChefDetail);
  divChefIntro.appendChild(imgChef);

  divIntroduction.appendChild(pAboutus);
  divIntroduction.appendChild(h2TItle);
  divIntroduction.appendChild(divChefIntro);

  divContent.appendChild(divIntroduction);
}
