<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cont_parts_y_005</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <!-- FontAwesome -->
  <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <!-- GoogleFont -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;400;500;700;900&display=swap"
    rel="stylesheet">
  <!-- slick.css_cdn -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css">
</head>

<body>
  <!-------------- 
    cont_parts_y_005
  ---------------->
  <article class="cont_parts_y_005">
    <h2>タイトルをここに入力<span>サブタイトルをここに入力</span></h2>
    <div class="conts">
      <a href="">
        <div class="image"><img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg"></div>
        <div class="category_name">カテゴリー</div>
      </a>
      <a href="">
        <div class="image"><img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg"></div>
        <div class="category_name">カテゴリー</div>
      </a>
      <a href="">
        <div class="image"><img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg"></div>
        <div class="category_name">カテゴリー</div>
      </a>
      <a href="">
        <div class="image"><img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg"></div>
        <div class="category_name">カテゴリー</div>
      </a>
    </div>
  </article>

  <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>

  <script>
    $(function () {
      $('.conts').slick({
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
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '15%',
            }
          },
        ]
      });
    });
  </script>

</body>

</html>