$(function () {

    new WOW().init();

});

/*var h = $(window).height();
console.log(h);*/

window.onload = function () {
    var objUl = document.querySelectorAll('.cont2 .list');
    for (var i = 0; i < objUl.length; i++) {
        var objLi = objUl[i].querySelectorAll('li');
        if ($(window).height() <= 700) {
            var lastItem = objLi[objLi.length - 1];
            lastItem.style.display = 'none';
        }

    }
};


$(document).ready(function () {
    $('.navigation').click(function () {
        $('.navigation').toggleClass('active');
        $('.burger-menu').toggleClass('visible-menu');
    });
    $('.menu-link').click(function () {
        $('.navigation').removeClass('active');
        $('.burger-menu').removeClass('visible-menu');
    })
});


// START PALRALLAX ==================================================================


$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    // Change menu Item Color *******************************************************************


    function colorMenu() {
        var res;
        if ($(window).width() < 576) {
            res = $(".slider-content-wrapper").height() + $(".short-services-mobile").height();
        } else {
            res = $('.slider-content-wrapper').height();
        }
        return res;
    };


    new ScrollMagic.Scene({
            triggerElement: '.slider-content-wrapper',
            duration: colorMenu(),
            triggerHook: 0.05
        })
        .setClassToggle('.navigation', 'changeColor')
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: $('.short-services').height(),
            duration: $('.short-services').height()*2,
            triggerHook: 0.05
        })
        .setClassToggle('.navigation', 'changeColor')
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#review',
            duration: $('#review').innerHeight(),
            triggerHook: 0.05
        })
        .setClassToggle('.navigation', 'changeColor')
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.license-section',
            duration: $('.license-section').height(),
            triggerHook: 0.05
        })
        .setClassToggle('.navigation', 'changeColor')
        //.addIndicators()
        .addTo(controller);


    //Bacground Scene ***************************************************

    new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 100,
            triggerHook: 0
        })
        .setClassToggle('.bg-initial', 'disNone')
        //.addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 580,
            triggerHook: 0
        })
        .setClassToggle('.bg1', 'fade-out')
        //.addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 350,
            triggerHook: 0
        })
        .setClassToggle('.header-content', 'fade-out')
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 350,
            triggerHook: 0
        })
        .setClassToggle('.header-contacts', 'fade-out')
        //.addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 380,
            duration: '120%',
            triggerHook: 0
        })
        .setClassToggle('.bg2', 'fade-in')
        //.addIndicators()
        .addTo(controller);




    //about line effect***************************************


    new ScrollMagic.Scene({
            triggerElement: '.about-company-content',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-left', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //    .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#about',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-right', 1, {
            x: '20%',
            ease: Linear.easeNone
        }))
        //    .addIndicators()
        .addTo(controller);


    //Slider Pin Effect************************************************************

    /*   function windowHeight() {
           var res;
           if ($(window).height() < 700) {
               res = $(".slider-section").height() * 6.5;
           } else {
               res = $(".slider-section").height() * 5;
           }
           return res;
       };*/


    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: 0,
            duration: $(".slider-section").height() * 6
        })
        .setPin('.slider-section')
        //.addIndicators()
        .addTo(controller);




    //slider right bg img************************************************************

    /* var tlM = new ScrollMagic.Controller();

    var tl = new TimelineMax({paused: true});
        tl.from('.s-bg2', 1, { y: '100%', ease: Linear.easeNone });


    var sliderRight2311 = new ScrollScene({
    	triggerElement: ".slider-section",
    	triggerHook: "onLeave",
        offset: $(window).height()
    })

    	.addIndicators()
        .setTween(tl)
        .addTo(tlM);
    */

    var slider = new ScrollMagic.Controller();

    /*  var sliderRight1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height(),
            duration: "100%"
        })
        .setTween(TweenMax.from('.s-bg2', 1, { y: '100%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(slider);
*/

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 1.5
        })
        //.setClassToggle('.s-bg2', 'display')
        .setTween(TweenMax.from('.s-bg2', 0.5, {
            y: '100%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(slider);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 3
        })
        //.setClassToggle('.s-bg3', 'display')
        .setTween(TweenMax.from('.s-bg3', 0.5, {
            y: '100%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(slider);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 4.5
        })
        //.setClassToggle('.s-bg4', 'display')
        .setTween(TweenMax.from('.s-bg4', 0.5, {
            y: '100%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(slider);



    //slider top bg img************************************************************


    var sliderTop = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 1.5
        })
        //.setClassToggle('.st-bg2', 'display')
        .setTween(TweenMax.from('.st-bg2', 0.5, {
            x: '100%',
            ease: Linear.easeNone
        }))
        // .addIndicators()
        .addTo(slider);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 3
        })
        //.setClassToggle('.st-bg3', 'display')
        .setTween(TweenMax.from('.st-bg3', 0.5, {
            x: '100%',
            ease: Linear.easeNone
        }))
        //      .addIndicators()
        .addTo(slider);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: $(window).height() * 4.5
        })
        //.setClassToggle('.st-bg4', 'display')
        .setTween(TweenMax.from('.st-bg4', 0.5, {
            x: '100%',
            ease: Linear.easeNone
        }))
        //    .addIndicators()
        .addTo(slider);




    //slider content opacity ************************************************************
    var contentOpacity = new ScrollMagic.Controller();

    function sliderCon() {

        var res;
        if ($(window).width() <= 576) {


            /* var SliderContentScene1 = new ScrollMagic.Scene({
                      triggerElement: '.slider-section',
                      offset: $(window).height() * 1.25,
                      triggerHook: "onLeave"
                  })
              	.setClassToggle('.cont1', 'fade-out')
                  //.addIndicators()
                  .addTo(contentOpacity);*/

            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 1.5,
                    triggerHook: "onLeave"
                })
                .setTween(TweenMax.from('.cont2', 0.1, {
                    y: '50%',
                    ease: Linear.easeNone
                }))
                .setClassToggle('.cont2', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);

            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 3,
                    triggerHook: "onLeave"
                })
                .setTween(TweenMax.from('.cont3', 0.1, {
                    y: '100%',
                    ease: Linear.easeNone
                }))
                .setClassToggle('.cont3', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);

            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 4.5,
                    triggerHook: "onLeave"
                })
                .setTween(TweenMax.from('.cont4', 0.1, {
                    y: '100%',
                    ease: Linear.easeNone
                }))
                .setClassToggle('.cont4', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);


        } else if ($(window).width() > 576)

        {


            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 1.5,
                    triggerHook: "onLeave"
                })
                .setClassToggle('.cont1', 'fade-out')
                //.addIndicators()
                .addTo(contentOpacity);

            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 1.5,
                    triggerHook: "onLeave"
                })
                .setClassToggle('.cont2', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);


            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 3,
                    triggerHook: "onLeave"
                })
                .setClassToggle('.cont3', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);

            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: $(window).height() * 4.5,
                    triggerHook: "onLeave"
                })
                .setClassToggle('.cont4', 'fade-in')
                //.addIndicators()
                .addTo(contentOpacity);


        }

        return res;
    };

    sliderCon();

    // Slider NAme Opacity ************************************************************

    var nameOpacity = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 1.5,
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-build', 'fade-out')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 1.5,
            duration: '150%',
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-project', 'fade-in')
        //.addIndicators()
        .addTo(nameOpacity);


    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 3,
            duration: '150%',
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-injer', 'fade-in')
        // .addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 4.5,
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-service', 'fade-in')
        //.addIndicators()
        .addTo(contentOpacity);



    // Slider Name line animated ************************************************************

    var sliderLine = new ScrollMagic.Controller();

    var sliderLineScene1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            duration: "140%",
            triggerHook: 0
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        .setClassToggle('.lw1', 'active')
        //.addIndicators()
        .addTo(sliderLine);

    var sliderLineScene2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 1.5,
            duration: "140%",
            triggerHook: 0
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        .setClassToggle('.lw2', 'active')
        //.addIndicators()
        .addTo(sliderLine);

    var sliderLineScene3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 3,
            duration: "140%",
            triggerHook: 0
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        .setClassToggle('.lw3', 'active')
        //.addIndicators()
        .addTo(sliderLine);

    var sliderLineScene4 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 4.5,
            triggerHook: 0
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        .setClassToggle('.lw4', 'active')
        //.addIndicators()
        .addTo(sliderLine);


    // Slider anchor Link Animate ***********************************************************************


    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            duration: "150%",
            triggerHook: "onLeave"
        })
        //.addIndicators()
        .addTo(sliderLine);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 1.5 + 0.5,
            duration: "150%",
            triggerHook: "onLeave"
        })
        //.addIndicators()
        .addTo(sliderLine);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 3,
            duration: "150%",
            triggerHook: "onLeave"
        })
        //.addIndicators()
        .addTo(sliderLine);

    new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: $(window).height() * 4.5 + 0.5,
            triggerHook: "onLeave"
        })
        //.addIndicators()
        .addTo(sliderLine);







    // Slider anchor Link ScrollerTO ************************************************************

    $(".build").click(function (e) {
        e.preventDefault();
        sliderLine.scrollTo(function (sliderLineScene1) {
            $("html, body").animate({
                scrollTop: sliderLineScene1
            });

        });
        sliderLine.scrollTo(sliderLineScene1);

    });

    $(".project").click(function (e) {
        e.preventDefault();
        sliderLine.scrollTo(function (sliderLineScene2) {
            $("html, body").animate({
                scrollTop: sliderLineScene2
            });
        });
        sliderLine.scrollTo(sliderLineScene2);

    });

    $(".injen").click(function (e) {
        e.preventDefault();
        sliderLine.scrollTo(function (sliderLineScene3) {
            $("html, body").animate({
                scrollTop: sliderLineScene3
            });
        });
        sliderLine.scrollTo(sliderLineScene3);

    });

    $(".service").click(function (e) {
        e.preventDefault();
        sliderLine.scrollTo(function (sliderLineScene4) {
            $("html, body").animate({
                scrollTop: sliderLineScene4
            });
        });
        sliderLine.scrollTo(sliderLineScene4);
    });



    // Short Services Scene ***************************************

    new ScrollMagic.Scene({
            triggerElement: '.short-services-left',
            offset: -$(window).height(),
            duration: $(window).height()*2,
            triggerHook: 0
        })
        .setClassToggle('.bg3', 'display')
        .setPin('.bg3')
        //.addIndicators()
        .addTo(controller);
