// onclick="document.querySelector('body').classList.toggle('menu-open');"
// ハンバーガーメニュー
var fixed = document.getElementById("fixed");

// ハンバーガーメニューのクリックイベント
document.getElementById("mobile-menu-icon").onclick = function() {
    // #headerにopenクラスが存在する場合
    if(fixed.classList.contains("menu-open")) {
        // openクラスを削除
        // openクラスを削除すると、openクラスのCSSがはずれるため、
        // メニューが非表示になる
        fixed.classList.remove("menu-open");

        // #headerにopenクラスが存在しない場合
    } else {
        // openクラスを追加
        // openクラスを追加すると、openクラスのCSSが適応されるため、
        // メニューが表示される
        fixed.classList.add("menu-open");
    }
};

// メニューが表示されている時に画面をクリックした場合
document.getElementById("mask").onclick = function() {
    // openクラスを削除して、メニューを閉じる
    fixed.classList.remove("menu-open");
}

// nav-menu内のaタグを押した時にmenu-openクラスを外す
// nav-menu内のaタグの要素数を取得する（配列で取得）
const nav_menu = document.querySelectorAll('.nav-menu a');
// nav-menuのaタグ分繰り返す
nav_menu.forEach((nav, i) => {
    // したい事を書く。今回はクリック毎にmenu-openのクラスを外す関数を記載している
    nav.onclick = function() {
        fixed.classList.remove("menu-open");
    }
});

// chart.js
// 折線グラフ
var ctx_line = document.getElementById('mychart_line');
var myChart = new Chart(ctx_line, {
  type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
      label: 'Red',
      data: [20, 35, 40, 30, 45, 35, 40],
      borderColor: '#f88',
      }, {
      label: 'Green',
      data: [20, 15, 30, 25, 30, 40, 35],
      borderColor: '#484',
      }, {
      label: 'Blue',
      data: [30, 25, 10, 5, 25, 30, 20],
      borderColor: '#48f',
      }],
    },
    options: {
      scales: {
        y: {
          // 最小値・最大値
          min: 0,
          max: 60,
          // 軸タイトル
          title: {
              display: true,
              text: '縦軸ラベル',
          },
          // 目盛ラベル
          ticks: {
            color: 'black',
            stepSize: 10,
            showLabelBackdrop: true,
            // backdropColor: '#ddf',
            backdropPadding: { x: 4, y: 2 },
            major: {
            enabled: true,
            },
            align: 'cnter',
            crossAlign: 'center',
            sampleSize: 4,
          },
          grid: {
              // 軸線
              borderColor: 'balck',
              borderWidth: 2,
              drawBorder: true,
              // 目盛線＆グリッド線
              color: '#333',
              display: true,
              // グリッド線
              borderDash: [4, 4],
              borderDashOffset: 0,
              // 目盛線
              // drawTicks: true,
              // tickColor: '#000',
              // tickLength: 10,
              // tickWidth: 2,
              // tickBorderDash: [2, 2],
              // tickBorderDashOffset: 0,
          },
        },
        x: {
            grid: {
                borderColor: '#000',
                borderWidth: 2,
            },
            // 軸タイトル
            title: {
                display: true,
                text: '横軸ラベル',
            },
        },
      },
      plugins: {
          title: {
              display: true, // タイトルを表示する
              text: 'グラフタイトルxxxx' // タイトルのテキスト
          },
          legend: { 
              position: "top",     // ラベルの表示位置
          },
      },
    },
});
// 円グラフ（ドーナツチャート）
var ctx_doughnut = document.getElementById('mychart_doughnut');
var myChart = new Chart(ctx_doughnut, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#f88', '#484', '#48f'],
      weight: 100,
    }],
  },
});

// 円グラフ（パイチャート）
var ctx_pie = document.getElementById('mychart_pie');
var myChart = new Chart(ctx_pie, {
  type: 'pie',
  data: {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#f88', '#484', '#48f'],
      weight: 100,
    }],
  },
});

// 棒グラフ
var ctx_bar = document.getElementById('mychart_bar');
var myChart = new Chart(ctx_bar, {
  type: 'bar',
  data: {
    labels: ['国語', '算数', '英語', '物理', '歴史'],
    datasets: [{
      label: '田中',
      data: [25, 60, 88, 89, 46],
      backgroundColor: '#f88',
    }, {
      label: '山本',
      data: [20, 84, 30, 99, 47],
      backgroundColor: '#484',
    }, {
      label: '村上',
      data: [30, 20, 15, 44, 86],
      backgroundColor: '#48f',
    }],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: '点数',
        },
      },
      x: {
        title: {
          display: true,
          text: '教科',
        },
      },
    },
  },
});

