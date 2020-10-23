
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

      thbg = $('.swiper-slide-bg');
      console.log(thbg);

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
