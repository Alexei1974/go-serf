$(function(){
    $('.header__slider').slick({
        fade: true,     
        infinite: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
         slidesToScroll: 4,
         asNavFor: '.header__slider',
         infinite: false,
    });
   
   
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,  
        infinite: false,      
         prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
         nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',  
         asNavFor: '.slider-map',
         focusOnSelect:true,

               
         responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }, 
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }, 
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }           
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }                 
        ]     
    })
    $('.slider-map').slick({   
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows:false,
        asNavFor:'.surf-slider',
        focusOnSelect:true, 
        infinite: false, 
        
        responsive: [
          {
            breakpoint: 1201,
            settings: {           
              slidesToShow: 3,             
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
            }
          },               
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          },         
        ]                     
    })


    $('.holder__slider,.shop__slider').slick({
        fade: true,
        infinite: false,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
    });


    // summ
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    $('.quantity-button').on('click', function(){
        var parents = $(this).parents('.holder-slider__info');
         let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
         $('.summ', parents).html('$' + summ);
        });

    $('.quantity').each(function() {
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
         $('.summ', parents).html('$' + summ);
        });

        $('.sufbord-box__circle').on('click',function(){
          $(this) .toggleClass('active')
        })

        $('.menu-btn').on('click',function(){
          $('.menu') .toggleClass('active');
        });          
        

          
            new WOW().init();
            $('#myBlock').vide('video/Pexels Videos 1093661.mp4');
                      
 
});
