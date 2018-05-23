<?php include('header.php'); ?>
<section class="l-content-container c-hero--contact c-hero c-hero--with-video js-hero" >

  <video class="c-hero__video" autoplay loop>
    <source src="videos/contact.mp4" type="video/mp4">
  </video>
  <h1>Let’s get down to the root of your needs.</h1>
</section>


<section class="l-content-container u-sm-pb u-sm-pt u-lrg-text o-content">
  <div class="l-constrain-content">
    <div class="c-tag">Get in touch</div>
    <h2>We work with big and small brands, here and around the world. </h2>
  </div>
</section>

<section class="l-anchor-right@med l-split-content l-split-content--equal-width">
  <div>
    <div class="c-contact-form-container">
      <form name="contact-form" class="c-contact-form js-form">
        <div class="l-split-content">
          <div class="c-form-field c-form-field--half">
            <select class="js-select" name="location">
              <option>Please select a location*</option>
              <option value="NYC">NYC</option>
              <option value="BKN">BKN</option>
            </select>
          </div>

          <div class="c-form-field c-form-field--half">
            <select class="js-select" name="department">
              <option>Please select a department*</option>
              <option value="NYC">Art</option>
              <option value="BKN">Photography</option>
            </select>
          </div>
        </div>

        <div class="c-form-field">
          <input type="text" placeholder="Name*" name="name" required>
        </div>

        <div class="c-form-field">
          <input type="text" placeholder="Company name" name="company-name">
        </div>

        <div class="c-form-field">
          <input type="email" placeholder="E-mail address*" name="email" required>
        </div>

        <div class="c-form-field">
          <textarea placeholder="Message*" required></textarea>
        </div>

        <button class="c-btn" type="submit">Submit</button>

      </form>

      <div class="c-contact-form__success js-form-success u-lrg-text o-content">
        <p>Thanks for reaching out.</p>

        <p>We'll be in touch soon.</p>
      </div>
    </div>


    <div class="l-split-content l-split-content--equal-width">
      <div>
        <div class="c-member">
          <div class="c-member__name">Isaac Litchfield, Owner</div>
          <a class="c-member__email" href="mailto:Isaac@rootnyc.com">Isaac@rootnyc.com</a>
        </div>

        <div class="c-member">
          <div class="c-member__name">Ken Kobayashi, Executive Director</div>
          <a class="c-member__email" href="mailto:Ken@rootnyc.com">Ken@rootnyc.com</a>
        </div>

        <div class="c-member">
          <div class="c-member__name">Alex Strohmeier, Digital Director</div>
          <a class="c-member__email" href="mailto:Alex@rootnyc.com">Alex@rootnyc.com</a>
        </div>

      </div>
      <div>
        <div class="c-member">
          <div class="c-member__name">Steven Fischbein, Executive Director</div>
          <a class="c-member__email" href="mailto:Steven@rootnyc.com">Steven@rootnyc.com</a>
        </div>

        <div class="c-member">
          <div class="c-member__name">Eric Coles, Bookings Director</div>
          <a class="c-member__email" href="mailto:Eric@rootnyc.com">Eric@rootnyc.com</a>
        </div>

        <div class="c-member">
          <div class="c-member__name">Lynn Guarino, Director of Motion Production</div>
          <a class="c-member__email" href="mailto:Lynn@rootnyc.com">Lynn@rootnyc.com</a>
        </div>
      </div>
    </div>
  </div>
  <div>
    <img class="u-img-spacer u-img-spacer--small" src="i/map-nyc@2x.jpg">

    <img src="i/map-bkn@2x.jpg">
  </div>
</section>

<section class="l-page-section l-content-container">
  <div class="l-split-content">
    <h3>@ROOTSTUDIOS</h3>

    <div>
      <a href="https://instagram.com/rootstudios/" target="_blank" class="u-hover-link u-hover-link--right">See All</a>
    </div>
  </div>

  <div id="instafeed"></div>
</section>


<script src="js/lib/instafeed.js"></script>
<script src="js/form.js"></script>
<?php include('footer.php'); ?>