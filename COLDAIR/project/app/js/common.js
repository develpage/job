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

$(function(){
    if($('body').is('.gallery-page')){



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
        } else if (currentIndex == 0) {
            leftArrow.style.display = 'none';
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

    }
);
     
 
// google Maps 

var self;

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
    self = this;
    
};

var offices = [
        ['komarova', 47.286823, 39.703821],
        ['dovatora', 47.243000, 39.643042],
        ['sadovaya', 47.219993, 39.709282]
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


$(function(){
    if($('body').is('.contact-page')){
var komarova = [47.286823, 39.703821];


function goToMarker() {

    var adrLinks = document.querySelectorAll('.map-ico');
    
    for (var i = 0; i < adrLinks.length; i++) {

        adrLinks[i].onclick = function () {

           var currentId =  this.getAttribute('id');
           
           for (var j = 0; j< offices.length; j++){
           
           }
       
        }
    }
};

/*

function MoveMapTo(lat,lng) { 
    return function(e) { 
      self.map.panTo(new google.maps.LatLng(lat,lng)); 
    }
   } 


   google.maps.event.addDomListener(document.getElementById('sadovaya'), 'click', moveMapTo(47.219993,39.709282));
   google.maps.event.addDomListener(document.getElementById('dovatora'), 'click', moveMapTo(47.243000,39.643042));
   google.maps.event.addDomListener(document.getElementById('komarova'), 'click', moveMapTo(47.286823,39.703821));
*/
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





// Map how to road
var adrModalWrapper = document.querySelector('.adr-modal-wrapper');
var adrMapRoad = document.querySelectorAll('.adr-link');

    for (var i = 0; i < adrMapRoad.length; i++) {
        adrMapRoad[i].onclick = function(event) {
            event.preventDefault();
            adrModalWrapper.classList.toggle('modal-show');

            var currentAdr = this.getAttribute('href');
            document.querySelector('.img-sklad').setAttribute('src', currentAdr);
    }
};
var closeMarker = document.querySelector('.close');
    closeMarker.onclick = function(){
    adrModalWrapper.classList.toggle('modal-show');
};


    }
});


// Page select. Active links.

$(document).ready(function(){

    $('.page-select-link').on('click', function(){
        $('.page-select-link').removeClass('active-page');
        $(this).toggleClass('active-page');


    });

    $('.arrow-left').on('click', function(){
        var pageNumbers = $('.page-select-link');
        for (var i = 0; i < pageNumbers.length; i++) {
            pageNumbers[i].classList.remove('active-page');
        }
    });

});