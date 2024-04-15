const handleImageChange = (offset)=>{
    const activeSlide = document.querySelector("[data-active]")
    const slides = [...document.querySelectorAll(".slide")]
    const currentIndex = slides.indexOf(activeSlide)
    let newIndex = currentIndex + offset;
    
    if(newIndex < 0) newIndex = slides.length - 1
    if(newIndex >= slides.length ) newIndex = 0
    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active
    
}

const onNext = ()=> handleImageChange(1)
const onPrev = ()=> handleImageChange(-1)