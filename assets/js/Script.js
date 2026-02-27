$(document).ready(function () {

    // Header
    $('.menu-toggle').click(function () {
        $('.header-middle, .mobile-overlay').toggleClass('active');
    });

    $('.mobile-overlay').click(function () {
        $('.header-middle, .mobile-overlay').removeClass('active');
    });

    $('.header-middle li > a').click(function (e) {
        if ($(window).width() <= 991) {
            var parentLi = $(this).parent('li');
            if (parentLi.children('ul').length > 0) {
                e.preventDefault();
                parentLi.toggleClass('active');
                parentLi.siblings().removeClass('active');
                parentLi.siblings().find('li').removeClass('active');
            }
        }

    });
    $('.mobile-close').click(function () {
        $('.header-middle, .mobile-overlay').removeClass('active');
    });

    // Banner
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        cssEase: 'ease-in-out',
        pauseOnHover: false
    });

    // Category
    $('.category-inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // New product
    $('.new-product-contain').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Brand
    if ($('.brand-contain').length) {

        $('.brand-contain').slick({

            slidesToShow: 5,
            slidesToScroll: 1,

            autoplay: true,
            autoplaySpeed: 2000,

            speed: 800,
            cssEase: 'ease',

            infinite: true,

            arrows: false,
            dots: false,

            pauseOnHover: false,

            responsive: [

                {
                    breakpoint: 1600,
                    settings: { slidesToShow: 5 }
                },

                {
                    breakpoint: 1400,
                    settings: { slidesToShow: 5 }
                },

                {
                    breakpoint: 1199,
                    settings: { slidesToShow: 4 }
                },

                {
                    breakpoint: 991,
                    settings: { slidesToShow: 3 }
                },

                {
                    breakpoint: 767,
                    settings: { slidesToShow: 2 }
                },

                {
                    breakpoint: 575,
                    settings: { slidesToShow: 2 }
                }

            ]

        });

    }

    // Footer
    $('.toggle-title').on('click', function () {
        $(this).closest('.footer-item').toggleClass('active');
    });

});
