
// ハンバーガーメニュー
var page_header = document.getElementById("page-header");

// ハンバーガーメニューのクリックイベント
document.getElementById("mobile-menu-icon").onclick = function() {
    // #headerにopenクラスが存在する場合
    if(page_header.classList.contains("menu-open")) {
        // openクラスを削除
        // openクラスを削除すると、openクラスのCSSがはずれるため、
        // メニューが非表示になる
        page_header.classList.remove("menu-open");

        // #headerにopenクラスが存在しない場合
    } else {
        // openクラスを追加
        // openクラスを追加すると、openクラスのCSSが適応されるため、
        // メニューが表示される
        page_header.classList.add("menu-open");
    }
};
// メニューが表示されている時に画面をクリックした場合
document.getElementById("mask").onclick = function() {
    // openクラスを削除して、メニューを閉じる
    page_header.classList.remove("menu-open");
}
// nav-menu内のaタグを押した時にmenu-openクラスを外す
// nav-menu内のaタグの要素数を取得する（配列で取得）
const header_nav = document.querySelectorAll('.header-nav a');
// nav-menuのaタグ分繰り返す
header_nav.forEach((nav, i) => {
    // したい事を書く。今回はクリック毎にmenu-openのクラスを外す関数を記載している
    nav.onclick = function() {
        page_header.classList.remove("menu-open");
    }
});

header_nav.onclick = function() {
    page_header.classList.remove("menu-open");
}