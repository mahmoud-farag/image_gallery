let allImgs = document.querySelectorAll(".gallery img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".full_img");
let modalCaption = document.querySelector(".caption");

allImgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    modalImg.classList.add("open");

    //change the img src and paragraph dynamically
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
  });
});

modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    modal.classList.remove("open");
    modalImg.classList.remove("open");
  }
});
