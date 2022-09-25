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

// クリックで画像切替
$(function()
{
  // サブ画像を選択状態にする（selectクラスを付与して太枠をつける）
	$(".sub_img dt").eq(0).addClass("select");
  // サブ画像をクリックされた時の処理
	$(".sub_img img").click(function()
	{
    // サブ画像のパスを取り出す
		var img = $(this).attr("src");
 
    // サブ画像を非選択状態にする（selectクラスを外す）
		$(".sub_img dt").removeClass("select");
    // サブ画像を選択状態にする（selectクラスを付与して太枠をつける）
		$(this).parent().addClass("select");
 
    // メイン画像の差し替え
		$(".main_img img").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
});
