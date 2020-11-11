
jQuery(document).ready(function($) {
	/* header */
	
	if ($("body").hasClass("page-template-page_no_banner")) {
		console.log('no banner');
		$('#masthead').addClass('fixed');
  	}
	/* search */
	$('body').on('submit', '#sasdisearch', function(e){
		e.preventDefault();
		
		var searchterm = $('.sasdisearch').val();
		var searchurl = 'http://www.sasdi.net/search.aspx?noframe=true&anytext='
		//console.log(searchurl + searchterm);
		window.open(searchurl + searchterm,'_blank');
	});
	// Carousel functions
	$('.carousel').carousel({
		interval: false
	  });
	  $('.carousel-control-prev').on('click', function(){
		$('.carousel').carousel('prev');
	  });
	  $('.carousel-control-next').on('click', function(){
		$('.carousel').carousel('next');
	  });
	  // MM menu tab functions
	  $('#mm-tabs li').on('mouseover', function(){
		$('#mm-tabs li').removeClass('active');
		$(this).addClass('active');
		var thisitemval = $(this).attr('mm-tab');

		//open and close tabs
		$('li[mm-tab-pill]').hide().removeClass('active');
		var activetab = $('li[mm-tab-pill="'+thisitemval+'"]');
		$(activetab).fadeIn(300);
		console.log(thisitemval);
	  });
	  $('.mm-item').on('mouseenter',function(){
		$(this).addClass('active');
		$('.mm-section').slideDown(300);
	  });
	  $('.mm-section').on('mouseleave',function(){
		$('.mm-item').removeClass('active');
		$('.mm-section').slideUp(300);
	  });
	  $('.menu-item').on('mouseenter',function(){
		$('.mm-item').removeClass('active');
		$('.mm-section').slideUp(300);
	  });

});