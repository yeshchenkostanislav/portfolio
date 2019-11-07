$('.menu__burger-menu').click(function () {
  $('.menu__burger-menu-line').toggleClass('menu__burger-menu-line_active');
  $('.menu__nav').toggleClass('menu__nav_active');
});

$('.menu__nav-item').on('click', function () {
  $('.menu__nav-item').removeClass('menu__nav-item_active');
  $(this).addClass('menu__nav-item_active');
});