/*
    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: -$(window).height(),
            duration: '100%',
            triggerHook: 0
        })
        .setTween(TweenMax.from('.short-services', 0.1, {
            y: '100%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: $(window).height() * 2,
            duration: '100%',
            triggerHook: 0
        })
        .setTween(TweenMax.to('.short-services', 0.1, {
            y: '-110%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            duration: '200%',
            triggerHook: 0
        })
        .setPin('.short-services')
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: $(window).height() / 2,
            duration: '100%',
            triggerHook: 0
        })
        .setTween(TweenMax.to('.short-services', 1, {
            x: '100%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    // Short Services left content fade out ***************************************

    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: $(window).height(),

            triggerHook: 0
        })
        .setClassToggle('.left', 'fade-out')
        //.addIndicators()
        .addTo(controller);

    // Short Services right contnt fade in ***************************************

    new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: $(window).height(),
            triggerHook: 0
        })
        .setClassToggle('.right', 'fade-in')
        //.addIndicators()
        .addTo(controller);

*/

    // achievements bg parallax **************************************************.

    new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            duration: '100%',
            triggerHook: 0.5
        })
        .setTween('.achievements-bg', {
            y: "-20%",
            ease: Linear.easeNone
        })
        //	.addIndicators()
        .addTo(controller);




    // achievements line animate **************************************************.

    new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            triggerHook: 1,
            duration: "80%"
        })
        .setTween(TweenMax.from('.achievements-green-line', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.achievements-green-line-b1', 0.5, {
            transform: "scaleX(0)"
        }))
        // .addIndicators()
        .addTo(controller);



    //Parallax gallery ********************************************************************

    /*    var galleryParallaxImg1 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi1', 1, { y: '-20%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);

        var galleryParallaxImg2 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi2', 1, { y: '-10%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);

        var galleryParallaxImg3 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi3', 1, { y: '10%', ease: Linear.easeNone }))
            //  .addIndicators()
            .addTo(controller);

        var galleryParallaxImg4 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi4', 1, { y: '15%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);

        var galleryParallaxImg5 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi5', 1, { y: '-25%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);


        var galleryParallaxImg6 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi6', 1, { y: '-15%', ease: Linear.easeNone }))
            //  .addIndicators()
            .addTo(controller);

        var galleryParallaxImg7 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi7', 1, { y: '-35%', ease: Linear.easeNone }))
            //.addIndicators()
            .addTo(controller);


        var galleryParallaxImg8 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi8', 1, { y: '30%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);


        var galleryParallaxImg9 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi9', 1, { y: '-45%', ease: Linear.easeNone }))
            // .addIndicators()
            .addTo(controller);

        var galleryParallaxImg10 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi10', 1, { y: '-40%', ease: Linear.easeNone }))
            //.addIndicators()
            .addTo(controller);

        var galleryParallaxImg11 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi11', 1, { y: '30%', ease: Linear.easeNone }))
            //.addIndicators()
            .addTo(controller);

        var galleryParallaxImg13 = new ScrollMagic.Scene({
                triggerElement: '.achievements-content',
                triggerHook: 0.5,
                duration: "300%"
            })
            .setTween(TweenMax.from('.gi13', 1, { y: '35%', ease: Linear.easeNone }))
            //.addIndicators()
            .addTo(controller);
    */

    // Bigproject effect *********************************

    new ScrollMagic.Scene({
            triggerElement: '.big-projects',
            triggerHook: 1,
            duration: "90%"
        })
        .setTween(TweenMax.from('.green-line-big-projects', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    // LicenseLine Effect *************************************

    new ScrollMagic.Scene({
            triggerElement: '.license-section',
            triggerHook: 1,
            duration: "90%"
        })
        .setTween(TweenMax.from('.green-line-license', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    // GNB Effect *************************************

    new ScrollMagic.Scene({
            triggerElement: '.gnb',
            triggerHook: 1,
            duration: "90%"
        })
        .setTween(TweenMax.from('.green-line-gnb', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);

    // Customers background Parallax effect *********************************************


    new ScrollMagic.Scene({
            triggerElement: '.customers-section',
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(TweenMax.from('.customers-bg', 1, {
            y: '-35%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);



    // Customers line animate effect  **********************************************

    new ScrollMagic.Scene({
            triggerElement: '.customers-section',
            triggerHook: 1,
            duration: "90%"
        })
        .setTween(TweenMax.from('.green-line-customers', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);



    // Reviews line animate effect **********************************************

    new ScrollMagic.Scene({
            triggerElement: '.reviews-section',
            triggerHook: 1,
            offset: -300,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-reviews', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);


    // Contacts line animate effect **********************************************

    new ScrollMagic.Scene({
            triggerElement: '.contacts',
            triggerHook: 1,
            offset: -300,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-contacts', 1, {
            x: '-50%',
            ease: Linear.easeNone
        }))
        //.addIndicators()
        .addTo(controller);


    // show my place on page  ***************************************************

    new ScrollMagic.Scene({
            triggerElement: '#home',
            duration: $('#home').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#none-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#about',
            duration: $('#about').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#about-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#services',
            duration: $('#services').height() +  sliderLineScene1.duration() + sliderLineScene2.duration() + sliderLineScene3.duration() + sliderLineScene4.duration(),
            triggerHook: 0.2
        })
        .setClassToggle('#services-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

        new ScrollMagic.Scene({
            triggerElement: '.short-services-left',
            duration: $('.short-services').height()*2,
            triggerHook: 0.2
        })
        .setClassToggle('#services-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#works',
            duration: $('#works').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#works-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#works-gallery',
            duration: $('#works-gallery').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#works-name-gal', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#big-project',
            duration: $('#big-project').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#big-project-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.big-project-gallery',
            duration: $('.big-project-gallery').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#big-project-gal', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#gnb',
            duration: $('#gnb').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#gnb-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.gnb-gallery',
            duration: $('.gnb-gallery').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#gnb-gal', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);


    new ScrollMagic.Scene({
            triggerElement: '#license',
            duration: $('#license').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#license-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.customers-section',
            duration: $('.customers-section ').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#customers-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#review',
            duration: $('#review').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#review-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#contacts',
            duration: $('#contacts').height(),
            triggerHook: 0.2
        })
        .setClassToggle('#contacts-name', 'display-point')
        //.addIndicators()
        .addTo(nameOpacity);



    // LOGO COLOR CHANGE ***********************************************************************

    new ScrollMagic.Scene({
            triggerElement: '.company-name',
            duration: $('#home').height() * 3,
            triggerHook: 0.05
        })
        .setTween(TweenMax.to($('.classic-logo'), .5, {
            css: {
                opacity: 0
            },
            ease: Quad.easeInOut
        }))
        //.setTween(TweenMax.to( $('.white-logo'), .5,{css:{opacity:1}, ease:Quad.easeInOut}))
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.company-name',
            duration: $('#home').height() * 3,
            triggerHook: 0.05
        })
        //.setTween(TweenMax.to( $('.classic-logo'), .5,{css:{opacity:0}, ease:Quad.easeInOut}))
        .setTween(TweenMax.to($('.white-logo'), .5, {
            css: {
                opacity: 1
            },
            ease: Quad.easeInOut
        }))
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '.company-name',
            duration: $('#home').height() * 3,
            triggerHook: 0.05
        })
        //.setTween(TweenMax.to( $('.classic-logo'), .5,{css:{opacity:0}, ease:Quad.easeInOut}))
        .setTween(TweenMax.to($('.black-logo'), .5, {
            css: {
                opacity: 1
            },
            ease: Quad.easeInOut
        }))
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#license',
            duration: $('#license').height(),
            triggerHook: 0.05
        })
        .setClassToggle('.white-logo', 'logo-hide')
        //.addIndicators()
        .addTo(nameOpacity);

    new ScrollMagic.Scene({
            triggerElement: '#review',
            duration: $('#review').height() * 1.5,
            triggerHook: 0.05
        })
        .setClassToggle('.white-logo', 'logo-hide')
        //.addIndicators()
        .addTo(nameOpacity);




// Inicialiaze scroll effect on window size ***************************************************************

    $(document).ready(function () {

        if ($(window).width() > 768) {


            // Scroll from bock to block if scroll DOWN ****************************************************************************

            new ScrollMagic.Scene({
                    triggerElement: '.company-name',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('#about').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#about',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('#home').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    }
                })
                .addTo(nameOpacity);







            new ScrollMagic.Scene({
                    triggerElement: '#about',
                    offset: 200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('#services').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#services',
                    offset: 200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene2.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: sliderLineScene2.offset()+200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene3.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: sliderLineScene3.offset()+200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene4.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.slider-section',
                    offset: sliderLineScene4.offset()+200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('.short-services-left').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);


            new ScrollMagic.Scene({
                    triggerElement: '.short-services-left',
                    offset: 200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('.short-services-right').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.short-services-right',
                    offset: 200,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#works').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#works',
                    offset: $('#works').height() * 3.7,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#big-project').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#big-project',
                    offset: $('#big-project').height()*2.8,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#gnb').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#gnb',
                    offset: $('#gnb').height()*2,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#license').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#license',
                    offset: 400,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('.customers-section').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.customers-section',
                    offset: 300,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#review').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#review',
                    offset: 350,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#contacts').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    } else {

                    }
                })
                .addTo(nameOpacity);




            // Scroll from bock to block if scroll UP ****************************************************************************

            new ScrollMagic.Scene({
                    triggerElement: '#about',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('#home').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#services',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('#about').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#services',
                    offset: sliderLineScene1.scrollOffset()-500,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene1.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#services',
                    offset: sliderLineScene2.scrollOffset()-500,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene2.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#services',
                    offset: sliderLineScene3.scrollOffset()-500,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 0.5, {
                            scrollTo: {
                                y: sliderLineScene3.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.short-services-left',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: sliderLineScene4.scrollOffset(),
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.short-services-right',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {
                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('.short-services-left').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#works',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1, {
                            scrollTo: {
                                y: $('.short-services-right').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#big-project',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#works').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#gnb',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#big-project').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#license',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                //.addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#gnb').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })

                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '.customers-section',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {
                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('#license').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);



            new ScrollMagic.Scene({
                    triggerElement: '#review',
                    offset: 0,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('leave', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    } else {

                        TweenMax.to($(window), 1.5, {
                            scrollTo: {
                                y: $('.customers-section').offset().top,
                                autoKill: true
                            },
                            ease: Power3.easeOut
                        })
                    }
                })
                .addTo(nameOpacity);


            /*
            new ScrollMagic.Scene({
                    triggerElement: '#review',
                    offset: 350,
                    duration: 0,
                    triggerHook: 0.1
                })
                // .addIndicators()
                .on('enter', function (e) {

                    if (e.scrollDirection === "FORWARD") {

                    TweenMax.to($(window), 1.5, {
                        scrollTo: {
                            y: $('#contacts').offset().top,
                            autoKill: true
                        },
                        ease: Power3.easeOut
                    })

                } else {

                } 
                })
                .addTo(nameOpacity);


            */
        }
    });






});







// modal window *******************************************

$(document).ready(function () {
    var $closeImg = $('#modal-close'),
        $imgSrc = $('#modal-img > img').attr('src');
    $('.in-modal').on('click', function () {

        $('#modal-wrapper').css('display', 'flex');
        $imgSrc = $(this).attr('src');
        $('#modal-img > img').attr('src', $imgSrc);

    });

    $closeImg.on('click', function () {
        $('#modal-wrapper').css('display', 'none');
        $('#cont1-text').remove();
        $('#cont2-text').remove();

    });

    $('#cont1-modal-show').on('click', function(event){
        event.preventDefault();

        $('#modal-img').append(
            '<div id="cont1-text" style="position:relative;z-index:9999; width:80%; height: 80%; margin: 0 auto; padding: 20px; background-color: #4e887c;"> \
            <h3>Строительно-монтажные и пуско-наладочные работы объектов:</h3> \
            <ul><li>Газовой и нефтяной отрасли, нефтяных и газовых месторождений, трубопроводной системы, транспорта и хранения, распределительной сети и компрессорных станций.</li>  \
            <li>Инженерных коммуникаций.</li>  \
            <li>Комплекса систем связи и телекоммуникационных</li>  \
              <ul><li>волоконно-оптических линий связи,</li>  \
                <li>радиорелейных линий связи,</li>  \
                <li>базовых станций сотовой, транкинговой, радиокабельной связи, станций безпроводной передачи данных,</li>  \
                <li>сетей широкополосного доступа,</li>  \
                <li>локально-вычислительных сетей,</li>  \
                <li>технологических систем связи, диспетчерской связи, селекторной, оперативной связи</li> </ul> \
            <li>Строительство объектов электроэнергетики.</li>  \
            <li>Военной инфраструктуры.</li>  \
            <li>Общегражданских.</li>  \
            <li>Горизонтально-направленное бурение.</li>  \
            </ul> \
            </div>'
        );
        $('#modal-wrapper').css('display', 'flex');
    });

    $('#cont2-modal-show').on('click', function(event){
        event.preventDefault();

        $('#modal-img').append(
            '<div id="cont2-text" style="position:relative;z-index:9999; width:80%; height: 80%; margin: 0 auto; padding: 20px; background-color: #4e887c;"> \
            <h3>Виды проектов:</h3> \
            <ul><li>Работы по подготовке схемы планировочной организации земельного участка.</li>  \
            <li>Работы по разработке архитектурных решений.</li>  \
            <li>Работы по разработке конструктивных и объемно-планировочных решений.</li>  \
            <li>Работы по подготовке сведений об инженерном оборудовании, о сетях инженерно-технического обеспечения, перечня инженерно-технических мероприятий, содержания технологических решений.</li>  \
            <li>Системы электроснабжения</li>  \
            <li>Системы водоснабжения.</li>  \
            <li>Системы водоотведения.</li>  \
            <li>Отопление, вентиляция и кондиционирование воздуха, тепловые сети.</li>  \
            <li>Сети связи</li> \
            <li>Система газоснабжения.</li>  \
            <li>Работы по подготовке проекта организации строительства.</li>  \
            <li>Работы по подготовке проекта организации работ по сносу или демонтажу объектов.</li>  \
            <li>Работы по разработке мероприятий по охране окружающей среды.</li>  \
            <li>Работы по разработке мероприятий по обеспечению пожарной безопасности.</li>  \
            <li>Проект декларации промышленной безопасности опасных производственных объектов, разрабатываемый на стадии проектирования.</li>  \
            <li>Проект декларации безопасности гидротехнических сооружений, разрабатываемый на стадии проектирования.</li>  \
            <li>Организация и условия труда работников. Управление производством и предприятием (ОТ).</li>  \
            <li>Специальные технические условия по обеспечению конструктивной безопасности.</li>  \
            <li>Специальные технические условия по обеспечению сейсмической безопасности.</li>  \
            <li>Специальные технические условия по обеспечению пожарной безопасности.</li>  \
            </ul> \
            </div>'
        );
        $('#modal-wrapper').css('display', 'flex');
    });



});


