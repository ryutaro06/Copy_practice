// スクロール途中で追従
$(function(){
    var scrollStart_1 = $('.sortarea').offset().top; //ページ上部からの距離を取得
    // var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
    var distance = 0;
   
    $(document).scroll(function(){
      distance = $(this).scrollTop(); //スクロールした距離を取得
   
      if (scrollStart_1 <= distance) { //スクロール距離が『.sikaku_box』の位置を超えたら
        $('.sortarea').addClass('fixed'); //class『fixed』を追加
      } else if (scrollStart_1 >= distance) { //スクロールがページ上部まで戻ったら
        $('.sortarea').removeClass('fixed'); //class『fixed』を削除
      }
    });      
  });

//   table
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
