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
    var modalGallery = document.querySelector('.gallery-modal-wrapper');
    var galleryModal = document.querySelector('.gallery-modal');
    var images = document.querySelectorAll('.gallery-img');
    var rightArrow = document.querySelector('.right');
    //  console.log(images);
    var href = [];

    for (var i = 0; i < images.length; i++) {

        images[i].onclick = function () {

            modalGallery.classList.toggle('modal-show');
            galleryModal.classList.toggle('gallery-modal-show');
            var clickImgAttr = this.getAttribute('src');
            var clickImgAlt = this.getAttribute('alt');
            document.querySelector('.modal-img').setAttribute('src', clickImgAttr);
            document.querySelector('.modal-img-name').innerHTML = clickImgAlt;

            modalGallery.addEventListener('click', removeModal);
        }

        href[i] = images[i].getAttribute("src");

        rightArrow.onclick = function () {
            
            for ( var i = 0; i < href.length; i++) {
                
                console.log(href[i]);
                
            }


        }
       


    };

    
    function removeModal(e) {
        if (!e.target.matches('.gallery-modal, .gallery-modal *')) {
            modalGallery.classList.toggle('modal-show');
            galleryModal.classList.toggle('gallery-modal-show');
            modalGallery.removeEventListener('click', removeModal);
        }
        
    };



  //  console.log(href);





}

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