(function ($) {
    'use strict';
    
    $(".header-part").sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar'
    });



    $('a.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    var slider_pulse = $('.slider-active');
    slider_pulse.owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        dots: true,
        loop: true,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
    });

    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-content h5').removeClass('animated fadeInDown').css('opacity', '0');
        $('.slider-content h2').removeClass('animated zoomInLeft').css('opacity', '0');
        $('.slider-content p').removeClass('animated fadeInRight').css('opacity', '0');
        $('.slider-content a').removeClass('animated fadeInUp').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-content h5').addClass('animated fadeInDown').css('opacity', '1');
        $('.slider-content h2').addClass('animated zoomInLeft').css('opacity', '1');
        $('.slider-content p').addClass('animated fadeInRight').css('opacity', '1');
        $('.slider-content a').addClass('animated fadeInUp').css('opacity', '1');
    });

    $("#sub-manu-click #sub-manu-click-link").click(function () {
        $("#sub-manu-click .sub-manu").toggle("");
        return false;
    });

    $.wmBox();


    $(".protfolio-isotop-on").isotope();
    $(".protfolio-list-part ul li").on("click", function () {
        var selector = $(this).attr("data-filter");
        $(".protfolio-isotop-on").isotope({
            filter: selector
        });
    });


    $(".header-area .nav-item #search-item-input svg").click(function () {
        $("#search-item-input input").toggle("");
        return false;
    });

    $('.magnifi-popop').magnificPopup({
        type: 'video',

    });


    $(".protfolio-client-carosul-active").owlCarousel({
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
    });

    $('#protfolio-circle-progressbar-1').circleProgress({
        startAngle: -Math.PI / 6 * 3,
        value: 0.75,
        size: 150,
        lineCap: "round",
        fill: {
            gradient: ["#038E94"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.protfolio-circle-progressbar-content').html(Math.round(75 * progress) + '<i>%</i>');
    });
    $('#protfolio-circle-progressbar-2').circleProgress({
        startAngle: -Math.PI / 6 * 3,
        value: 0.85,
        size: 150,
        lineCap: "round",
        fill: {
            gradient: ["#038E94"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.protfolio-circle-progressbar-content').html(Math.round(80 * progress) + '<i>%</i>');
    });
    $('#protfolio-circle-progressbar-3').circleProgress({
        startAngle: -Math.PI / 6 * 3,
        value: 1,
        size: 150,
        lineCap: "round",
        fill: {
            gradient: ["#038E94"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.protfolio-circle-progressbar-content').html(Math.round(100 * progress) + '<i>%</i>');
    });

    $('#protfolio-progressbar-1').barfiller({
        barColor: "#038E94",
    });
    $('#protfolio-progressbar-2').barfiller({
        barColor: "#038E94",
    });
    $('#protfolio-progressbar-3').barfiller({
        barColor: "#038E94",
    });
    $('#protfolio-progressbar-4').barfiller({
        barColor: "#038E94",
    });

    $(".pricing-logo-carosul-active").owlCarousel({
        items: 6,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
    });

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {},
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

    $('.counter').counterUp({
                delay: 10,
                time: 1000
    });

    $(window).scroll(function () {
        var sticky = $('.header-area'),
            scroll = $(window).scrollTop();

        if (scroll >= 20) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });

}(jQuery));
