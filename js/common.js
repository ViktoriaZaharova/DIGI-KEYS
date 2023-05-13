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
	// var beforeEnd = 500;
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


// $(document).ready(function () {
// 	//ticking machine
// 	var percentTime;
// 	var tick;
// 	var time = .1;
// 	var progressBarIndex = 0;

// 	$('.progressBarContainer .progressBar').each(function (index) {
// 		var progress = "<div class='inProgress inProgress" + index + "'></div>";
// 		$(this).html(progress);
// 	});

// 	function startProgressbar() {
// 		resetProgressbar();
// 		percentTime = 0;
// 		tick = setInterval(interval, 8);
// 	}

// 	function interval() {
// 		if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
// 			progressBarIndex = $('.home-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
// 			startProgressbar();
// 		} else {
// 			percentTime += 1 / (time + 5);
// 			$('.inProgress' + progressBarIndex).css({
// 				width: percentTime + "%"
// 			});
// 			if (percentTime >= 100) {
// 				$('.home-slider').slick('slickNext');
// 				progressBarIndex++;
// 				if (progressBarIndex > 1) {
// 					progressBarIndex = 0;
// 				}
// 				startProgressbar();
// 			}
// 		}
// 	}

// 	function resetProgressbar() {
// 		$('.inProgress').css({
// 			width: 0 + '%'
// 		});
// 		clearInterval(tick);
// 	}
// 	startProgressbar();
// 	// End ticking machine

// 	$('.home-slider-nav__item').click(function () {
// 		clearInterval(tick);
// 		var goToThisIndex = $(this).find("span").data("slickIndex");
// 		$('.home-slider').slick('slickGoTo', goToThisIndex, false);
// 		startProgressbar();
// 	});
// });

// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

// footer menu toggle
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

// menu catalog
$(function () {
	$('.btn-catalog').click(function (e) {
		e.preventDefault();

		let pd = $(this).parents('.dropdown-catalog');
		$('.dropdown-catalog').not(pd).find('.btn-catalog').removeClass('open').next('.dropdown-menu-catalog').slideUp(200);
		$(this).toggleClass('open').next('.dropdown-menu-catalog').slideToggle();
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

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.nav-menu').fadeToggle();
});