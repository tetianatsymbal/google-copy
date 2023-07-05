const luckyBtn = document.getElementById("lucky-btn");
const oddityLogo = document.querySelector(".oddity-logo");
const googleLogo = document.querySelector(".logo-img");

luckyBtn.addEventListener("click", function () {
  oddityLogo.classList.toggle("oddity-logo_show");
  googleLogo.classList.toggle("logo-img_hide");
});
