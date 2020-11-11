
jQuery(document).ready(function($) {
   
   /* home page header */
   $("#home-meu").click(function(){
      $(".saeon-header").removeClass("sn-noscroll");
   });

   /* search */
	$('body').on('submit', '#sasdisearch', function(e){
		e.preventDefault();
		
		var searchterm = $('.sasdisearch').val();
      var searchurl = 'http://www.sasdi.net/search.aspx?noframe=true&anytext='
      //var searchurl = 'https://catalogue.saeon.ac.za/records?terms=' 
		console.log(searchurl + searchterm);
		window.open(searchurl + searchterm,'_blank');
   });
   
   /* Home Display */
   window.addEventListener('load', function(){
      // only do functions if page contains the svg
      if ($(".homeds").length != ''){
      
      // Count the amount of slides
      slidecount = $('.swiper-slide').length;

      // Divide slide by 3 to get amount of orignals
      orginalcount = slidecount / 3;

      // Get the background image of all orignals
      orgianls = $(".swiper-slide").slice(0, orginalcount);

      // Create image on SVG for each slide image
      var thegroupclass = 0;
      $(orgianls).each(function(){
         thegroupclass++;
         // strip to only bg URLS
         originalbg = $(this).find('.swiper-slide-bg').css('background-image');
         originalbgurl = originalbg.replace('url(','').replace(')','').replace(/\"/gi, "");
         // get the slide title
         thetitle = $(this).find(".elementor-slide-heading");
         // get the number and title from the content
         var titletext = thetitle.text().replace(/\d+/g, '')
         var titlenumber = thetitle.text().replace(/[^0-9]/gi, '');
         // create icon on the SVG from bg URLs
         var imgelement = "<img class='hm-icon img-wht' src='" + originalbgurl + "' />"
         $( "<div class='hdicons thegroupclass"+thegroupclass+"'><div>"+imgelement+"<p><b>"+titlenumber+"</b>"+titletext+"</p></div></div>" ).insertAfter( ".homedsleft svg" );
         // remove title from slider view
         $(thetitle).remove();
         
      });

      // Icon relationship positions
      var iconpos = "left top";
      var iconpostwo = "right top";
      
      // Iterate through positions for all 6 points
      $( ".hdicons" ).each(function() {

         // get this class number
         var groupclass = $(this).attr("class").match(/\d+$/)[0];
         // get the svg ID it will move to
         var thecircleid = "#hdpoint" + groupclass ;

         // Position if on left or right of circle
         if(groupclass <= 4){
            $(this).position({
               my: iconpos,
               at: iconpos,
               of: thecircleid,
               collision: "none"
             });
         } else {
            $(this).position({
               my: iconpostwo,
               at: iconpostwo,
               of: thecircleid,
               collision: "none"
             });
         }         

      });
      
      // On click events between SVG and slider

      // click slider
      $(".homeds").on("click",function(){
         var activebullet = $(this).find(".swiper-pagination-bullet-active");
         $(activebullet).css("background","green");
         // aria-label="Go to slide 2"
         // swiper-pagination-bullet 
      });
      // Click SVG
      $(".hdicons").on("click",function(){
         var clickedicon = $(this).attr("class").match(/\d+$/)[0];
         $(this).addClass("activeicon");
         $( '.swiper-pagination-bullet[aria-label="Go to slide '+clickedicon+'"]' ).trigger( "click" );
         console.log(clickedicon);
      });
       




   }

    });
});
