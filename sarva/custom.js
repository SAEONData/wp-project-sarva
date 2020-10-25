
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
      // Count the amount of slides
      slidecount = $('.swiper-slide-bg').length;

      // Divide slide by 3 to get amount of orignals
      orginalcount = slidecount / 3;

      // Get the background image of all orignals
      orgianls = $(".swiper-slide-bg").slice(0, orginalcount);

      // Create image on SVG for each slide image
      $(orgianls).each(function(){
         // strip to only bg URLS
         originalbg = $(this).css('background-image');
         originalbgurl = originalbg.replace('url(','').replace(')','').replace(/\"/gi, "");
         // create icon on the SVG from bg URLs
         $( "<img class='hm-icon img-wht' src='" + originalbgurl + "' />" ).insertAfter( ".homedsleft svg" );
      });

      // Center images to the SVG
      $( ".hm-icon" ).position({
         my: "center",
         at: "center",
         of: ".homedsleft svg"
       });
   


      
      //console.log(orgianls);

      $('.homeds').find('.swiper-slide-bg').each(function() {

         // thbg = $(this).css('background-image');
         // console.log(thbg);
         // $.each(this.attributes, function(i, attrib){
         //    var name = attrib.name;
         //    var value = attrib.value;
         //    // do your magic :-)
         // });
       });


   //    var hm_icons = $('.homeds').find('.swiper-slide-bg');

   //    $(hm_icons).each(function(){
   //       console.log($(this).css('background-image'));
   //   })
   

      // hm_icons.each(function(){ 
      //    var itsbg = $(this).css('background-image');
      //    hm_icons = hm_icons.replace('url(','').replace(')','').replace(/\"/gi, "");
      //    console.log(hm_icons);
      // });

    });
});
