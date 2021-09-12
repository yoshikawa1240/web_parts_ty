<link rel="stylesheet" href="<?php echo $home_url; ?>/web_parts_ty/contents/012/css/style.min.css" );>
<link rel="stylesheet" href="<?php echo $home_url; ?>/web_parts_ty/contents/012/css/reset.min.css" );>
<!-- slick.css -->
<link rel="stylesheet" href="<?php echo $home_url; ?>/web_parts_ty/contents/012/css/slick.css" );>
<!-- jQuery_CDN -->
<script src="https://code.jquery.com/jquery-3.6.0.js"integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<!-- slick.js -->
<script src="<?php echo $home_url; ?>/web_parts_ty/contents/005/js/slick.min.js" );></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
<!-- base.js -->
<script src="<?php echo $home_url; ?>/web_parts_ty/contents/012/js/base.js" );></script>

  <!-- 背景が斜めの方法
　・回転軸が分かるようにする
　・背景画像の幅と高さを0にする -->
  <!-------------- 
    cont_ty_012
  ---------------->
  <article class="cont_ty_011">
    <div class="wrapper">
      <section>
        <div class="inner">
          <h1>タイトル</h1>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </section>
      <div class="bg_image"></div>
    </div>
  </article>

  <!-- ハンバーガーボタン -->
  <header class="hdr_main">
    <div class="wrapper">
      <div class="ham_btn">
        <div class="in">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <!-- メインメニュー（SP） -->
      <nav class="main_menu_sp">
        <ul>
          <li><a href="./timetable.php">タイムテーブル</a></li>
          <li><a>ごあいさつ</a>
            <!-- 第2階層（ごあいさつ） -->
            <div class="down_arrow"></div>
            <ul>
              <li><a href="./greetings.php">川崎学園からごあいさつ</a></li>
              <li><a href="./committee_greeting.php">学園祭実行委員会から<br>ごあいさつ</a></li>
            </ul>
          </li>
          <li><a href="./committee_info.php">学園祭実行委員会紹介</a></li>
          <li><a>講演・作品展</a>
            <!-- 第2階層（講演・作品展） -->
            <div class="down_arrow"></div>
            <ul>
              <li><a>医学展</a></li>
              <li><a href="./live_medical.php">医学講演会</a></li>
              <li><a href="./gojyokai.php">互助会の部</a></li>
            </ul>
          </li>
          <li><a href="./how_to_enjoy.php">ご案内・注意事項</a></li>
        </ul>
      </nav>
    </div>
  </header>


  <!------------
ライブ
main_live
-------------->
<div class="main_live">
  <h1 class="text_in_07s"><span> 川崎学園祭限定<br>トークショー・お笑いライブ<span>[L I V E 配信]</span></span></h1>
  <div class="main_live_wrapper">
    <div class="talk_show_wrapper">
      <section class="talk_show text_in_1s">
        <div class="outer">
          <div class="image"><img src="./image/watanabe_keisuke.jpg" alt="渡邊圭佑"></div>
          <p>オンラインL I V E 配信の<br>トークショーになります。</p>
          <h2>渡邊圭祐 トークショー</h2>
          <span class="date"><span>10</span>月<span>17</span>日(日) 00:00スタート</span>
          <span class="price">料金 / <span>無料</span></span>
          <p>★申し込みの上、抽選制となります。</p>
          <p>★方法は学内にてご案内します。</p>
          <div class="exclusive">
            <span>川崎学園</span>
            <div class="inner">
              <span>学生限定配信</span>
              <div class="image"><img src="./image/icon_youtube.png" alt=""></div>
              <span>LIVE</span>
            </div>
          </div>
          <a href="./live_talk.php">詳細ページへ<div class="image"><img src="./image/icon_next.svg" alt=""></div></a>
        </div>
      </section>
      <div class="circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="owarai_live_wrapper">
      <section class="owarai_live text_in_1s">
        <div class="outer">
          <div class="image"><img src="./image/watanabe_keisuke.jpg" alt="渡邊圭佑"></div>
          <p>オンラインLIVE配信の<br>お笑いライブになります。</p>
          <h2>□□□□□ お笑いライブ</h2>
          <span class="date"><span>10</span>月<span>17</span>日(日)00:00スタート</span>
          <span class="price">料金 / <span>無料</span></span>
          <div class="inner">
            <span>フリー視聴可能</span>
            <div class="image"><img src="./image/icon_youtube.png" alt=""></div>
            <span>LIVE</span>
          </div>
          <a href="./live_comedy.php">詳細ページへ<div class="image"><img src="./image/icon_next.svg" alt=""></div></a>
        </div>
        <div class="circle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  </div>
</div>
