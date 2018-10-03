/* Scrolla smooth när klickar på en anchor link */

$(document).on('click', 'a.smooth-scroll',function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/* Fixar så att när man klickar på ett meny-item i mobil-version så stängs menylistan */
$('#top-nav > li > .dropdown-toggle').click(function () {
   window.location = $(this).attr('href');
});