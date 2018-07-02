$(document).ready(function () {
    /*
        $(".catalog-section").click(function() {
            document.location.href = $('.catalog-link').attr('href');
        });
    */
    function navLinkWidth() {
        var links = document.querySelectorAll('.nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].style.width = (links[i].offsetWidth + 6) + 'px';
        }
    }
    navLinkWidth();
});
// Mobile navigation script

$(function () {
    $('.burger').on('click', function showNav() {
        $('.mobile-nav').fadeToggle('fast', 'linear');
        $('.top').toggleClass('activeT');
        $('.bottom').toggleClass('activeB');
        $('.middle').toggleClass('noactive');
    });
    $('.mob-link').on('click', function () {
        $('.mobile-nav').fadeToggle('fast', 'linear');
        $('.top').toggleClass('activeT');
        $('.bottom').toggleClass('activeB');
        $('.middle').toggleClass('noactive');
    });
});

//Modals

$(function () {
    $('.catalog-section').click(function () {
        $('#main-page-modal').modal('show');
    });
});

$(function () {
    $('.btn-question').click(function () {
        $('#question-modal').modal('show');
    });
});

// active link

$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
    $('.nav-link').each(function () {
        var link = $(this).attr('href');
        if (cur_url == link) {
            $(this).addClass('active-link');
        }
    });
});

// Pluso 

$(document).ready(function () {
    (function () {
        if (window.pluso) if (typeof window.pluso.start == "function") return;
        if (window.ifpluso == undefined) {
            window.ifpluso = 1;
            var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
            s.type = 'text/javascript'; s.charset = 'UTF-8'; s.async = true;
            s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
            var h = d[g]('body')[0];
            h.appendChild(s);
        }
    })();
});



//Gallery - modal window show / hide ***********



    if ($('body').is('.gallery-page')) {


        var modalGalleryWrapper = document.querySelector('.gallery-modal-wrapper'),
            galleryModal = document.querySelector('.gallery-modal'),
            images = document.querySelectorAll('.gallery-img'),
            rightArrow = document.querySelector('.modal-arrow-right'),
            leftArrow = document.querySelector('.modal-arrow-left'),
            currentIndex,
            nextImage,
            alt = [],
            href = [];

        for (var i = 0; i < images.length; i++) {

            href[i] = images[i].getAttribute('src');
            alt[i] = images[i].getAttribute('alt');

            images[i].onclick = function () {

                var winW = $(window).width();

                if (winW > 576) {

                    modalGalleryWrapper.classList.toggle('modal-show');
                    galleryModal.classList.toggle('gallery-modal-show');
                    var clickImgAttr = this.getAttribute('src');
                    var clickImgAlt = this.getAttribute('alt');
                    document.querySelector('.modal-img').setAttribute('src', clickImgAttr);
                    document.querySelector('.modal-img-name').innerHTML = clickImgAlt;
                    
                    currentIndex = href.indexOf(clickImgAttr);
                    checkCurrentIndex();
                    modalGalleryWrapper.addEventListener('click', removeModal);
                }
    
            }
        }

        rightArrow.onclick = function () {
            currentIndex++;
            nextImage = href[currentIndex];
            document.querySelector('.modal-img').setAttribute('src', nextImage);
            document.querySelector('.modal-img-name').innerHTML = alt[currentIndex];

            checkCurrentIndex();

        };

        leftArrow.onclick = function () {

            currentIndex--;
            nextImage = href[currentIndex];
            document.querySelector('.modal-img').setAttribute('src', nextImage);
            document.querySelector('.modal-img-name').innerHTML = alt[currentIndex];

            checkCurrentIndex();

        };

        function checkCurrentIndex() {
            if (currentIndex == href.length - 1) {
                rightArrow.style.display = 'none';
                leftArrow.style.display = 'inline-block';
            } else if (currentIndex == 0) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'inline-block';
            } else {
                rightArrow.style.display = 'inline-block';
                leftArrow.style.display = 'inline-block';
            }
        };

        function removeModal(e) {
            if (!e.target.matches('.gallery-modal, .gallery-modal *')) {
                modalGalleryWrapper.classList.toggle('modal-show');
                galleryModal.classList.toggle('gallery-modal-show');
                modalGalleryWrapper.removeEventListener('click', removeModal);
            }
  
        };
  
    };


