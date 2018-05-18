var doc = document;

doc.querySelector('.js-nav-toggle').addEventListener('click', function () {
  this.classList.toggle('collapse');
  doc.querySelector('.js-nav-overlay').classList.toggle('is-visible');
  doc.querySelector('html, body').classList.toggle('no-scroll');
  doc.querySelector('.js-hero').classList.toggle('fade-out');
});