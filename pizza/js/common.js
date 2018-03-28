$(function(){

	$('.carousel-product--pizza').owlCarousel({
		//loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 30,
		stagePadding: 5,
	});

	$('.carousel-product-snacks').owlCarousel({
		//loop: true,
		nav: true,
		items: 4,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 30,
		stagePadding: 5,
	});

	$('.carousel-product-beverages').owlCarousel({
		//loop: true,
		nav: true,
		items: 3,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 30,
		stagePadding: 5,
	});

	// function onResize() {
	// 	$('.services-content').equalHeights();
	// }
	// onResize();
	// window.resize = function() {onResize()}

	$('a[href="#popup-content"]').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: true,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	function showSection(section, isAnimate) {
		var
			direction = section.replace(/#/, ''),
			reqSection = $('.section').filter('[data-section="' + direction + '"]'),
			reqSectionPos = reqSection.offset().top;

		if (isAnimate) {
			$('body, html').animate({scrollTop: reqSectionPos}, 500);
		} else {
			$('body, html').scrollTop(reqSectionPos);
		}
	};

	$('.header-link').on('click', function(e){
		e.preventDefault();
		showSection($(this).attr('href'), true);
	});

	showSection(window.location.hash, false);

	$(window).scroll(function(){
		checkSection();
	});

	function checkSection(){
		$('.section').each(function(){
			var
				$this = $(this),
				topEdge = $this.offset().top,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

			if (topEdge < wScroll && bottomEdge > wScroll) {
				var
					currentId = $this.data('section'),
					reqLink = $('.header-link').filter('[href="#' + currentId + '"]');
				reqLink.closest('.header-item').addClass('active').siblings().removeClass('active');
				window.location.hash = currentId
			}
		});
	}

});