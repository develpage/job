$(document).ready(function() {
/*
    $(".catalog-section").click(function() {
        document.location.href = $('.catalog-link').attr('href');
    });
*/
function navLinkWidth () {
    var links = document.querySelectorAll('.nav-link');
    for ( var i = 0; i < links.length; i++) {
        links[i].style.width = (links[i].offsetWidth + 6) + 'px';
    }
}
navLinkWidth ();
});
// Mobile navigation script
    
$(function() {
    $('.burger').on('click', function showNav() {
        $('.mobile-nav').fadeToggle('fast', 'linear');
		$('.top').toggleClass('activeT');
		$('.bottom').toggleClass('activeB');
		$('.middle').toggleClass('noactive');
    });
    $('.mob-link').on('click', function() {
            $('.mobile-nav').fadeToggle('fast', 'linear');
			$('.top').toggleClass('activeT');
			$('.bottom').toggleClass('activeB');
			$('.middle').toggleClass('noactive');
    });
});



$(function () {
    $('.catalog-section').click(function () {
        $('#myModal').modal('show');
    });
});



$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
    $('.nav-link').each(function () {
        var link = $(this).attr('href');
        if (cur_url == link)
        {
            $(this).addClass('active-link');
        }
    });
});