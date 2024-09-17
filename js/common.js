$('.home-slider').slick({
	slidesToShow: 1,
	swipeToSlide: true,
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
		swipeToSlide: true,
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

$('.product-image__slider').slick({
	slidesToShow: 1,
	swipeToSlide: true,
	fade: true,
	arrows: false,
	infinite: false,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				dots: true,
				// autoplay: true
			}
		}
	]
});

$('.product-image__preview').slick({
	slidesToShow: 5,
	swipeToSlide: true,
	arrows: false,
	swipeToSlide: true,
	infinite: false,
	asNavFor: '.product-image__slider',
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});

$('.product-card__img-slider').slick({
	slidesToShow: 1,
	swipeToSlide: true,
	fade: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon panel_heading-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
				nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon panel_heading-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
			}
		}
	]
});

function paginationImageMouseEnter(element, notSlickGoTo = false) {
	if (!element || !$) return
	//console.log(element)
	const index = $(element).attr('data-index');
	const parent = $(element).closest('.product-slider')
	if (!notSlickGoTo) parent.find('.product-card__img-slider').slick('slickGoTo', index, true);
	parent.find('.product-pagination-image a').removeClass('active');
	$(element).addClass('active');
}

$(function () {
	$('.product-slider').mouseleave(function () {
		$('.product-card__img-slider').slick('slickGoTo', 0);
		$(this).find('.product-pagination-image a').removeClass('active');
		$(this).find('.product-pagination-image a:first-child').addClass('active');
	});
});


$('.reviews-product-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	swipeToSlide: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true,
				autoplay: true,
				slidesToShow: 2,
				prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon panel_heading-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
				nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon panel_heading-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
			}
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				dots: true,
				autoplay: true,
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-modal-slider').slick({
	slidesToShow: 1,
	swipeToSlide: true,
	fade: true,
	asNavFor: '.gallery-photo-modal',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true,
				autoplay: true,
				slidesToShow: 1,
			}
		}
	]
});

$('.gallery-photo-modal').slick({
	slidesToShow: 1,
	swipeToSlide: true,
	asNavFor: '.reviews-modal-slider',
	arrows: false,
	focusOnSelect: true,
	variableWidth: true,
	infinite: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		}
	]
});

$('.special-position__close').click(function () {
	$(this).parents('.special-position').fadeOut();
	$('.page').addClass('close-special');
});



// slick active
$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.article-slider:not(.slick-initialized)').slick({
			slidesToShow: 1,
			// infinite: false,
			swipeToSlide: true,
			arrows: false,
			dots: true,
			variableWidth: true,
		});
	} else {
		$(".article-slider.slick-initialized").slick("unslick");
	}
});
// slick active


// $(".reviews-product-slider .reviews-product-box").each(function () {
// 	let th = $(this).find('.box-text');
// 	// let more = th.parent(".reviews-product-box").find(".show-all-text");

// 	if (th.height() > 130) {
// 		th.parent(".reviews-product-box__body").append('<a href="#" class="show-all-text">Еще</a>');
// 		// th.addClass("show-text");
// 		$(this).find(".show-all-text").click(function (e) {
// 			e.preventDefault();
// 			th.toggleClass("show-text");
// 			$(this).hide();
// 		});
// 	}


// });

// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

$('.footer-box__title-toggle').on('click', function () {
	$(this).toggleClass('click').next('.footer-menu-wrapper').toggleClass('open');
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
	$(this).fadeOut(300);
	$('.mobile-menu').css('right', '-100%');
	$('.menu .dropdown-menu').slideUp();

	$('.search-result').html('');
	$('.search-wrapper').removeClass('click');
	$('.search-result').slideUp(100);

	$('header').removeClass('active-search');
	$('.checkout-box-fix').removeClass('active');
});

$('.btn-search').on('click', function () {
	$('header').addClass('active-search');
	$('.overlay-bg').fadeIn();
	$('.btn-catalog').removeClass('open').next('.dropdown-menu-catalog').slideUp(200);
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
$("form input, form textarea").focus(function () {
	$(this).parent().addClass("focus");
}).blur(function () {
	if ($(this).val() === '') {
		$(this).parent().removeClass("focus");
	}
});

$('form input, form textarea').each(function () {
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
	$(this).hide();
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
				$('.modal__div .slick-slider').slick('setPosition');
			});

		$('body').addClass('no-scroll');
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
		$('body').removeClass('no-scroll');
	});
});
//end

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.overlay-bg').fadeIn();
	$('.mobile-menu').css('right', 0);
});