/*google Maps*/ 


function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.219993, lng: 39.709282 },
        zoom: 17,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,

    });
    
    var myMark = {
        url: "img/svg/icons/map2.svg",
        scaledSize: new google.maps.Size(40, 80)
    };

    var sadovaya = new google.maps.Marker({
        position: { lat: 47.219993, lng: 39.709282 },
        map: map,
        icon: myMark
    });

    var dovatora = new google.maps.Marker({
        position: { lat: 47.243000, lng: 39.643042 },
        map: map,
        icon: myMark
    });

    var komarova = new google.maps.Marker({
        position: { lat: 47.286823, lng: 39.703821 },
        map: map,
        icon: myMark
    });

    var markers = {
        'sadovaya': sadovaya,
        'dovatora': dovatora,
        'komarova': komarova
    };

    function getCoords(position) {
        var text = position.replace(/[()]/g, '').split(", ");
        var lat = Number(text[0]);
        var lng = Number(text[1]);

        return {
            lat: lat,
            lng: lng
        };
    }

    $('.adr').on('click', function () {
        $('.adr').removeClass('active-coords');
        $(this).addClass('active-coords');
        var id = $(this).attr('id');

        var position = String(markers[id].getPosition());
        map.panTo(new google.maps.LatLng(getCoords(position).lat, getCoords(position).lng));
    });

};

$(function () {
    if ($('body').is('.contacts-page')) {

        // Map how to road
        var adrModalWrapper = document.querySelector('.adr-modal-wrapper');
        var adrMapRoad = document.querySelectorAll('.adr-link');

        for (var i = 0; i < adrMapRoad.length; i++) {
            adrMapRoad[i].onclick = function (event) {
                event.preventDefault();
                adrModalWrapper.classList.toggle('modal-show');

                var currentAdr = this.getAttribute('href');
                document.querySelector('.img-sklad').setAttribute('src', currentAdr);
            }
        };
        var closeMarker = document.querySelector('.close');
        closeMarker.onclick = function () {
            adrModalWrapper.classList.toggle('modal-show');
        };
    }
});

// Page select. Active links.

$(document).ready(function () {

    var pageNumbers = $('.page-select-link'),
        currentPageIndex = 0;
    arrowActive();
    pageNumbers.on('click', function () {
        pageNumbers.removeClass('active-page');
        $(this).toggleClass('active-page');
        currentPageIndex = pageNumbers.index(this);
        arrowActive();
    });
    $('.arrow-right').on('click', function () {
        if (currentPageIndex < pageNumbers.length - 1) {
            currentPageIndex++;
            pageNumbers.removeClass('active-page');
            pageNumbers.eq(currentPageIndex).toggleClass('active-page');
        }
        arrowActive();
    });
    $('.arrow-left').on('click', function () {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            pageNumbers.removeClass('active-page');
            pageNumbers.eq(currentPageIndex).toggleClass('active-page');
        }
        arrowActive();
    });

    function arrowActive() {
        if (currentPageIndex == 0) {
            $('.arrow-left .st-arrow').addClass('st-arrow-noactive');
            $('.arrow-right .st-arrow').removeClass('st-arrow-noactive');
        }
        else if (currentPageIndex > 0 && currentPageIndex < pageNumbers.length - 1) {
            $('.arrow-left .st-arrow').removeClass('st-arrow-noactive');
            $('.arrow-right .st-arrow').removeClass('st-arrow-noactive');
        }
        else if (currentPageIndex > 0 && currentPageIndex == pageNumbers.length - 1) {
            $('.arrow-right .st-arrow').addClass('st-arrow-noactive');
            $('.arrow-left .st-arrow').removeClass('st-arrow-noactive');
        }
        else
        {
            console.log('Что-то пошло не так...');
        }
    };
});

