var j = jQuery.noConflict();
j(document).ready(function($) {

	
	$("a[rel=example_group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});
	
	
	// Next JS snippets are only for fancybox.net
	
	/*
	*   Donate link
	*/
	$("a#donate").bind("click", function() {
		$("#donate_form").submit();
		return false;
	});

	/*
	*   Zebra-stripping table
	*/
	
	$("table.options tr:even").addClass('even');

});
