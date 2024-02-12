const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let currentImg = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[currentImg].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (currentImg > 0) {
    currentImg--;
  } else {
    currentImg = imgs.length - 1;
  }
  changeSlide();
});
next_btn.addEventListener("click", (e) => {
  if (currentImg < imgs.length - 1) {
    currentImg++;
  } else {
    currentImg = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
