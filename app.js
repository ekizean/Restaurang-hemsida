$( document ).ready(function() {

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
    
 
    
    if(window.matchMedia("(max-width: 700px)").matches){
        var invisible = false;
        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 650 && invisible == false)  {
            $('#bokabordmobil').show("slide", {
                direction: "up",
                mode: 'show'
            });
              invisible = true
          }
            else if (y <= 650 && invisible == true) {
                invisible = false;
                $('#bokabordmobil').hide("slide", {
                    direction: "up",
                    mode: 'hide'
                });
            }
        });
    }
});