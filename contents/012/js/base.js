/* ----------------------------------------------------------------------
ハンバーガーボタンがクリックした時に・・・
---------------------------------------------------------------------- */
// ハンバーガーボタンをクリックした場合
$(function () {
  $(".ham_btn").on("click", function () {
    $(this).toggleClass("ham_btn_move");
    $(".main_menu_sp").toggleClass("main_menu_sp_move");
  });
});
// ターゲット以外をクリックした場合
$(document).on('click', function (e) {
  if (!$(e.target).closest('.ham_btn, .main_menu_sp').length) {
    // ターゲット要素の外側をクリックした時の操作
    $(".ham_btn").removeClass("ham_btn_move");
    $(".main_menu_sp").removeClass("main_menu_sp_move");
  } else {
    // ターゲット要素をクリックした時の操作
  }
});

// ===== メインメニュー（PC） =====
// リストホバー_greeting（第2階層）
$(function () {
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_greeting').mouseover(function () {
    $('> ul', this).addClass('list_01_greeting_ul_display')
  });
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_greeting').mouseout(function () {
    $('>ul', this).removeClass('list_01_greeting_ul_display')
  });
});
// リストホバー_greeting（第3階層）
$(function () {
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_greeting > ul > .list_001_greeting').mouseover(function () {
    $('> ul', this).addClass('list_001_greeting_ul_display')
  });
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_greeting > ul > .list_001_greeting').mouseout(function () {
    $('> ul', this).removeClass('list_001_greeting_ul_display')
  });
});
// リストホバー_lecture（2階層）
$(function () {
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_lecture').mouseover(function () {
    $('> ul', this).addClass('list_01_lecture_ul_display')
  });
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_lecture').mouseout(function () {
    $('> ul', this).removeClass('list_01_lecture_ul_display')
  });
});
// リストホバー_lecture（3階層）
$(function () {
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_lecture > ul > .list_001_lecture').mouseover(function () {
    $('> ul', this).addClass('list_001_lecture_ul_display')
  });
  $('.hdr_main > .wrapper > .main_menu > ul > .list_01_lecture > ul > .list_001_lecture').mouseout(function () {
    $('> ul', this).removeClass('list_001_lecture_ul_display')
  });
});

// ===== メインメニュー（SP） =====
// プルダウンメニュー
$(function () {
  $('.down_arrow').click(function () {
    $(this).next('ul').slideToggle(),$(this).toggleClass('down_arrow_move')
  });
});
