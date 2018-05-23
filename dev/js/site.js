var doc = document;

doc.querySelector('.js-nav-toggle').addEventListener('click', function () {
  this.classList.toggle('collapse');
  doc.querySelector('.js-nav-overlay').classList.toggle('is-visible');
  doc.querySelector('html, body').classList.toggle('no-scroll');
  doc.querySelector('.js-hero').classList.toggle('fade-out');
  doc.querySelector('.js-site-logo').classList.toggle('fade-out');
});


// submenu
var submenuToggles = doc.querySelectorAll('.js-submenu-toggle');

for(var i = 0; i < submenuToggles.length; i++) {
  submenuToggles[i].addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('is-open');
  });
}

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


// create dropdowns
const selects = doc.querySelectorAll('.js-select');
if(selects) {
  for (let i = 0; i < selects.length; i++) {

    // get name of select
    const name = selects[i].getAttribute('name');

    // get children of select
    const children = selects[i].children;
    const placeholder = children[0].innerText;

    // create new element that will be used to reference our select
    const selectorElement =  doc.createElement('div');
    selectorElement.setAttribute('data-select', name);
    selectorElement.setAttribute('class', 'o-selector js-selector');

    // create the label section of our new dropdown
    const selectorLabel = doc.createElement('div');
    selectorLabel.setAttribute('class', 'o-selector__label js-selector__label');
    const selectorLabelTextElement = doc.createElement('div');
    selectorLabelTextElement.setAttribute('class', 'o-selector__label-text js-selector__label-text');
    selectorLabelTextElement.appendChild(doc.createTextNode(placeholder));
    selectorLabel.appendChild(selectorLabelTextElement);

    // create arrow element for inside label
    const selectorArrow = doc.createElement('div');
    selectorArrow.setAttribute('class', 'o-selector__arrow js-selector__arrow');

    // add arrow to label
    selectorLabel.appendChild(selectorArrow);

    // append the label section to our selector element
    selectorElement.appendChild(selectorLabel);

    // add event listener to label
    selectorLabel.addEventListener('click', function () {
      this.classList.toggle('is-open');
      this.nextElementSibling.classList.toggle('is-open');
    });


    // create dropdown section
    const selectorDropdown = doc.createElement('div');
    selectorDropdown.setAttribute('class', 'o-selector__dropdown js-selector__dropdown');

    // loop through children of select and add them to our new element
    for (let j = 1; j < children.length; j++) {
      let dropdownOption = doc.createElement('div');
      dropdownOption.setAttribute('data-select', name);
      let dropdownOptionText = children[j].value;
      dropdownOption.appendChild(doc.createTextNode(dropdownOptionText));
      selectorDropdown.appendChild(dropdownOption);

      // add event listener to dropdown option
      dropdownOption.addEventListener('click', function () {
        var originalSelect = doc.querySelector('select[name="' + this.getAttribute('data-select') + '"]');


        var node = this;
        var indexCounter = 0;
        // get index of this option
        while( (node = node.previousSibling) != null )
          indexCounter++;

        originalSelect.selectedIndex = (indexCounter + 1);
        // trigger onchange event
        // it won't fire automatically when we change the selected index
        if(originalSelect.getAttribute('onchange')) {
          originalSelect.onchange();
        }

        // change label to this text
        this.parentElement.previousSibling.childNodes[0].innerText = this.innerText;

        // remove is-open classes
        this.parentElement.classList.remove('is-open');
        this.parentElement.previousSibling.classList.remove('is-open');
      });
    }

    // add dropdown to selector
    selectorElement.appendChild(selectorDropdown);

    // add our new element to the code after the select
    insertAfter(selectorElement, selects[i]);
  }
}


/*----------------------
 Helper Functions
 ----------------------*/
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}