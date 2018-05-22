var doc = document;

doc.querySelector('.js-nav-toggle').addEventListener('click', function () {
  this.classList.toggle('collapse');
  doc.querySelector('.js-nav-overlay').classList.toggle('is-visible');
  doc.querySelector('html, body').classList.toggle('no-scroll');
  doc.querySelector('.js-hero').classList.toggle('fade-out');
  doc.querySelector('.js-site-logo').classList.toggle('fade-out');
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


// Sticky Nav Component
var Sticky = (function() {
  var CSS_CLASS_ACTIVE = 'is-fixed';

  var Sticky = {
    element: null,
    position: 0,
    addEvents: function() {
      window.addEventListener('scroll', this.onScroll.bind(this));
    },
    init: function(element) {
      this.element = element;
      this.addEvents();
      this.position = element.offsetTop ;
      this.onScroll();
    },
    aboveScroll: function() {
      return this.position < (window.scrollY + 70);
    },
    onScroll: function(event) {
      if(window.innerWidth > 800) {
        if (this.aboveScroll()) {
          var bottomOfElement = this.position + this.element.offsetHeight;
          var footer = doc.querySelector('.js-site-footer');

          if(isScrolledIntoView(footer)) {
            // if footer is viewable, we need to adjust the specs to only scroll to bottom of parent
            doc.querySelector('.js-studio-specs-container').classList.add('relative');
            this.element.classList.add('position-bottom');
          } else {
            // fix the element
            this.setFixed();
            this.element.classList.remove('position-bottom');
            doc.querySelector('.js-studio-specs-container').classList.remove('relative');
          }

        } else {
          this.setStatic();
        }
      }
    },
    setFixed: function() {
      this.element.classList.add(CSS_CLASS_ACTIVE);
      // not needed if added with CSS Class
      this.element.style.position = 'fixed';
      this.element.style.top = '70px';
    },
    setStatic: function() {
      this.element.classList.remove(CSS_CLASS_ACTIVE);
      // not needed if added with CSS Class
      this.element.style.position = 'relative';
      this.element.style.top = 'auto';
    }
  };

  return Sticky;
})();


//  Init Sticky
var sticky = document.querySelector('.js-sticky');
if (sticky)
  Sticky.init(sticky);


function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  //console.log(elemTop - window.innerHeight);
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  isVisible = (elemTop - window.innerHeight) <= 160;
  return isVisible;
}