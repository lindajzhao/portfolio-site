function adjustImage() {
    if ($(window).width() <= 700) {
        $('#headshot').attr('src', './assets/headshot-small.png');
    } else {
        $('#headshot').attr('src', './assets/headshot.jpg');
    }
}