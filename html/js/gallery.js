if($(window).width()>1024){document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");}  

		

$(function(){
	var $container = $('#container');
	$container.isotope({
		itemSelector : '.element'
	});
	var $optionSets = $('#options .option-set'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
		return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		// make option object dynamically, i.e. { filter: '.my-filter-class' }
		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
		// parse 'false' as false boolean
		value = value === 'false' ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		// changes in layout modes need extra logic
		changeLayoutMode( $this, options )
		} else {
		// otherwise, apply new options
		$container.isotope( options );
		}
		
		return false;
	});


});




jQuery(document).ready(function($) {
	var $container = jQuery('#container'),
		filters = {};
	
	$container.imagesLoaded( function(){	
		setColumnWidth();
		$container.isotope({
			itemSelector : '.portfolio_item',
			resizable : false,
			transformsEnabled : true,
			layoutMode: 'fitRows'
		});		
	});
	
	function getNumColumns(){
		var $folioWrapper = jQuery('#container').data('cols');
		if($folioWrapper == '1col') {
			var winWidth = jQuery("#container").width();		
			var column = 1;		
			return column;
		}
		
		if($folioWrapper == '2cols') {
			var winWidth = jQuery("#container").width();		
			var column = 2;		
			if (winWidth<380) column = 1;
			return column;
		}
		
		else if ($folioWrapper == '3cols') {
			var winWidth = jQuery("#container").width();		
			var column = 3;		
			if (winWidth<380) column = 1;
			else if(winWidth>=380 && winWidth<788)  column = 2;
			else if(winWidth>=788 && winWidth<1160)  column = 3;
			else if(winWidth>=1160) column = 3;
			return column;
		}
		
		else if ($folioWrapper == '4cols') {
			var winWidth = jQuery("#container").width();		
			var column = 4;		
			if (winWidth<380) column = 1;
			else if(winWidth>=380 && winWidth<788)  column = 2;
			else if(winWidth>=788 && winWidth<1160)  column = 3;
			else if(winWidth>=1160) column = 4;		
			return column;
		}
	}
	
	function setColumnWidth(){
		var columns = getNumColumns();		
	
		var containerWidth = jQuery("#container").width();		
		var postWidth = containerWidth/columns;
		postWidth = Math.floor(postWidth);
 		
		jQuery(".portfolio_item").each(function(index){
			jQuery(this).css({"width":postWidth+"px"});				
		});
	}
		
	function arrange(){
		setColumnWidth();		
		$container.isotope('reLayout');	
	}
		
	jQuery(window).on("debouncedresize", function( event ) {	
		arrange();		
	});
	
	
	// Filter projects
	$('.filter a').click(function(){
		var $this = $(this).parent('li');
		// don't proceed if already active
		if ( $this.hasClass('active') ) {
			return;
		}

		var $optionSet = $this.parents('.filter');
		// change active class
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');

		var group = $optionSet.attr('data-filter-group');
		filters[ group ] = $this.find('a').attr('data-filter');
		// convert object into array
		var isoFilters = [];
		for ( var prop in filters ) {
			isoFilters.push( filters[ prop ] )
		}
		var selector = isoFilters.join('');
		$container.isotope({ filter: selector });

		return false;
	});
});






jQuery(window).load(function() 
{ 
	$x = $(window).width();    
	if($x > 1024)
	{     
	jQuery("#content .row").preloader();    
	}      
	 jQuery('.magnifier').touchTouch();
}); 
