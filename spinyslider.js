var isLoaded = false,
    slider,
    images = [{
        id: 1,
        url: "images/opera.png"
    }, {
        id: 2,
        url: "images/chrome.png"
    }, {
        id: 3,
        url: "images/firefox.png"
    }, {
        id: 4,
        url: "images/safari.png"
    }, {
        id: 5,
        url: "images/ie.png"
    }];
var slideClasses = [
    "wide-slide left-slide",
    "side-slide left-slide",
    "main-slide center-slide",
    "side-slide right-slide",
    "wide-slide right-slide"
];

function init() {
    slider = $(".slider");
    for (var i in images) {
        if (images.hasOwnProperty(i)) {
            slider.append("<img class=\"" + slideClasses[i] + "\" src=\"" + images[i].url + "\" data-slide=\"" + images[i].id + "\" />");
        }
    }
    isLoaded = true;
}

$(document).ready(function() {
    if (isLoaded) {
        slider.on("click", "img", function(event) {
            var slide = $(event.target);
            var sid = slide[0].dataset.slide;
        });
    }
});

init();
