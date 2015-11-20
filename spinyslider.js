var isLoaded = false,
    slider = $(".slider"),
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
    for (var i in images) {
        if (images.hasOwnProperty(i)) {
            slider.append("<img data-slide=\"" + images[i].id + "\" class=\"" + slideClasses[i] + "\" src=\"" + images[i].url + "\" />");
        }
    }
    isLoaded = true;
}

$(document).ready(function() {
    if (isLoaded) {
        slider.on("click", "img", function(event) {
            var slide = $(event.target); // img element
            var state = function() {
                var rvalue;
                for (i in slideClasses) {
                    rvalue = (slide[0].className == slideClasses[i] ? i : null);
                    if (rvalue != null) break;
                }
                return parseInt(rvalue) + 1;
            };
            //states
            switch (state()) {
                case 1:
                    console.log("State 1");
                    // move all elements right twice
                    rotate_class_left()
                    rotate_class_left()
                    break;
                case 2:
                    console.log("State 2");
                    // move all elements right once
                    rotate_class_left()
                    break;
                case 3:
                    console.log("State 3");
                    // nothing to do
                    break;
                case 4:
                    console.log("State 4");
                    // move all elements left once
                    rotate_class_right()
                    break;
                case 5:
                    console.log("State 5");
                    // move all elements left twice
                    rotate_class_right()
                    rotate_class_right()
                    break;
                default:
                    console.log("Invalid State");
                    break;
            }
        });
    }
});

function rotate_class_left() {
    var slider = $(".slider");
    var slides = slider.children();
    var classes = [];
    var len = slides.length;
    for (var i = 0; i < len; i++) {
        classes.push(slides[i].className);
    }
    for (var i = 0; i < len; i++) {
        $(slides[i]).removeClass(slides[i].className);
        if (len - i > 1) {
            $(slides[i]).addClass(classes[parseInt(i) + 1]);
        } else {
            $(slides[i]).addClass(classes[0]);
            break;
        }
    }
}

function rotate_class_right() {
    var slider = $(".slider");
    var slides = slider.children();
    var classes = [];
    var len = slides.length;
    for (var i = 0; i < len; i++) {
        classes.push(slides[i].className);
    }
    for (var i = len-1; i >= 0; i--) {
        $(slides[i]).removeClass(slides[i].className);
        if (i > 0) {
            $(slides[i]).addClass(classes[parseInt(i) - 1]);
        } else {
            $(slides[i]).addClass(classes[len - 1]);
            break;
        }
    }
}


init();
