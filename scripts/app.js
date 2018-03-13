

function adjustImage() {
    if ($(window).width() <= 700) {
        console.log('smaller than 700')
        $('#headshot').attr('src', './assets/headshot-small.png');
    } else {
        $('#headshot').attr('src', './assets/headshot.jpg');
    }
}


$(function() {
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        easing: "easeOutQuad"
    });

    new WOW().init();

    // adjustImage();

    $(window).resize(function () {
        adjustImage();
    });
});