
document.addEventListener("DOMContentLoaded", function() {
    const mainPhoto = document.querySelector(".main_photo");
    const photosContainer = document.querySelector(".portfolio_page_photos");
    const navigationPhotos = document.querySelectorAll(".photo_navigation_item");
    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");

    let currentIndex = 0;

    function setMainPhoto(index) {
        mainPhoto.src = navigationPhotos[index].src;
    }

    function switchPhoto(direction) {
        if (direction === "next") {
            currentIndex++;
            if (currentIndex >= navigationPhotos.length) {
                currentIndex = 0;
            }
        } else if (direction === "prev") {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = navigationPhotos.length - 1;
            }
        }
        setMainPhoto(currentIndex);
    }

    function scrollNavigationPhotos(direction) {
        const containerWidth = photosContainer.clientWidth;
        const totalWidth = Array.from(navigationPhotos).reduce((acc, item) => acc + item.offsetWidth, 0); // Суммируем реальные размеры всех миниатюр
        let scrollPosition = photosContainer.scrollLeft;

        if (direction === "next") {
            scrollPosition += containerWidth;
            if (scrollPosition > totalWidth - containerWidth) {
                scrollPosition = totalWidth - containerWidth;
            }
        } else if (direction === "prev") {
            scrollPosition -= containerWidth;
            if (scrollPosition < 0) {
                scrollPosition = 0;
            }
        }

        photosContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }

    navigationPhotos.forEach((photo, index) => {
        photo.addEventListener("click", () => {
            currentIndex = index;
            setMainPhoto(currentIndex);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            switchPhoto("prev");
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            switchPhoto("next");
        });
    });

    document.querySelectorAll(".portfolio_nav_button").forEach(button => {
        button.addEventListener("click", event => {
            const direction = event.target.innerText.trim() === "»" ? "next" : "prev";
            scrollNavigationPhotos(direction);
        });
    });
});






//document.addEventListener("DOMContentLoaded", function() {
//    const mainPhoto = document.querySelector(".main_photo");
//    const photosContainer = document.querySelector(".portfolio_page_photos");
//    const navigationPhotos = document.querySelectorAll(".photo_navigation_item");
//    const prevButtons = document.querySelectorAll(".prev");
//    const nextButtons = document.querySelectorAll(".next");
//
//    let currentIndex = 0;
//
//    function setMainPhoto(index) {
//        mainPhoto.src = navigationPhotos[index].src;
//    }
//
//    function switchPhoto(direction) {
//        if (direction === "next") {
//            currentIndex++;
//            if (currentIndex >= navigationPhotos.length) {
//                currentIndex = 0;
//            }
//        } else if (direction === "prev") {
//            currentIndex--;
//            if (currentIndex < 0) {
//                currentIndex = navigationPhotos.length - 1;
//            }
//        }
//        setMainPhoto(currentIndex);
//    }
//
//    function scrollNavigationPhotos(direction) {
//        const containerWidth = photosContainer.clientWidth;
//        const totalWidth = Array.from(navigationPhotos).reduce((acc, item) => acc + item.offsetWidth, 0); // Суммируем реальные размеры всех миниатюр
//        let scrollPosition = photosContainer.scrollLeft;
//
//        if (direction === "next") {
//            scrollPosition += containerWidth;
//            if (scrollPosition > totalWidth - containerWidth) {
//                scrollPosition = totalWidth - containerWidth;
//            }
//        } else if (direction === "prev") {
//            scrollPosition -= containerWidth;
//            if (scrollPosition < 0) {
//                scrollPosition = 0;
//            }
//        }
//
//        photosContainer.scrollTo({
//            left: scrollPosition,
//            behavior: "smooth"
//        });
//    }
//
//    navigationPhotos.forEach((photo, index) => {
//        photo.addEventListener("click", () => {
//            currentIndex = index;
//            setMainPhoto(currentIndex);
//        });
//    });
//
//    prevButtons.forEach(button => {
//        button.addEventListener("click", () => {
//            switchPhoto("prev");
//        });
//    });
//
//    nextButtons.forEach(button => {
//        button.addEventListener("click", () => {
//            switchPhoto("next");
//        });
//    });
//
//    document.querySelectorAll(".portfolio_nav_button").forEach(button => {
//        button.addEventListener("click", event => {
//            const direction = event.target.innerText.trim() === "»" ? "next" : "prev";
//            scrollNavigationPhotos(direction);
//        });
//    });
//});







//document.addEventListener("DOMContentLoaded", function() {
//    const mainPhoto = document.querySelector(".main_photo");
//    const photosContainer = document.querySelector(".portfolio_page_photos");
//    const navigationPhotos = document.querySelectorAll(".photo_navigation_item");
//    const prevButtons = document.querySelectorAll(".prev");
//    const nextButtons = document.querySelectorAll(".next");
//
//    let currentIndex = 0;
//
//    function setMainPhoto(index) {
//        mainPhoto.src = navigationPhotos[index].src;
//    }
//
//    function switchPhoto(direction) {
//        if (direction === "next") {
//            currentIndex++;
//            if (currentIndex >= navigationPhotos.length) {
//                currentIndex = 0;
//            }
//        } else if (direction === "prev") {
//            currentIndex--;
//            if (currentIndex < 0) {
//                currentIndex = navigationPhotos.length - 1;
//            }
//        }
//        setMainPhoto(currentIndex);
//    }
//
//    function scrollNavigationPhotos(direction) {
//        const containerWidth = photosContainer.clientWidth;
//        const totalWidth = navigationPhotos.length * 90; // 80px for image + 10px gap
//        let scrollPosition = photosContainer.scrollLeft;
//
//        if (direction === "next") {
//            scrollPosition += containerWidth;
//            if (scrollPosition > totalWidth - containerWidth) {
//                scrollPosition = totalWidth - containerWidth;
//            }
//        } else if (direction === "prev") {
//            scrollPosition -= containerWidth;
//            if (scrollPosition < 0) {
//                scrollPosition = 0;
//            }
//        }
//
//        photosContainer.scrollTo({
//            left: scrollPosition,
//            behavior: "smooth"
//        });
//    }
//
//    navigationPhotos.forEach((photo, index) => {
//        photo.addEventListener("click", () => {
//            currentIndex = index;
//            setMainPhoto(currentIndex);
//        });
//    });
//
//    prevButtons.forEach(button => {
//        button.addEventListener("click", () => {
//            switchPhoto("prev");
//        });
//    });
//
//    nextButtons.forEach(button => {
//        button.addEventListener("click", () => {
//            switchPhoto("next");
//        });
//    });
//
//    document.querySelectorAll(".portfolio_nav_button").forEach(button => {
//        button.addEventListener("click", event => {
//            const direction = event.target.innerText.trim() === "»" ? "next" : "prev";
//            scrollNavigationPhotos(direction);
//        });
//    });
//});
