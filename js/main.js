/*function scrollNav() {
    $('ul.nav li.nav-item a').click(function () {
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 600);
        return false;

    });
}
scrollNav();*/


/*
function myClass() {
    $('ul.nav li.nav-item').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').removeClass('active');
        return false;

    });
}
myClass();*/

$('#myModal').modal();
$('a.nav-link ').click(function () {
    //Toggle Class
    $(".collapse").removeClass("show");
});
$("ul.nav li a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 600, function () {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});
