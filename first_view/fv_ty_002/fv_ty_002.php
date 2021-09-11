<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fv_parts_y_002</title>
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
    fv_parts_y_002
  ---------------->
  <div class="fv_parts_y_002">
    <div class="wrapper">
      <div class="fv_slick">
        <div class="image"><img src="https://cdn.pixabay.com/photo/2021/07/16/18/28/czech-republic-6471576_1280.jpg"
            alt=""></div>
        <div class="image"><img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg" alt="">
        </div>
        <div class="image"><img src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg" alt=""></div>
        <div class="image"><img src="https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_1280.jpg" alt="">
        </div>
        <div class="image"><img src="https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg" alt=""></div>
      </div>
      <div class="inner_wrapper">
        <div class="inner">
          <h1 class="main_title">ここにタイトルを入力ここにタイトルを入力ここにタイトルを入力</h1>
          <p class="main_text_01">
            ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          </p>
          <p class="main_text_02">
            ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          </p>
          <p class="main_text_03">
            ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          </p>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>

</body>


<script>
  // +++++ fvタイトル・テキスト +++++
  $(function () {
    // アニメーションさせたいクラス
    let container = $('.main_title');
    // アニメーションスピード
    let speed = 80;
    // テキストの間にスペースを入れます
    let content = container.html();
    let text = $.trim(content);
    let newHtml = "";
    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function (v) {
      newHtml += '<span>' + v + '</span>';
    });
    // spanで囲んだテキスト群をHTMLに戻す
    container.html(newHtml);
    // 1文字ずつ表示
    let txtNum = 0;
    container.css({ opacity: 1 });
    setInterval(function () {
      container.find('span').eq(txtNum).css({ opacity: 1 });
      txtNum++
    }, speed);
  });
  $(function () {
    // アニメーションさせたいクラス
    let container = $('.main_text_01');
    // アニメーションスピード
    let speed = 50;
    // テキストの間にスペースを入れます
    let content = container.html();
    let text = $.trim(content);
    let newHtml = "";
    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function (v) {
      newHtml += '<span>' + v + '</span>';
    });
    // spanで囲んだテキスト群をHTMLに戻す
    container.html(newHtml);
    // 1文字ずつ表示
    let txtNum = 0;
    container.css({ opacity: 1 });
    setInterval(function () {
      container.find('span').eq(txtNum).css({ opacity: 1 });
      txtNum++
    }, speed);
  });
  $(function () {
    // アニメーションさせたいクラス
    let container = $('.main_text_02');
    // アニメーションスピード
    let speed = 50;
    // テキストの間にスペースを入れます
    let content = container.html();
    let text = $.trim(content);
    let newHtml = "";
    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function (v) {
      newHtml += '<span>' + v + '</span>';
    });
    // spanで囲んだテキスト群をHTMLに戻す
    container.html(newHtml);
    // 1文字ずつ表示
    let txtNum = 0;
    container.css({ opacity: 1 });
    setInterval(function () {
      container.find('span').eq(txtNum).css({ opacity: 1 });
      txtNum++
    }, speed);
  });
  $(function () {
    // アニメーションさせたいクラス
    let container = $('.main_text_03');
    // アニメーションスピード
    let speed = 50;
    // テキストの間にスペースを入れます
    let content = container.html();
    let text = $.trim(content);
    let newHtml = "";
    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function (v) {
      newHtml += '<span>' + v + '</span>';
    });
    // spanで囲んだテキスト群をHTMLに戻す
    container.html(newHtml);
    // 1文字ずつ表示
    let txtNum = 0;
    container.css({ opacity: 1 });
    setInterval(function () {
      container.find('span').eq(txtNum).css({ opacity: 1 });
      txtNum++
    }, speed);
  });
  // +++++ スリック +++++
  $(function () {
    $('.fv_slick').slick({ //{}を入れる
      fade: true,
      autoplay: true, //自動再生
      arrows: false, //矢印非表示
      dots: true, //ドット状のナビを表示
      slidesToShow: 1, //表示するスライド数
      slidesToScroll: 1, //1回で動くスライド数
      //「オプション名: 値」の形式で書く
      //複数書く場合は「,」でつなぐ
    });
  });
</script>



</html>