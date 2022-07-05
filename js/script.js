let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


let tabsBtn = document.querySelectorAll('.work__btn__step');
let tabsItem = document.querySelectorAll('.content__tabs');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('work__btn__step--active')});
      e.currentTarget.classList.add('work__btn__step--active');

      tabsItem.forEach(function (element) { element.classList.remove('content__tabs--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('content__tabs--active');
  });
});

const swiper = new Swiper ('.swiper', {

  slidesPreView: 1,
  loop: true,
  calculateHeight:true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

  $( "#accordion" ).accordion({
    animate: 5,
    heightStyle: "content",
    collapsible: true
  });

  let search = document.querySelector('.header__search_wrapper');
  let btnDescr = document.querySelector('.what__descr');
  let hedSearch = document.querySelector('.header__btn');
  let hedClose = document.querySelector('.header__close');
  let form = document.querySelector('.what__form');
  let formWrap = document.querySelector('.form__wrapper');

  hedSearch.addEventListener('click', function () {

  btnDescr.classList.add('what__descr-active');

  hedSearch.classList.add('header__search-active');

  hedClose.classList.add('header__close-active');

  form.classList.add('what__form-active');

  formWrap.classList.add('form__wrapper-active');

});

hedClose.addEventListener('click', function () {

  search.classList.remove('header__search_wrapper-active');

  btnDescr.classList.remove('what__descr-active');

  hedSearch.classList.remove('header__search-active');

  hedClose.classList.remove('header__close-active');

  form.classList.remove('what__form-active');

  formWrap.classList.remove('form__wrapper-active');

});
