var slider = tns({
    container: '.carusel__slider',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: true,
    navPosition: "bottom"

  });

document.querySelector('.prev').onclick = function () {
  slider.goTo("prev");
};

document.querySelector('.next').onclick = function () {
    slider.goTo("next");
  };