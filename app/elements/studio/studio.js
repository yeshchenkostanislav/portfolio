if ($(window).width() >= 992) {
  $('.studio__list-works-item').hover(function () {
    $(this).toggleClass('studio__list-works-item_active');
  })
}

if ($(window).width() < 992) {
  $('.studio__list-works-item').toggleClass('studio__list-works-item_active');
}