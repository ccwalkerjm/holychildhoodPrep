
 jQuery(document).ready(function(){   
                jQuery('.social img').animate({'opacity':'.85'},10);
				jQuery('.social img').hover(
						function () {
								jQuery(this).animate({'opacity':'1'},150);
						},
						function () {
								jQuery(this).animate({'opacity':'.85'},250);
						}
				);


	  //$('.flexslider').flexslider();

  });    		
$(window).load(function() {
	$('.flexslider').flexslider();
});
