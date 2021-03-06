$(document).ready(function() {
 
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
  /* ======================================================
     Scroll Events
  */

    $('#navigation').on('click', function(e){
      e.preventDefault();
      console.log(`button clicked`);
    })
    // $('#navigation').on('click', function(e){
    //   e.preventDefault();
    //   // $(this).addClass('open');
    //   $('#slide_out_menu').toggleClass('open');
  
    //   if ($('#slide_out_menu').hasClass('open')) {
    //     $('.menu-close').on('click', function(e){
    //       e.preventDefault();
    //       $('#slide_out_menu').removeClass('open');
    //     })
    //   }
    // });

  /* ======================================================
     Price Table
  */
    var individual_price_table = $('#price_tables').find('.individual');
    var company_price_table = $('#price_tables').find('.company');

    // default active class 
    $('.choice_buttons').find('.individual').addClass('active');
    $('#price_tables').find('.individual').addClass('active');

    // switch buttons
    $('.choice_buttons').find('.individual').on('click', function(){
      $(this).addClass('active');
      $(this).closest('.choice_buttons').removeClass('active');
      $(this).siblings().removeClass('active');
      individual_price_table.addClass('active');	
      company_price_table.removeClass('active');
      console.log('button individual clicked');

    });
    
    $('.choice_buttons').find('.company').on('click', function(){
      $(this).addClass('active');
      $(this).closest('.choice_buttons').removeClass('active');
      $(this).siblings().removeClass('active');
      company_price_table.addClass('active');
      individual_price_table.removeClass('active');
    });

  /*======================================================
    Wow library 
  */
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