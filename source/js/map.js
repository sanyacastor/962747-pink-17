ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.93561270667738, 30.327544212341312],
        zoom: 16,
        controls: ['zoomControl']
    }, {
        searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.93561270667738, 30.327544212341312], {
        hintContent: 'Улица строителей 15',
        balloonContent: 'Магазин Девайс'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon-map-marker.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-15, -58]
    });

    myMap.geoObjects
        .add(myPlacemark)
});
