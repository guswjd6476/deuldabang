
$(window).scroll(function() {

    if ($(window).scrollTop() > 30) {
        $('header').addClass('wbg');
    } else {
        $('header').removeClass('wbg');
    }
});

$(document).ready(function(){
    $('.top_ban').addClass('gogo');
    $('.top_text').addClass('gogo');
    $('.pg1 .textwrap').addClass('gogo');
    $('.pg1 .imgwrap img').fadeIn(1500);

//메인 자바스크립트
    $(function(){
      $(window).scroll(function(){
        var winHalfHeight = $(window).outerHeight()/2;
        var calcTemp = ($('.pg2').offset().top) - (winHalfHeight);
        var calcTemp2 = ($('.pg4').offset().top) - (winHalfHeight);
        var calcTemp3 = ($('.pg5').offset().top) - (winHalfHeight);
        var calcTemp4 = ($('.pg6').offset().top) - (winHalfHeight);
        if ($(window).scrollTop() > calcTemp) {
          $('.m_list_wrap').addClass('act');
          setTimeout(function(){
            $('.m_list_wrap').addClass('rdy');
          }, 1500)
        } 
        if($(window).scrollTop() > calcTemp2) {
          $('.pg4 .textwrap').addClass('gogo');
          setTimeout(function(){
            $('.pg4 .textwrap').addClass('rdy');
          }, 1500)
        }
        if($(window).scrollTop() > calcTemp3) {
          $('.pg5 .textwrap').addClass('gogo');
          setTimeout(function(){
            $('.pg5 .textwrap').addClass('rdy');
          }, 1500)
        }    
        if ($(window).scrollTop() > calcTemp4) {
          $('.insta_wrap').addClass('act');
          setTimeout(function(){
            $('.insta_wrap').addClass('rdy');
          }, 1500)
        }     
      });
    });
    
  });




  //탭 기능
$(document).ready(function(){
  $(".con").hide();
  $(".con:first").first().show();
  $(".nav_tab li a").click(function () {
      $(this).parent().siblings("li").removeClass("on");
      $(this).parent().addClass("on"); 
      $(this).parent().parent().parent().parent().find(".con").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();
  });
  })
  




 
  
  $(document).ready(function(){
    mobile_menu();
  })

  //모바일 메뉴 
  function mobile_menu(){
    /* 변수 선언 */
    var $menu = null;
    var $left_gnb = null; // 영역 전체
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    /* 시작 함수 */
    function start(){
        init();
        init_event();
    }
    /* 변수 초기화 함수 */
    function init(){
        $menu = $('.btn_mobile');
        $left_gnb = $('.left_gnbWrap'); // 영역 전체
        $depth1_wrap = $('.left_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('.a');
    }
    function init_event(){
        
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
        });
        
        $('.mclose').click(function(event){
            event.preventDefault();
            $left_gnb.removeClass('on');            
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
        $depth1_btn.click(function(event){
            event.preventDefault();
            var $this = $(this);
            var $this_ul = $this.siblings('ul');

            var check = $this.hasClass('on');
            if(check){
                $this.removeClass('on');
                $this_ul.stop(true,true).slideUp();
            }else{
                $depth1_btn.removeClass('on');
                $depth1.stop().slideUp();
                $this.addClass('on');
                $this_ul.stop(true,true).slideDown();
            }
        });
        
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start(); // 시작 호출
}
  