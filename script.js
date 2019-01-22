const colorBtn = document.querySelector(".btn");
const bodyBcg = document.querySelector("body");

const colors = ["red", "green", "blue"];

colorBtn.addEventListener("click", function() {
  //   bodyBcg.style.backgroundColor = "blue";
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
});
