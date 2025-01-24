(() => {
    // Главный слайдер (верхняя большая картинка)
    const handleMainSlideChange = (offset) => {
        const mainCarousel = document.querySelector(".portfolio_imgs_main_section");
        const mainImage = mainCarousel.querySelector(".main_photo");
        const thumbnails = [...document.querySelectorAll(".photo_navigation_item")];

        if (!mainImage || thumbnails.length === 0) return;

        // Определяем текущий индекс активного слайда
        const currentIndex = thumbnails.findIndex((thumb) => 
            thumb.src === mainImage.src
        );
        let newIndex = currentIndex + offset;

        // Зацикливание слайдов
        if (newIndex < 0) newIndex = thumbnails.length - 1;
        if (newIndex >= thumbnails.length) newIndex = 0;

        // Обновляем изображение в главном слайдере
        mainImage.src = thumbnails[newIndex].src;

        // Обновляем активный класс у миниатюр
        thumbnails.forEach((thumb, index) => {
            if (index === newIndex) {
                thumb.classList.add("active");
            } else {
                thumb.classList.remove("active");
            }
        });
    };

    // Навигация по миниатюрам (нижний слайдер с бесконечной прокруткой)
    const handleThumbnailNavigation = (offset) => {
        const thumbnailWrapper = document.querySelector(".portfolio_page_photos");
        const thumbnailItems = [...thumbnailWrapper.querySelectorAll(".photo_navigation_item")];

        if (!thumbnailWrapper || thumbnailItems.length === 0) return;

        // Размер одного элемента (ширина миниатюры + отступы)
        const thumbnailWidth = thumbnailItems[0].offsetWidth;
        const visibleWidth = thumbnailWrapper.offsetWidth;

        // Дублируем элементы для бесконечной прокрутки
        if (thumbnailWrapper.dataset.cloned !== "true") {
            thumbnailItems.forEach((item) => {
                const clone = item.cloneNode(true);
                thumbnailWrapper.appendChild(clone);
            });
            thumbnailWrapper.dataset.cloned = "true";
        }

        // Текущая прокрутка
        let currentScroll = thumbnailWrapper.scrollLeft;

        // Новая прокрутка
        let newScroll = currentScroll + offset * visibleWidth;

        // Зацикливание
        const maxScroll = thumbnailWidth * thumbnailItems.length;

        if (newScroll < 0) {
            newScroll += maxScroll;
        } else if (newScroll >= maxScroll) {
            newScroll -= maxScroll;
        }

        thumbnailWrapper.scrollTo({
            left: newScroll,
            behavior: "smooth",
        });
    };

    // Подключение обработчиков событий
    const prevMainButton = document.querySelector(".portfolio_imgs_main_section .prev");
    const nextMainButton = document.querySelector(".portfolio_imgs_main_section .next");
    const prevThumbButton = document.querySelector(".portfolio_page_photo_navigation .prev");
    const nextThumbButton = document.querySelector(".portfolio_page_photo_navigation .next");

    if (prevMainButton) {
        prevMainButton.addEventListener("click", () => handleMainSlideChange(-1));
    }

    if (nextMainButton) {
        nextMainButton.addEventListener("click", () => handleMainSlideChange(1));
    }

    if (prevThumbButton) {
        prevThumbButton.addEventListener("click", () => handleThumbnailNavigation(-1));
    }

    if (nextThumbButton) {
        nextThumbButton.addEventListener("click", () => handleThumbnailNavigation(1));
    }

    // Добавление кликабельности миниатюр
    const thumbnails = document.querySelectorAll(".photo_navigation_item");
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            const mainImage = document.querySelector(".main_photo");
            if (mainImage) {
                mainImage.src = thumbnail.src;
            }

            // Обновляем активный класс
            thumbnails.forEach((thumb) => thumb.classList.remove("active"));
            thumbnail.classList.add("active");
        });
    });
})();