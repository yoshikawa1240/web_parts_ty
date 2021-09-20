// ＝＝＝＝＝ ローディングアニメーション ＝＝＝＝＝
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

// ＝＝＝＝＝ スクロールアニメーション ＝＝＝＝＝
// 【テキスト】スクロールして出現するアニメーション
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
  $(document).ready(function () {
    $("#page_top").hide();
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#page_top").fadeIn("300");
      } else {
        $("#page_top").fadeOut("300");
      }
      scrollHeight = $(document).height(); //ドキュメントの高さ 
      scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
      footHeight = $(".ftr_pc").innerHeight(); //footerの高さ（＝止めたい位置）
      if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
        $("#page_top").css({
          "position": "absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
          "bottom": footHeight + 10 //下からfooterの高さ + 10px上げた位置に配置
        });
      } else { //それ以外の場合は
        $("#page_top").css({
          "position": "fixed", //固定表示
          "bottom": "10px" //下から20px上げた位置に
        });
      }
    });
    $('#page_top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });
});

// ===== クリックして指定位置に移動 =====
$(function () {
  $('.link_about').on('click', function () {
    const aboutTop = $('#about').offset().top;
    $("html").animate({ scrollTop: aboutTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_reason').on('click', function () {
    const reasonTop = $('#reason').offset().top;
    $("html").animate({ scrollTop: reasonTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_melit').on('click', function () {
    const melitTop = $('#melit').offset().top;
    $("html").animate({ scrollTop: melitTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_plan').on('click', function () {
    const planTop = $('#plan').offset().top;
    $("html").animate({ scrollTop: planTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_price').on('click', function () {
    const priceTop = $('#price').offset().top;
    $("html").animate({ scrollTop: priceTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_flow').on('click', function () {
    const flowTop = $('#flow').offset().top;
    $("html").animate({ scrollTop: flowTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_qanda').on('click', function () {
    const qandaTop = $('#qanda').offset().top;
    $("html").animate({ scrollTop: qandaTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});
$(function () {
  $('.link_contact').on('click', function () {
    const contactTop = $('#contact').offset().top;
    $("html").animate({ scrollTop: contactTop });
    $('.ham_btn').removeClass('ham_btn_move'), $('.nav_sp').removeClass('nav_sp_display');
  });
});