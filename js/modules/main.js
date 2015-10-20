$('document').ready(function() {
    $('.navbar-nav li a').on('click', function() {
        $('.navbar-nav li.active').removeClass('active');
        $(this).parents('li').addClass('active');

        var section = $(this).attr('data-section');
        $('.body > div').removeClass('active');
        $('.'+section).addClass('active');
    });

    $('.jumbotron a').on('click', function() {
        $('.navbar-nav li.active').removeClass('active');
        $('.navbar-nav li a[data-section="about-me"]').parents('li').addClass('active');

        $('.body > div').removeClass('active');
        $('.about-me').addClass('active');
    });
});
