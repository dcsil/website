function didScroll() {
    if ($('.navigation').offset().top > 100) {
        $('.navigation').addClass('nav-bg');
    } else {
        $('.navigation').removeClass('nav-bg');
    }
}

(function ($) {
    'use strict';

    // Sticky Menu
    didScroll();
    $(window).scroll(function () {
        didScroll();
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')',
        });
    });

    function slickArrow(dir) {
        const dirArrow = dir === 'prev' ? '<i class="ti-angle-left">' : '<i class="ti-angle-right">'
        const alt = dir === 'prev' ? 'Previous testimonial' : 'Next testimonial'
        return `<button type='button' aria-label='${alt}' title='${alt}' class='border-0 bg-none slick-arrow text-white'>${dirArrow}</button>`
    }

    // testimonial-slider
    $('.testimonial-slider').slick({
        lazyLoad: 'onDemand',
        pauseOnHover: true,
        infinite: true,
        autoplay: true,
        speed: 400,
        dots: false,
        arrows: true,
        appendArrows: '.testimonial-slider-arrows',
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: slickArrow('prev'),
        nextArrow: slickArrow('next'),
    });


    // clients logo slider
    $('.startup-slider').slick({
        lazyLoad: 'onDemand',
        infinite: true,
        pauseOnHover: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var shuffleWrapper = document.querySelector('.shuffle-wrapper')
    if (shuffleWrapper) {
        var myShuffle = new Shuffle(shuffleWrapper, {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }

    // Add target="_blank" to all external links that don't already have it
    jQuery('a[href^="http://"], a[href^="https://"]').each(function() {
        var $link = jQuery(this);
        var href = $link.attr('href');
        var linkHostname = new URL(href).hostname;
        var currentHostname = window.location.hostname;
        
        // Only add target="_blank" to external links (different domain) that don't already have a target attribute
        if (!$link.attr('target') && linkHostname !== currentHostname) {
            $link.attr('target', '_blank');
            if (!$link.attr('rel')) {
                $link.attr('rel', 'noopener noreferrer');
            } else if (!$link.attr('rel').includes('noopener')) {
                $link.attr('rel', $link.attr('rel') + ' noopener noreferrer');
            }
        }
    });


})(jQuery);