const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const portfolioImg = document.querySelector("slideshow-container");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// let counter = 0;
// let images = [];
// let time = 5000;

// //image list
// images[0] = "./img/jeopardy-start.jpg";
// images[1] = "./img/jeopardy-round-1-large.jpg";
// images[2] = "./img/jeopardy-round-2-large.jpg";
// images[3] = "./img/jeopardy-final-round.jpg";

// //change image

// function changeImg() {
//   document.slide.src = images[counter];

//   if (counter < images.length - 1) {
//     counter++;
//   } else {
//     counter = 0;
//   }

//   setTimeout("changeImg()", time);
// }

// window.onload = changeImg;
