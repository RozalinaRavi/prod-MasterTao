$('select').niceSelect();

$('#first-screen-slider').slick({
     
  dots: true,
  appendArrows: $('.first-screen-arrows'),

  responsive: [{
    breakpoint: 1024,
    settings: {
        arrows: false,
    }
}, ]
});


$('.slider-template').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  //arrows: false
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
    }
  },
  {   breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
  },
]
});


  
  const hamburger = document.querySelector('.hamburger')
  const headerNav = document.querySelector('.header-nav')
  const fileInput = document.querySelector('#calculation-file');
  const fileName = document.querySelector('#file-name')

  hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
  })

  fileInput.addEventListener('change', () => {
    fileName.innerHTML = fileInput.files[0].name;
});

  const controlledField = document.querySelectorAll('[type="checkbox"]')
  const fileField = document.querySelectorAll('[type=file')
  const formBtns = document.querySelectorAll('form .col button')
 


  const addParentClass = (array, parent, className) => {
    array.forEach(item => {
    item.closest(parent).classList.add(className)
    })
  }

  addParentClass(controlledField, '.input-wrapper', 'controlled-wrapper')
  addParentClass(controlledField, '.col', 'controlled-col')
  addParentClass(fileField, '.input-wrapper', 'file-wrapper')
  addParentClass(formBtns, '.col', 'mobile-center')

  




mobileOnlySlider(".slider-advantages", true, false, 1024);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  const slider = $($slidername);
  const settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} 

