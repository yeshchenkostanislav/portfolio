$('.recent-projects__footer').on('click', '.recent-projects__btn', function () {
  $('.recent-projects__list').removeClass('recent-projects__list_hide');
  $(this).text('скрыть').addClass('recent-projects__btn_active');
});

$('.recent-projects__footer').on('click', '.recent-projects__btn_active', function () {
  $(this).text('еще больше').removeClass('recent-projects__btn_active');
  $('.recent-projects__list').eq(1).addClass('recent-projects__list_hide');
});