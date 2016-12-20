// This script will try to add a class .fixed to nav 

// var nav = $("#nav");
// var body = $("body");

// body.on("scroll", function(e) {

//   if (this.scrollTop > 147) {
//     nav.addClass("fixed");
//   } else {
//     nav.removeClass("fixed");
//   }

// });

$(function() {

    // POSITIONING
    var elementPosition = $('#nav').position();

    $(window).scroll(function() {
        if ($(window).scrollTop() > elementPosition.top) {
            // $('#nav').css('position', 'fixed').css('top', '0').css('left', '11.5%');
            $('#nav').addClass("fixed");
            $('#subscribe').addClass("subscribe");
        }
        else {
            $('#nav').removeClass("fixed");
            $('#subscribe').removeClass("subscribe");
            // $('#nav').css('position', 'static');
        }
    });

    // FORM

    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/andy25771@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h2>Thank You For Subscribing.</h2>');
        });
    });

});
