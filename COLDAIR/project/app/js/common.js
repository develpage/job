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

window.onload = function () {

    var modalGalleryWrapper = document.querySelector('.gallery-modal-wrapper');
    var galleryModal = document.querySelector('.gallery-modal');
    var images = document.querySelectorAll('.gallery-img');
    var rightArrow = document.querySelector('.right');
    var leftArrow = document.querySelector('.left');
    var currentIndex;
    //  console.log(images);
    var href = [];

    for (var i = 0; i < images.length; i++) {
        href[i] = images[i].getAttribute("src");

        images[i].onclick = function () {


            modalGalleryWrapper.classList.toggle('modal-show');
            galleryModal.classList.toggle('gallery-modal-show');
            var clickImgAttr = this.getAttribute('src');
            var clickImgAlt = this.getAttribute('alt');

            document.querySelector('.modal-img').setAttribute('src', clickImgAttr);
            document.querySelector('.modal-img-name').innerHTML = clickImgAlt;

            currentIndex = href.indexOf(clickImgAttr);

            modalGalleryWrapper.addEventListener('click', removeModal);
        }

    }

    rightArrow.onclick = function () {
        currentIndex++;
        var nextImage = href[currentIndex];
        document.querySelector('.modal-img').setAttribute('src', nextImage);

        console.log(currentIndex);

        /*  document.querySelector('.modal-img-name').innerHTML = clickImgAlt;*/
        
    };

function removeModal(e) {
            if (!e.target.matches('.gallery-modal, .gallery-modal *')) {
                modalGalleryWrapper.classList.toggle('modal-show');
                galleryModal.classList.toggle('gallery-modal-show');
                modalGalleryWrapper.removeEventListener('click', removeModal);
            }
            
        };



    };

    


  //  console.log(href);







var wrapper = document.getElementById('wrapper');
var button = document.getElementById('button');
var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var currentIndex = 0;
var currentLimit = 5;

function showArray() {
  currentLimit += currentIndex;
  for (currentIndex; currentIndex < currentLimit && currentIndex < array.length; currentIndex++) {
    wrapper.innerHTML += array[currentIndex] + "<br />";
  };
}


// google Maps -----------------------------------------------------------

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.219993 , lng: 39.709282 },
        zoom: 17,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
       
    });
    setMarkers(map);
}
    var offices = [
        ['komarova', 47.286823, 39.703821, 3],
        ['dovatora', 47.243000, 39.643042, 2],
        ['sadovaya', 47.219993, 39.709282, 1]
      ];

function setMarkers(map) {
        var myMark = {
            url: "img/svg/icons/map2.svg",
            scaledSize: new google.maps.Size(40, 80) 
        };
        
        for(var i = 0; i< offices.length; i++) {
            var office = offices[i];
            var marker = new google.maps.Marker({
                position: {lat: office[1], lng: office[2]},
                map: map,
                icon: myMark
              });
        }
    
};

/*
var myMark = {
    url: "img/svg/icons/map.svg",
    scaledSize: new google.maps.Size(40, 80) 
};

var marker = new google.maps.Marker({
position: { lat: 47.229389, lng: 39.753851 },
map: map,
icon: myMark,

animation: google.maps.Animation.DROP
});

*/