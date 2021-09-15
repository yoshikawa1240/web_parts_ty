$(function () {
  $('.cont_ty_005_wrapper').slick({
    // autoplay: true,
    // 自動再生
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '15%',
        }
      },
    ]
  });
});