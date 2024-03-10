console.log("test js");
const sliderOneLeft = document.getElementById("sliderOneLeft");
const sliderOneRight = document.getElementById("sliderOneRight");
const secondSlider = document.getElementById("secondSlider");
const sliderImages = [
  "bruce-mars-gJtDg6WfMlQ-unsplash.jpg",
  "danielle-cerullo-CQfNt66ttZM-unsplash.jpg",
  "risen-wang-20jX9b35r_M-unsplash.jpg",
  "sven-mieke-EuwD039Svug-unsplash.jpg",
];
const sliders2Items = [
  {
    title: "FIT",
    image: "url(../img/sven-mieke-EuwD039Svug-unsplashSM.jpg)",
    btnUrl: "",
  },
  {
    title: "PILATES",
    image: "url(../img/bruce-mars-gJtDg6WfMlQ-unsplashSM.jpg)",
    btnUrl: "",
  },
  {
    title: "GROUP CYCLE",
    image: "url(../img/munbaik-cycling-clothing-gPXh9Nl7KHk-unsplashSM.jpg)",
    btnUrl: "",
  },
  // {
  //   title: "Group 4",
  //   image: "url(../img/sven-mieke-EuwD039Svug-unsplashSM.jpg)",
  //   btnUrl: "",
  // },
  // {
  //   title: "Group 5",
  //   image: "url(../img/bruce-mars-gJtDg6WfMlQ-unsplashSM.jpg)",
  //   btnUrl: "",
  // },
  // {
  //   title: "Group 6",
  //   image: "url(../img/munbaik-cycling-clothing-gPXh9Nl7KHk-unsplashSM.jpg)",
  //   btnUrl: "",
  // },
];
let currentItem = 0;
// (function handleVisibility() {
//   if (currentItem == 0) {
//     sliderOneLeft.style.visibility = "hidden";
//   } else if (currentItem > 0) {
//     console.log("deberia de hacerlo visible");
//     sliderOneLeft.style.visibility = "visible";
//   }
// })();
function handleVisibility() {
  if (currentItem == 0) {
    sliderOneLeft.style.visibility = "hidden";
  } else if (currentItem > 0 && currentItem <= sliders2Items.length) {
    console.log("deberia de hacerlo visible");
    sliderOneLeft.style.visibility = "visible";
    sliderOneRight.style.visibility = "visible";    
  }
  if (currentItem >= sliders2Items.length - 1) {
    console.log("deberia de ocultar el boton de la derecha");
    sliderOneRight.style.visibility = "hidden";
  }
}
handleVisibility();
function changeSlide(arr, dir) {
  if (dir == "next" && currentItem < arr.length) {
    currentItem = currentItem + 1;
    console.log(currentItem);
    secondSlider.style.backgroundImage = arr[currentItem].image;
    secondSlider.querySelector('h2').textContent = arr[currentItem].title
    console.log(arr[currentItem].image);
  }
  if (dir == "prev" && currentItem > 0) {
    currentItem = currentItem - 1;
    console.log(currentItem);
    secondSlider.style.backgroundImage = arr[currentItem].image;
    secondSlider.querySelector('h2').textContent = arr[currentItem].title
  }
  handleVisibility();
}

sliderOneLeft.addEventListener("click", () => {
  console.log("prueba de boton left");
  changeSlide(sliders2Items, "prev");
  // //   secondSlider.style.backgroundImage =
  // //     "url('../img/risen-wang-20jX9b35r_M-unsplash.jpg')";
  // secondSlider.style.backgroundImage = `"url(../img/${sliderImages[2]})";`;
  // console.log(sliderImages);
});

sliderOneRight.addEventListener("click", () => {
  console.log("prueba boton right");
  changeSlide(sliders2Items, "next");
  // console.log(`"url(../img/${sliderImages[2]})"`);
  // secondSlider.style.backgroundImage = `url(../img/${sliderImages[0]})`;
});
