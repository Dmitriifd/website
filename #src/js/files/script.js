$(function () {
	 $('.top-slider').slick({
			slidesToShow: 3,
			infinite: false,
			variableWidth: true,
			arrows: false,
			centerMode: true,
			responsive: [
				{
					breakpoint: 1170,
					settings: {
						centerMode: true,
						variableWidth: true,
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 960,
					settings: {
						centerMode: true,
						variableWidth: true,
						slidesToShow: 3,
					},
				},

				{
					breakpoint: 321,
					variableWidth: false,
					settings: {
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


});

	


