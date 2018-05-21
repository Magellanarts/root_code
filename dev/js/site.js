var doc = document;

doc.querySelector('.js-nav-toggle').addEventListener('click', function () {
  this.classList.toggle('collapse');
  doc.querySelector('.js-nav-overlay').classList.toggle('is-visible');
  doc.querySelector('html, body').classList.toggle('no-scroll');
  doc.querySelector('.js-hero').classList.toggle('fade-out');
});

// headroom
var headroom = new Headroom(doc.querySelector('.js-site-header'),{
  onPin : function() {
    doc.querySelector('.js-nav-toggle').classList.remove('c-nav-toggle--unpinned');
    doc.querySelector('.js-nav-toggle').classList.add('c-nav-toggle--pinned');
  },
  onUnpin : function() {
    doc.querySelector('.js-nav-toggle').classList.remove('c-nav-toggle--pinned');
    doc.querySelector('.js-nav-toggle').classList.add('c-nav-toggle--unpinned');
  },
  classes: {
    pinned: 'c-site-header--pinned',
    unpinned: 'c-site-header--unpinned',
    notTop: 'c-site-header--not-top'
  }
});

headroom.init();