$(document).ready(function() {

  // Scroll Events
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main_navigation').addClass('active');
			// $('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main_navigation').removeClass('active');
			// $('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});
  
  
  
  
  
  
  
  
  
  
  
  
  
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
}





	