$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	autoplay: false,
	infinite: true,
	speed: 1000,
	swipe: false
});

$(document).ready(function ($) {
	var sliderTimer = 4000;
	var $imageSlider = $(".home-slider-nav");
	$imageSlider.slick({
		autoplay: true,
		autoplaySpeed: sliderTimer,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		asNavFor: '.home-slider',
		fade: true,
		swipe: false
	});

	function progressBar() {
		$(".slider-progress").find("span").removeAttr("style");
		$(".slider-progress").find("span").removeClass("active");
		setTimeout(function () {
			$(".slider-progress")
				.find("span")
				.css("transition-duration", sliderTimer / 1000 + "s")
				.addClass("active");
		}, 100);
	}
	progressBar();
	$imageSlider.on("beforeChange", function (e, slick) {
		progressBar();
	});
});




// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

$('.footer-box__title-toggle').on('click', function () {
	$(this).next('.footer-box__menu').slideToggle();
});

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
		$(this).parent().toggleClass('open');
		$(this).next('.dropdown-menu').slideToggle();
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

function accordeon3() {
	var panel = $('dropdown-my');

	if (panel.hasClass('open')) {
		$('.dropdown-my .open').find('.dropdown-menu').slideDown();
	}

	$('.dropdown-my-toggle').on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('open').find('.dropdown-menu').slideToggle();
		$('.overlay-bg').fadeToggle();
		$('.btn-catalog').removeClass('open').siblings('.dropdown-menu').slideUp();
		if ($('.dropdown-my').hasClass('open')) {
			$('.overlay-bg').fadeIn();
		}
	});
}

accordeon3();

$('.overlay-bg').on('click', function () {
	$('.btn-catalog').removeClass('open').siblings('.dropdown-menu').slideUp();
	$(this).fadeOut();
	$('.mobile-menu').css('left', '-100%');
	$('.menu .dropdown-menu').slideUp();
	$('.search-wrapper').removeClass('active');
	$('header').removeClass('active-search');
	$('.checkout-box-fix').removeClass('active');
});

// menu catalog
$(function () {
	$('.btn-catalog').click(function (e) {
		e.preventDefault();

		let pd = $(this).parents('.dropdown-catalog');
		$('.dropdown-catalog').not(pd).find('.btn-catalog').removeClass('open').next('.dropdown-menu-catalog').slideUp(200);
		$(this).toggleClass('open').next('.dropdown-menu-catalog').slideToggle();
		$('.dropdown-my').removeClass('open').find('.dropdown-menu').fadeOut();
		$('.overlay-bg').fadeToggle();

		if ($('.btn-catalog').hasClass('open')) {
			$('.overlay-bg').fadeIn();
			$('.search-wrapper').removeClass('active');
			$('header').removeClass('active-search');
		}
	});
});

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
		close = $('.modal__close, .overlay, .btn-close-modal'),
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

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.overlay-bg').fadeIn();
	$('.mobile-menu').css('left', 0);
});

$('.mobile-menu__close').click(function () {
	$('.mobile-menu').css('left', '-100%');
	$('.overlay-bg').fadeOut();
});

$(".js-tab-trigger").click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});


$(function () {
	// hidden list > 5
	$('.table-products tbody').each(function () {
		if ($(this).find('tr').length > 12) {
			$(this).find('tr').slice(12).hide();
			$(this).parents('.tabs__content').append('<a href="#" class="text-center load-more-wrap color-accent">Показать ещё</a>');
			$(this).parents('.table-products').addClass('hide');
		}

	});

	// hidden list > 5

	// show list all
	$('.load-more-wrap').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.tabs__content').find('.table-products tbody').find('tr:hidden').slideDown();
		$(this).parents('.tabs__content').find('.table-products').removeClass('hide');
		var onBlock = $(this).parents('.tabs__content').find('.table-products tbody').find('tr:hidden').length;
		if (onBlock <= 0) {
			$(this).hide();
		}
	});

	$('.btn-load-reviews').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.tabs__content').find('.reviews-box:hidden').slice(0, 5).slideDown();
		var onBlock = $(this).parents('.tabs__content').find('.reviews-box:hidden').length;
		if (onBlock <= 0) {
			$(this).hide();
		}
	});
	// show list all


});

// tabs
$(function () {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});

$(document).ready(function () {
	$('.formPhone').inputmask({
		"mask": "+7 (\\999) 999-9999",
		"clearIncomplete": true,
		showMaskOnHover: false
	});
});