// 時系列チャート
data_time = [];
for (var i = 0; i <= 12; i++) {
  data_time[i] = {x: new Date(2022, 8, 23, i + 8, 0, 0), y: Math.random() * 30 + 5};
}
var ctx_time = document.getElementById('mychart_time');
var myChart = new Chart(ctx_time, {
  type: 'line',
  data: {
    datasets: [{
      label: '東京都の気温',
      data: data_time,
      borderColor: '#f88',
    }],
  },
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          min: new Date(2022, 8, 23, 8, 0, 0),
          max: new Date(2022, 8, 23, 22, 0, 0),
          displayFormats: {
            hour: 'HH:mm',
          },
          tooltipFormat: 'HH:mm',
        },
      },
      y: {
        min: 0,
        max: 40,
      },
    },
  },
});

// 積み重ね棒チャート
var ctx_bar_stack = document.getElementById('mychart_bar-stack');
var myChart = new Chart(ctx_bar_stack, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue'],
    datasets: [{
      label: 'Red',
      data: [20, 35, 40],
      backgroundColor: '#f88',
      stack: 'stack-1',
    }, {
      label: 'Green',
      data: [20, 15, 30],
      backgroundColor: '#484',
      stack: 'stack-1',
    },{
      label: 'Blue',
      data: [30, 25, 15],
      backgroundColor: '#48f',
      stack: 'stack-1',
    }],
  },
});


//Initialize Swiper
  // mySwiper＿time
  var swiper = new Swiper(".mySwiper_time", {
      loop: true,
      autoplay: {
          delay: 500,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      }
  });
  // mySwiper_click
  var swiper = new Swiper(".mySwiper_click", {
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
  // Slides per view
  var swiper = new Swiper(".mySwiper_per_view", {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
          // 768px以上の場合
          768: {
          slidesPerView: 3
          }
      },
      spaceBetween: 20,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
});
// Effect coverflow
var swiper = new Swiper(".mySwiper_effect_coverflow", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});
// Thumbs gallery loop
var swiper = new Swiper(".mySwiper_thumbs_gallery_loop", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper_thumbs_gallery_loop2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// LodingのJS
//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  strokeWidth: 0.5,//進捗ゲージの太さ
  duration: 3000,//時間指定(1000＝1秒)
  color: '#555',//進捗ゲージのカラー
  trailColor: '#bbb',//ゲージベースの線のカラー
  trailWidth: 0.5,//線の太さ
  text: {//テキストの形状を直接指定 
    style: {//天地中央に配置
      position:'absolute',
      left:'50%',
      top:'50%',
      padding:'0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'2rem',
      color:'#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
}); 

// 一番上へ
document.getElementById('upScroll').addEventListener('click', () => {
  var a = document.documentElement;
  var y = a.scrollHeight - a.clientHeight;
  window.scroll({top: 0});
});

// 一番下へ
document.getElementById('downScroll').addEventListener('click', () => {
  var a = document.documentElement;
  var y = a.scrollHeight - a.clientHeight;
  window.scroll(0, y);
});
// scrollHeight：要素の中身（ページ）の高さ
// clientHeight：表示域（ブラウザ）の高さ

// tab_change_area
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}

//タブをクリックしたら
$('.tab a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得  
  GethashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID (hashName);//設定したタブの読み込み
});

// アコーデオン
$(function(){
  //クリックで動く
  $('.nav-open').click(function(){
    $(this).toggleClass('active');
    $(this).next('nav').slideToggle();
  });
});

// スクロール途中で追従
$(function(){
  var scrollStart_1 = $('.content-title_1').offset().top; //ページ上部からの距離を取得
  var scrollStart_2 = $('.content-title_2').offset().top; //ページ上部からの距離を取得
  var scrollStart_3 = $('.content-title_3').offset().top; //ページ上部からの距離を取得

  var content_title_1_class = $

  // var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
  var distance_1 = 0;
  var distance_2 = 0;
  var distance_3 = 0;
 
  $(document).scroll(function(){
    distance_1 = $(this).scrollTop() + 80; //スクロールした距離を取得
    distance_2 = $(this).scrollTop() + 260; //スクロールした距離を取得
    distance_3 = $(this).scrollTop() + 380; //スクロールした距離を取得


    if (scrollStart_1 <= distance_1) { //スクロール距離が『.sikaku_box』の位置を超えたら
      $('.content-title_1').addClass('fixed'); //class『fixed』を追加
    } else {
      $('.content-title_1').removeClass('fixed'); //class『fixed』を削除
    }
 
    if (scrollStart_2 <= distance_2) { //スクロール距離が『.end_box』の位置を超えたら
      $('.content-title_2').addClass('fixed'); //class『fixed』を追加
      // $('.content-title_1').addClass('none'); //class『none』を追加
    } else{
      $('.content-title_2').removeClass('fixed'); //class『fixed』を削除
      // $('.content-title_1').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
    }
    if (scrollStart_3 <= distance_3) { //スクロール距離が『.end_box』の位置を超えたら
      $('.content-title_3').addClass('fixed'); //class『fixed』を追加
      // $('.content-title_2').addClass('none'); //class『none』を追加
    } else{
      $('.content-title_3').removeClass('fixed'); //class『fixed』を削除
      // $('.content-title_2').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
    }
  });      
});