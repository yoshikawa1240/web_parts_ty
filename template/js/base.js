// ＝＝＝＝＝ ローディングアニメーション ＝＝＝＝＝
// window.onload = function() {
//   const spinner = document.getElementById('loading');
//   spinner.classList.add('loaded');
// }

// 石川さん
/* ----------------------------------------------------------------------
ローディングアニメーション
---------------------------------------------------------------------- */
window.onload = function () {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  setTimeout(function () {//ローディングが終わってから1.4秒後
    $("main").css({ opacity: "1" });
  }, 500);
  // 早い
  setTimeout(function () {//ローディングが終わってから1.8秒後
    $(".fade_up").addClass("isAnimate_02");
  }, 800);
  // 普通
  setTimeout(function () {//ローディングが終わってから1.8秒後
    $(".fade_left,.fade_up_02,.fade_up_10s,.fade_up_15s,.fade_up_18s,.fade_up_20s").addClass("isAnimate_02");
  }, 1500);
  // 遅い
  setTimeout(function () {//ローディングが終わってから1.8秒後
    $(".fade_right").addClass("isAnimate_02");
  }, 1800);
};

/* ----------------------------------------------------------------------
【テキスト】スクロールして出現するアニメーション
---------------------------------------------------------------------- */
// 0.7秒
$(window).on('scroll', function () {

  var text_in_07s = $('.text_in_07s');
  var isAnimate = 'isAnimate';

  text_in_07s.each(function () {

    var text_in_07sOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > text_in_07sOffset - wh + (wh / 8)) {
      $(this).addClass(isAnimate);
    }
  });

});
// 1秒
$(window).on('scroll', function () {

  var text_in_1s = $('.text_in_1s');
  var isAnimate = 'isAnimate';

  text_in_1s.each(function () {

    var text_in_1sOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > text_in_1sOffset - wh + (wh / 8)) {
      $(this).addClass(isAnimate);
    }
  });
});
// 2秒
$(window).on('scroll', function () {

  var text_in_2s = $('.text_in_2s');
  var isAnimate = 'isAnimate';

  text_in_2s.each(function () {

    var text_in_2sOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > text_in_2sOffset - wh + (wh / 8)) {
      $(this).addClass(isAnimate);
    }
  });
});



// ===== スクロールしてヘッダーナビゲーションを途中から表示 =====
$(function () {
  $(window).on("scroll", function () {
    let value = $(this).scrollTop();
    if (value > 100) {
      $(".hdr").addClass("hdr_change"), $('.ham_btn').addClass('ham_btn_change');
    } else {
      $(".hdr").removeClass("hdr_change"),
        $(".ham_btn").removeClass("ham_btn_change")
    }
  });
});

// ===== ハンバーガーボタンをクリックした場合 =====
$(function () {
  $('.ham_btn').on('click', function () {
    $(this).toggleClass('ham_btn_move'), $('.nav_sp').toggleClass('nav_sp_display');
  });
});

// ===== ページトップボタン =====
$(function () {
  let appear = false;
  let pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {  //300pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '1%' //下から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-100px' //下から-100pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

// ＝＝＝＝＝ スクロールアニメーション ＝＝＝＝＝
// ファーストビュー
$(function () {
  $(window).scroll(function () {
    $(".effect_fade_delay").each(function () {
      let elemPos = $(this).offset().top; /* 要素の位置を取得 */
      let scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      let windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect_scroll");
      }
    });
  });
  jQuery(window).scroll();
});
// フェード
$(function () {
  $(window).scroll(function () {
    $(".effect_fade").each(function () {
      let elemPos = $(this).offset().top; /* 要素の位置を取得 */
      let scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      let windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect_scroll");
      }
    });
  });
  jQuery(window).scroll();
});
// スライド
$(function () {
  $(window).scroll(function () {
    $(".effect_slide").each(function () {
      let elemPos = $(this).offset().top; /* 要素の位置を取得 */
      let scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      let windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect_scroll");
      }
    });
  });
  jQuery(window).scroll();
});

// ＝＝＝＝＝ スライダー ＝＝＝＝＝
$(function () {
  $('.news_wrapper').slick({
    // autoplay: true,
    // 自動再生
    dots: false,
    //スライドしたのドット
    arrows: false,
    autoplaySpeed: 5000,
    // 自動再生のスライド切り替えまでの時間をミリ秒で設定。
    slidesToShow: 3,
    // 表示するスライド数を設定。
    slidesToScroll: 1,
    // スクロールするスライド数を設定。
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '15%',
        }
      },
    ]
  });
});

