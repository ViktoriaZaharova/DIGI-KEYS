// tabs
$(function () {
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});

// menu sidebar
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

function accordeon2() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon2();

// amount
$('.down').on("click", function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});

// input focus
$("input, textarea").focus(function () {
	$(this).parent().addClass("focus");
}).blur(function () {
	if ($(this).val() === '') {
		$(this).parent().removeClass("focus");
	}
});

$('input, textarea').each(function () {
	var $this = $(this),
		val = $this.val();

	if (val.length >= 1) {
		$(this).parent().addClass("focus");
	} else {
		$(this).parent().removeClass("focus");
	}
});

$('.promo-link').click(function (e) {
	e.preventDefault();
	$('.promo-wrapper__label').fadeIn();
});

// модальные окна (несколько)
$(function () {
	var overlay = $('.overlay'),
		open_modal = $('.open_modal'),
		close = $('.modal__close, .overlay'),
		modal = $('.modal__div');

	open_modal.on('click', function (event) {
		event.preventDefault();

		modal.css('display', 'none').animate({
			opacity: 0,
			top: '45%'
		}, 200);

		var div = $(this).attr('href');
		overlay.fadeIn(400,
			function () {
				$(div)
					.css('display', 'flex')
					.animate({
						opacity: 1,
						top: '50%'
					}, 200);
			});
	});

	close.on('click', function () {
		modal
			.animate({
				opacity: 0,
				top: '45%'
			}, 200,
				function () {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
	});
});
//end