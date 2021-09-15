$(function () {
  $(".list_01").mouseover(function () {
    $("ul", this).stop().slideDown(300),
      $(".link_01").addClass("link_color_01")
  }).mouseout(function () {
    $("ul", this).stop().slideUp(150),
      $(".link_01").removeClass("link_color_01")
  });
});
$(function () {
  $(".list_03").mouseover(function () {
    $("ul", this).stop().slideDown(300),
      $(".link_03").addClass("link_color_03")
  }).mouseout(function () {
    $("ul", this).stop().slideUp(150),
      $(".link_03").removeClass("link_color_03")
  });
});
$(function () {
  $(".list_04").mouseover(function () {
    $(".service_guid", this).stop().fadeIn(),
      $(".link_04").addClass("link_color_04")
  }).mouseout(function () {
    $(".service_guid", this).stop().fadeOut(),
      $(".link_04").removeClass("link_color_04")
  });
});
$(function () {
  $(".list_06").mouseover(function () {
    $(".hdr_blog", this).stop().fadeIn(),
      $(".link_06").addClass("link_color_06")
  }).mouseout(function () {
    $(".hdr_blog", this).stop().fadeOut(),
      $(".link_06").removeClass("link_color_06")
  });
});
// ナビゲーションボタンをクリック
$(function () {
  $(".nav_btn").on("click", function () {
    $(this).toggleClass("nav_btn_close"),
      $(".nav_sp").toggleClass("nav_sp_display"),
      $(".filter").toggleClass("filter_display")
  });
});
// フィルターをクリック
$(function () {
  $(document).on("click", ".filter_display", function () {
    $(".nav_sp").removeClass("nav_sp_display"),
      $(".nav_btn").removeClass("nav_btn_close"),
      $(".filter").removeClass("filter_display")
  });
});
$(function () {
  $(".nav_sp > ul > .sp_list_01").on("click", ".chevron_down_01", function () {
    $(".sp_list_01 > ul").slideDown(),
      $(".chevron_down_01").addClass("chevron_up_01")
  }),
    $(".nav_sp > ul >  .sp_list_01").on("click", ".chevron_up_01", function () {
      $(".sp_list_01 > ul").slideUp(),
        $(".chevron_down_01").removeClass("chevron_up_01")
    });
});
$(function () {
  $(".nav_sp > ul").on("click", ".chevron_down_03", function () {
    $(".sp_list_03 > ul").slideDown(),
      $(".chevron_down_03").addClass("chevron_up_03")
  }),
    $(".nav_sp > ul").on("click", ".chevron_up_03", function () {
      $(".sp_list_03 > ul").slideUp(),
        $(".chevron_down_03").removeClass("chevron_up_03")
    });
});
$(function () {
  $(".chevron_down_01").mouseover(function () {
    $(this).addClass("chevron_down_bg_01")
  }), $(".chevron_down_01").mouseout(function () {
    $(this).removeClass("chevron_down_bg_01")
  });
});
$(function () {
  $(".chevron_down_03").mouseover(function () {
    $(this).addClass("chevron_down_bg_03")
  }), $(".chevron_down_03").mouseout(function () {
    $(this).removeClass("chevron_down_bg_03")
  });
});