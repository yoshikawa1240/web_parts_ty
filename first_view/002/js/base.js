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
    slidesToShow: 1, //表示するスライド数
    slidesToScroll: 1, //1回で動くスライド数
  });
});