$('.mobile-menu__close').click(function () {
	$('.mobile-menu').css('right', '-100%');
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

// timer
$(".countdown-time1").countdowntimer({
	dateAndTime: "2024/08/04 00:00:00",
	displayFormat: "DHM",
	labelsFormat: true,
	// currentTime: true,
});

$(".countdown-time2").countdowntimer({
	hours : 1,
    labelsFormat: true,
    displayFormat: "HMS",
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
					$('.btn-clear-search').fadeIn(100);
				} else {
					$('.search-result').slideUp(100);
					$('.search-result').html('');
					$('.search-wrapper').removeClass('click');
					$('.btn-clear-search').fadeOut(100);
				}
			}
		});
		$('.search-wrapper').addClass('click');
		$('.search-result').html(response.data.data);
		$('.search-result').slideDown(100);
		$('.btn-clear-search').fadeIn(100);
	} else {
		$('.search-result').slideUp(100, function () {
			$('.search-result').html('');
			$('.search-wrapper').removeClass('click');
			$('.btn-clear-search').fadeOut(100);
		});
	}
});

$('.btn-clear-search').on('click', function (e) {
	e.preventDefault();
	$(this).fadeOut(100);
	$('.search-result').slideUp();
	$('.search-wrapper').removeClass('click');
	$('.search-result .form-search input').val('');
});

$('.checkout-box-toggle').click(function () {
	$('.checkout-box-fix').toggleClass('active');
	$('.overlay-bg').fadeToggle();
});


$('.btn-toggle-reviews').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.reviews-product-box:hidden').slice(0, 3).fadeIn();
	var onBlock = $(this).prev('.reviews-product-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});


$('.link-text-show').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var content = $(this).prev('.box-text');
	if (!$this.hasClass('click')) {
		$this.addClass('click');
		$this.find('span').html('Скрыть');
		content.addClass('open');
	} else {
		$this.removeClass('click');
		$this.find('span').html('Читать полностью');
		content.removeClass('open');
	}
});

$('.link-copy-acticle').on('click', function(e){
e.preventDefault();
$('.push-popup').addClass('active');
});

setTimeout(function(){
$('.push-popup').removeClass('active');
}, 3000);


// отображение подгружаемых файлов в отзыве
function handleFileSelect(evt) {

}

$(document).on('change', '#upload-input', function (evt) {
	renderPreviews();
})

function renderPreviews() {
	document.getElementById('upload-queue').innerHTML = '';

	var files = document.getElementById('upload-input').files; // FileList object
	// Loop through the FileList and render image files as thumbnails.
	for (var i = 0, f; f = files[i]; i++) {
		// Only process image files.
		if (!f.type.match('image.*')) {
			alert("Можно загрузить только изображения");
		}

		let index = i;
		var reader = new FileReader();
		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				// Render thumbnail.
				var span = document.createElement('span');
				span.setAttribute('data-position', index);
				span.setAttribute('class', 'wrap');
				span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />' +
					'					<span class="delete"> <svg class="svg-icon">\n' +
					'                        <use xlink:href="/local/templates/digikeys/img/sprite.svg#close"></use>\n' +
					'                    </svg></span>'].join('');
				document.getElementById('upload-queue').insertBefore(span, null);
			};
		})(f);
		// Read in the image file as a data URL.
		reader.readAsDataURL(f);
	}
}

// удаление подгруженных файлов из отзыва

$(document).on('click', '#upload-queue .wrap .delete', function () {
	const index = $(this).closest('.wrap').data('position');

	const dt = new DataTransfer()
	const input = document.getElementById('upload-input')
	const { files } = input

	for (let i = 0; i < files.length; i++) {
		const file = files[i]
		if (index !== i)
			dt.items.add(file) // here you exclude the file. thus removing it.
	}

	input.files = dt.files // Assign the updates list

	renderPreviews();
})


function dropHandler(ev) {

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {


		const dt = new DataTransfer()
		const input = document.getElementById('upload-input')
		const { files } = input

		for (let i = 0; i < files.length; i++) {
			const file = files[i]
			dt.items.add(file)
		}
		[...ev.dataTransfer.items].forEach((item, i) => {
			// If dropped items aren't files, reject them
			if (item.kind === "file") {
				const file = item.getAsFile();
				dt.items.add(file)
			}
		});

		input.files = dt.files // Assign the updates list
		renderPreviews();
	}
	document.getElementById('drop_zone').classList.remove("drop-zone--over");
	ev.preventDefault();

}

function dragOverHandler(ev) {
	document.getElementById('drop_zone').classList.add("drop-zone--over");
	ev.preventDefault();
}

function dragLeaveHandler(ev) {
	document.getElementById('drop_zone').classList.remove("drop-zone--over");
	ev.preventDefault();
}

function dragEndHandler(ev) {
	document.getElementById('drop_zone').classList.remove("drop-zone--over");
	ev.preventDefault();
}

// new WOW().init();