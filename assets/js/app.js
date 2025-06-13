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