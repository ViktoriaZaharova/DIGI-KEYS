// tabs
$(function () {
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});

// menu sidebar
// $('.dropdown-toggle').click(function (e) {
// 	e.preventDefault();
// 	if ($('.dropdown-toggle').hasClass('open')) {
// 		$('.open').siblings('.dropdown-menu').css('display', 'block');
// 	}
// 	$(this).toggleClass('open').siblings('.dropdown-menu').slideToggle();
// });

function accordeon() {
	var panel = $('.dropdown');

	if (panel.hasClass('open')) {
		$('.open').find('.dropdown-menu').slideDown();
	}

	$('.dropdown-toggle').on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('open').find('.dropdown-menu').slideToggle();
	});
}

accordeon();