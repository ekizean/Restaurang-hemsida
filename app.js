/* Scrolla smooth när klickar på en anchor link */

$(document).on('click', 'a.smooth-scroll',function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

