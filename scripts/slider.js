// Скрипт для слайдера "Наши работы"
const handlePortfolioSlideChange = (offset) => {
    const carousel = document.querySelector(".portfolio_section .carousel");
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll(".slide")];
    const activeSlide = carousel.querySelector(".slide[data-active]");

    if (!activeSlide) return;

    const currentIndex = slides.indexOf(activeSlide);
    let newIndex = currentIndex + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
};

// Обработчики переключения для "Наши работы"
const onNext = () => handlePortfolioSlideChange(1);
const onPrev = () => handlePortfolioSlideChange(-1);

// Скрипт для слайдера "Отзывы"
const handleReviewSlideChange = (offset) => {
    const carousel = document.querySelector(".review_section .carousel.review");
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll(".slide_review")];
    const activeSlide = carousel.querySelector(".slide_review[data-active]");

    if (!activeSlide) return;

    const currentIndex = slides.indexOf(activeSlide);
    let newIndex = currentIndex + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
};

// Обработчики переключения для "Отзывы"
const onNextRev = () => handleReviewSlideChange(1);
const onPrevRev = () => handleReviewSlideChange(-1);































//const handleImageChange = (offset)=>{
//    const activeSlide = document.querySelector("[data-active]")
//    const slides = [...document.querySelectorAll(".slide")]
//    const currentIndex = slides.indexOf(activeSlide)
//    let newIndex = currentIndex + offset;
//    
//    if(newIndex < 0) newIndex = slides.length - 1
//    if(newIndex >= slides.length ) newIndex = 0
//    slides[newIndex].dataset.active = true;
//    delete activeSlide.dataset.active
//    
//}
//
//const onNext = ()=> handleImageChange(1)
//const onPrev = ()=> handleImageChange(-1)