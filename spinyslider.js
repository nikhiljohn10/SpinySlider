var isLoaded = false,
    slider, img = [],
    images = [
        "images/opera.png",
        "images/chrome.png",
        "images/firefox.png",
        "images/safari.png",
        "images/ie.png"
    ];
for (var i in images) {
    if (images.hasOwnProperty(i)) {
        img.push("<span id=\"slide-" + (parseInt(i) + 1) + "\"><img src=\"" + images[i] + "\" /></span>");
    }
}

function init(slides) {
    slider = $(".slider");
    isLoaded = true;
}

$(document).ready(function() {
    if (isLoaded) {
        slider.on("click", "img", function(event) {
            console.log(event);
        });
    }
});

init(img);
