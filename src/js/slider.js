const slides = [
    {
        imgUrl: "./files/images/slider_images/Ty_N_Steel.png",
        symbol: "TY"
    },

    {
        imgUrl: "./files/images/slider_images/MAX.png",
        symbol: "MAX"
    },

    {
        imgUrl: "./files/images/slider_images/EMME.png",
        symbol: "EMME"
    },

    {
        imgUrl: "./files/images/slider_images/Noel_Bracken.png",
        symbol: "CAMILE"
    },

    {
        imgUrl: "./files/images/slider_images/Nat_Navy.png",
        symbol: "CAMILE"
    },

    {
        imgUrl: "./files/images/slider_images/Roan_L_White.png",
        symbol: "CAMILE"
    },

    {
        imgUrl: "./files/images/slider_images/Camile_Navy_3Quarter.png",
        symbol: "CAMILE"
    }
];

const sliderButtons = document.querySelectorAll("[data-slider-button]");
const slide = document.getElementById("range-section__slider").querySelector(".slide");
const slideImg = slide.querySelector("img");
const sliderCounter = document.getElementById("range-section").querySelector(".slider-counter");

let currentSlide = 0;
//const slidesCounter = ...



sliderButtons.forEach((button) => {
    button.addEventListener("click", handleSliderButtonClick);
});

sliderCounter.querySelector(".slider-counter__total").textContent = slides.length;

if(slides.length > 0){
    renderSlide(slides[0]);
}


function renderSlide(slideToRender){
    slideImg.src = slideToRender.imgUrl;
    document.getElementById("range-section").querySelector(".slider__symbol").textContent = slideToRender.symbol;
    sliderCounter.querySelector(".slider-counter__current").textContent = currentSlide + 1;
}

function handleSliderButtonClick(event){
    const offset = event.target.dataset.sliderButton === "next" ? 1 : -1;
    currentSlide += offset;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    else if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }
    
    renderSlide(slides[currentSlide]);
}