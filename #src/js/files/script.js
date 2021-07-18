$(function () {
	 $('.top-slider').slick({
			slidesToShow: 1,
			infinite: true,
			variableWidth: true,
			arrows: false,
			// centerMode: true,
			responsive: [
				{
					breakpoint: 1170,
					settings: {
						centerMode: true,
						variableWidth: true,
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 960,
					settings: {
						centerMode: true,
						variableWidth: true,
						slidesToShow: 1,
					},
				},

				{
					breakpoint: 375,
					settings: {
						variableWidth: true,
						// centerMode: true,
						slidesToShow: 2,
					},
				},
			],
		})

	$('.product-slider').slick({
		slidesToShow: 5,
		infinite: false,
		variableWidth: true,
		arrows: true,
		waitForAnimate: false,
		appendArrows: $('.product-slider__controls'),
		// responsive: [
		// 	{
		// 		breakpoint: 1170,
		// 		settings: {
		// 			centerMode: true,
		// 			variableWidth: true,
		// 			slidesToShow: 3,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 960,
		// 		settings: {
		// 			centerMode: true,
		// 			variableWidth: true,
		// 			slidesToShow: 3,
		// 		},
		// 	},

		// 	{
		// 		breakpoint: 321,
		// 		variableWidth: false,
		// 		settings: {
		// 			slidesToShow: 2,
		// 		},
		// 	},
		// ],
	})

	// $('.product-slider__button-prev').click(function (event) {
	// 	$('.product-slider').slick('slickPrev')
	// })

	// $('.product-slider__button-next').click(function (event) {
	// 	$('.product-slider').slick('slickNext')
	// })

	// $('.top-slider').on(
	// 	'beforeChange',
	// 	function (event, slick, currentSlide, nextSlide) {
	// 		currentSlide
	// 	}
	// )

});

	


