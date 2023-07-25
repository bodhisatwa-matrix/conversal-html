/* MM Menu Open */
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#main_menu", {
            "offCanvas": {
                "position": "left-front",
                // "page":{
                //     "selector": ".hero-inner-wrap",
                //     "insertMethod": "prepend",
                // },
            },
            "theme": "white",
            "slidingSubmenus": false,
            "scrollBugFix": {
                "fix": "true",
            },
            "navbar": false,
            "navbars": [
                {
                    position: 'top',
                    content: ['<a href="index.html" class="menu-logo"><img src="assets/images/logo.svg" alt="" /></a>', 'close']
                }, {
                    position: 'bottom',
                    content: ['<div class="bae-btn-wrapper"><a href="#" class="btn"><span>Gratis adviesgesprek</span></a></div><ul class="social-media"><li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li></ul>']
                }
            ]
        });
    }
);
/* MM Menu Close */
/**menu dropdown**/
jQuery(document).ready(function () {
    jQuery('.accordion-list > li > .answer').hide();

    jQuery('.accordion-list > li').click(function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").find(".answer").slideUp();
        } else {
            jQuery(".accordion-list > li.active .answer").slideUp();
            jQuery(".accordion-list > li.active").removeClass("active");
            jQuery(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});
/**menu dropdown**/


// really home tab start //

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});


// really home tab end //

// really mobile slide start //

jQuery(document).ready(function () {
    var sync1 = jQuery("#sync1");
    var sync2 = jQuery("#sync2");
    //var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1
        .owlCarousel({
            items: 1,
            slideSpeed: 9000,
            nav: false,
            autoplayHoverPause: true,
            autoplaySpeed: 200,
            dots: true,
            autoplay: false,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    item: 1,
                    // autoplay: true
                },
                600: {
                    items: 1,
                    // autoplay: true
                }
            }


        })
        .on("changed.owl.carousel", syncPosition);

    sync2
        .on("initialized.owl.carousel", function () {
            sync2
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({

            dots: false,
            nav: false,
            autoplay: false,
            loop:false,
            slideSpeed: 9000,
            autoplayHoverPause: true,
            autoplaySpeed: 200,
            touchDrag : true,
            mouseDrag : true,
            stagePadding: 45,

            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,

                },
                768: {
                    items: 4,


                }

            }


        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2
            .find(".owl-item.active")
            .first()
            .index();
        var end = sync2
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data("owl.carousel").to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = jQuery(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
    });
});



// really mobile slide end //



// customer say start //

$('#review').owlCarousel({
    autoplay: true,
    autoplayTimeout: 9000,
    nav: true,
    dots: false,
    margin: 0,
    //animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        }
    }
});


// customer say end //


//home Project
jQuery("#projectarea").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        }
    },
});
//home Project

//home blog
jQuery("#homeblogs").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        }
    },
});
//home Project