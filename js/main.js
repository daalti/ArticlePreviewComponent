const shareBtn = document.querySelector(".icon-container");
const socials = document.querySelector(".card-socials");



// Click state
shareBtn.addEventListener("click", () => {
  socials.classList.toggle("opacity");
  shareBtn.classList.toggle("click");
});
