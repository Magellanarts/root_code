var doc = document;

doc.querySelector('.js-nav-toggle').addEventListener('click', function () {
  this.classList.toggle('collapse');
  doc.querySelector('.js-nav-overlay').classList.toggle('is-visible');
});