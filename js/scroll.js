$(function() {

    // Initialize WOW
    new WOW().init();
    
    
    // POSITIONING
    var elementPosition = $('nav').position();

    $(window).scroll(function() {
        if ($(window).scrollTop() > elementPosition.top) {
            // $('#nav').css('position', 'fixed').css('top', '0').css('left', '11.5%');
            $('nav').addClass("fixed");
            $('article#top').addClass('top');
            $('#subscribe').addClass("subscribe");
        }
        else {
            $('nav').removeClass("fixed");
            $('article#top').removeClass('top');
            $('#subscribe').removeClass("subscribe");
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


    // Attamept to animate articles
    // var test = $('article.biography').position();
    // // console.log(test);
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > test.top) {
    //         $('.biography').addClass('animated fadeInLeft');
    //     }
    // });


});
