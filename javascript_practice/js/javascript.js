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
    labels: ['Sun', 'Mon', 'Tue'],
    datasets: [{
      label: 'Red',
      data: [25, 35, 40],
      backgroundColor: '#f88',
    }, {
      label: 'Green',
      data: [20, 10, 30],
      backgroundColor: '#484',
    }, {
      label: 'Blue',
      data: [30, 20, 15],
      backgroundColor: '#48f',
    }],
  },
});