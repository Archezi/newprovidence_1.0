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
  });


  // Price Table
  var individual_price_table = $('#price_tables').find('.individual');
  var company_price_table = $('#price_tables').find('.company');


  $('.choice_buttons').find('.individual').addClass('active');
  // $('#price_tables').find('.individual').addClass('active');




  $('.choice_buttons').find('.individual').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.choice_buttons').removeClass('active');
    $(this).siblings().removeClass('active');
    company_price_table.addClass('active');
    individual_price_table.removeClass('active');	
    console.log('button individual clicked');

  });
  
  $('.choice_buttons').find('.company').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.choice_buttons').removeClass('active');
    $(this).siblings().removeClass('active');
    individual_price_table.addClass('active');
    company_price_table.removeClass('active');
  });

  // $('.choice_button').find('.company').on('click', function(){
  //   $(this).addClass('active');
  //   $(this).closest('.choice_buttons').addClass('active');
  //   $(this).siblings().removeClass('active');
  //   // company_price_table.addClass('active');
  //   // individual_price_table.removeClass('active');			
  //   });
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

});