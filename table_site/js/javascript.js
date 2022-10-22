// スクロール途中で追従
$(function(){
    var scrollStart_1 = $('.sortarea').offset().top; //ページ上部からの距離を取得
    // var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
    var distance_1 = 0;
   
    $(document).scroll(function(){
      distance_1 = $(this).scrollTop(); //スクロールした距離を取得
   
      if (scrollStart_1 <= distance_1) { //スクロール距離が『.sikaku_box』の位置を超えたら
        $('.sortarea').addClass('fixed'); //class『fixed』を追加
      } else if (scrollStart_1 >= distance_1) { //スクロールがページ上部まで戻ったら
        $('.sortarea').removeClass('fixed'); //class『fixed』を削除
      }
    });      
  });
$(function(){
    var swiper_button_fixed_next = $('.swiper-button-next').offset().top; //ページ上部からの距離を取得
    // var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
    var distance_2 = 0;
   
    $(document).scroll(function(){
      distance_2 = $(this).scrollTop() + 200; //スクロールした距離を取得
   
      if (swiper_button_fixed_next <= distance_2) { //スクロール距離が『.sikaku_box』の位置を超えたら
        $('.swiper-button-next').addClass('fixed'); //class『fixed』を追加
      } else if (swiper_button_fixed_next >= distance_2) { //スクロールがページ上部まで戻ったら
        $('.swiper-button-next').removeClass('fixed'); //class『fixed』を削除
      }
    });      
  });
$(function(){
    var swiper_button_fixed_prev = $('.swiper-button-prev').offset().top; //ページ上部からの距離を取得
    // var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
    var distance_3 = 0;
   
    $(document).scroll(function(){
      distance_3 = $(this).scrollTop() + 200; //スクロールした距離を取得
   
      if (swiper_button_fixed_prev <= distance_3) { //スクロール距離が『.sikaku_box』の位置を超えたら
        $('.swiper-button-prev').addClass('fixed'); //class『fixed』を追加
      } else if (swiper_button_fixed_prev >= distance_3) { //スクロールがページ上部まで戻ったら
        $('.swiper-button-prev').removeClass('fixed'); //class『fixed』を削除
      }
    });      
  });

//   table
var swiper = new Swiper(".mySwiper", {
  
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      750: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      500: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// アコーデオン
$(function(){
  //クリックで動く
  $('.nav-open').click(function(){
    $(this).toggleClass('active');
    $(this).next('nav').slideToggle();
  });
});