// price counterUp
$(function () {
	$('form.checkout-box').on('blur', 'input', function () {

		var input = $(this);
		grecaptcha.execute('6LfJiesjAAAAACe0ZrZwCyP4SWVuQfQgvfqDZvKW', { action: 'contact' }).then(function (token) {
			if (document.getElementById('recaptchaResponse') !== null)
				document.getElementById('recaptchaResponse').value = token;
			if (document.getElementById('recaptchaResponseMobile') !== null)
				document.getElementById('recaptchaResponseMobile').value = token;


			let data = input.closest('form.checkout-box').serialize();
			$.ajax({
				url: '/api/?controller=Order&method=calculateDiscount',
				type: 'POST',
				data: data,
				async: true,
				success: function (response) {
					if (response.status) {

						let options = {
							separator: '',
							suffix: ' ₽'
						};

						let start = parseInt($('#price-desktop').html());
						new CountUp('price-desktop', start, response.data.price, 0, 0.3, options).start();
						new CountUp('price-mobile', start, response.data.price, 0, 0.3, options).start();

						if (response.data.discount !== null && response.data.discount > 0) {
							$('#discount-desktop').html(response.data.discount + '%');
							$('#discount-mobile').html(response.data.discount + '%');
							$('.discount').show();
						} else {
							$('.discount').hide();
						}
					}
				}
			});
		});
	})

	$('form.checkout-box').on('change', '[name="quantity"]', function () {

		var input = $(this);
		if (input.val() <= 0) {
			input.val(1);
			return false;
		}

		grecaptcha.execute('6LfJiesjAAAAACe0ZrZwCyP4SWVuQfQgvfqDZvKW', { action: 'contact' }).then(function (token) {
			if (document.getElementById('recaptchaResponse') !== null)
				document.getElementById('recaptchaResponse').value = token;
			if (document.getElementById('recaptchaResponseMobile') !== null)
				document.getElementById('recaptchaResponseMobile').value = token;

			let data = input.closest('form.checkout-box').serialize();
			$.ajax({
				url: '/api/?controller=Order&method=calculateDiscount',
				type: 'POST',
				data: data,
				async: true,
				success: function (response) {
					if (response.status) {
						let options = {
							separator: '',
							suffix: ' ₽'
						};

						let start = parseInt($('#price-desktop').html());
						new CountUp('price-desktop', start, response.data.price, 0, 0.3, options).start();
						new CountUp('price-mobile', start, response.data.price, 0, 0.3, options).start();

						if (response.data.discount !== null && response.data.discount > 0) {
							$('#discount-desktop').html(response.data.discount + '%');
							$('#discount-mobile').html(response.data.discount + '%');
							$('.discount').show();
						} else {
							$('.discount').hide();
						}

					}
				}
			});
		});
	});

});

$('.add-reviews').on('click', function (e) {
	e.preventDefault();
	$(this).addClass('disabled');
	$('.adding-review-about').fadeIn();
});

$('.answer-link').on('click', function (e) {
	e.preventDefault();
	$(this).fadeOut().parents('.reviews-box').find('.adding-review-user').fadeIn();
});

$('.btn-search').on('click', function () {
	$('.search-wrapper').addClass('active');
	$('header').addClass('active-search');
	$('.overlay-bg').fadeIn();
	$('.btn-catalog').removeClass('open').next('.dropdown-menu-catalog').slideUp(200);
});

// input search
$('.search-wrapper .form-search input').on('keyup change', function () {

	let searchQuery = $(this).val();
	if (searchQuery.length > 2) {
		$.ajax({
			url: '/api/?controller=Search&method=getData',
			type: 'POST',
			data: 'search=' + searchQuery,
			async: true,
			success: function (response) {
				if (response.data.status) {
					console.log(response.data.data)
					$('.search-wrapper').addClass('click');
					$('.search-result').html(response.data.data);
					$('.search-result').slideDown(100);
				} else {
					$('.search-result').slideUp(100);
					$('.search-result').html('');
					$('.search-wrapper').removeClass('click');
				}
			}
		});
	} else {
		$('.search-result').slideUp(100, function () {
			$('.search-result').html('');
			$('.search-wrapper').removeClass('click');
		});
	}
});

$('.checkout-box-toggle').click(function () {
	$('.checkout-box-fix').toggleClass('active');
	$('.overlay-bg').fadeToggle();
});

// drop input file
$.fileup({
	url: '/file/upload',
	inputID: 'upload-input',
	queueID: 'upload-queue',
	dropzoneID: 'upload-dropzone',
	lang: 'ru'
})
	.success(function (response, file_number, file) {
		Snarl.addNotification({
			title: 'Upload success',
			text: file.name,
			icon: '<i class="fa fa-check"></i>'
		});
	})
	.error(function (event, file, file_number) {
		Snarl.addNotification({
			title: 'Upload error',
			text: file.name,
			icon: '<i class="fa fa-times"></i>'
		});
	})
	.dragEnter(function (event) {
		$(event.target).addClass('over');
	})
	.dragLeave(function (event) {
		$(event.target).removeClass('over');
	})
	.dragEnd(function (event) {
		$(event.target).removeClass('over');
	});

