let slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    nav: false,
    speed: 500,
    responsive: {
        0: { items: 2 },
        768: { items: 3 },
        1024: { items: 3 }
    }
})


let newsSlider = tns({
      container: '.my-slider-news',
      items: 1,
      slideBy: 1,
      autoplay: true,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 16,
      loop: true,
      speed: 500,
      mouseDrag: true,
      responsive: {
        640: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });