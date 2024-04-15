function init() {
    let map = new ymaps.Map('map', {
        center: [51.662870, 39.206764],
        zoom: 17
    });
    
    let placemark = new ymaps.Placemark([51.662870, 39.206764], {}, {});
    
    map.geoObjects.add(placemark);
}

ymaps.ready(init);