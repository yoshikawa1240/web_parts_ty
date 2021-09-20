<link rel="stylesheet" href="<?php echo $home_url; ?>/web_parts_ty/contact/002/css/reset.min.css" );>
<link rel="stylesheet" href="<?php echo $home_url; ?>/web_parts_ty/contact/002/css/style.min.css" );>

  <!----------------------------------------- 
  contact_ty_002
  ------------------------------------------>
  <article class="contact_ty_002">
    <header>
      <h1>お問い合わせ</h1>
      <p>お問い合わせ・ご相談は、以下のお問い合わせフォームから承っております。お気軽にご連絡ください。</p>
    </header>
    <section>
      <form>
        <div class="item">
          <label><span>必須</span>お名前</label>
          <div class="name">
            <input type="text" name="name" placeholder="山田">
            <input type="text" name="name" placeholder="太郎">
          </div>
        </div>
        <div class="item">
          <label><span>必須</span>メールアドレス</label>
          <input type="email" name="email" placeholder="××××××××@mail.com">
        </div>
        <div class="item">
          <label><span>必須</span>お問い合わせ内容</label>
          <textarea></textarea>
        </div>
        <div class="btn_area">
          <input type="submit" value="送信する">
        </div>
      </form>
    </section>
  </article>