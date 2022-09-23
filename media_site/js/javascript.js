
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

nav_menu.onclick = function() {
    fixed.classList.remove("menu-open");
}

// scroll
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 50) {
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});

