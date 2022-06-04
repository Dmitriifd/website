// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import '../../libs/wNumb.min.js';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	let sliderSum = document.querySelector('#slider-sum');
	const sliderTime = document.querySelector('#slider-time');

	if (priceSlider) {

		const nonLinearStepSliderValueElement =
			document.getElementById('slider-value');

		noUiSlider.create(priceSlider, {
			start: [0, 500],
			connect: true,
			step: 300,

			range: {
				min: [0, 500],
				max: 3000,
			},
			pips: {
				mode: 'steps',
				density: -1,
				format: wNumb({
					suffix: 'м',
					decimals: 1,
					thousand: ',',
					encoder: function (value) {
						return value >= 1000 ? value / 1000 : value;
					},
				}),
			},
		});

		let lineValue = document.querySelectorAll('.noUi-value');
		lineValue[0].textContent = 0;
		lineValue[1].textContent = '500т';

		priceSlider.noUiSlider.on('update', function (values) {
			const value = values.map(function (value) {
				return Number(value).toFixed(0);
			});

			value[1] < 1000
				? (nonLinearStepSliderValueElement.innerHTML = value.join(' - ') + 'т')
				: (nonLinearStepSliderValueElement.innerHTML = value.join(' - ') + 'м');
		});
	}

	if (sliderSum) {
		

		// let sliderSumValue = document.document.querySelector('.range-slider__value');

		noUiSlider.create(sliderSum, {
			start: [0],
			connect: true,
			step: 500,

			range: {
				min: [0],
				max: 3000,
			},
			pips: {
				mode: 'steps',
				density: -1,
				format: wNumb({
					suffix: 'м',
					decimals: 1,
					thousand: ',',
					encoder: function (value) {
						return value >= 1000 ? value / 1000 : value;
					},
				}),
			},
		});

      
      

		let lineValue = document.querySelectorAll('.slider-range .noUi-value');
		lineValue[0].textContent = 0;
		lineValue[1].textContent = '500т';


		var pips = sliderSum.querySelectorAll('.noUi-value');

		function clickOnPip() {
			var value = Number(this.getAttribute('data-value'));
			sliderSum.noUiSlider.set(value);
		}

		for (var i = 0; i < pips.length; i++) {
			// For this example. Do this in CSS!
			pips[i].style.cursor = 'pointer';
			pips[i].addEventListener('click', clickOnPip);
		}
	}
	if (sliderTime) {
		noUiSlider.create(sliderTime, {
			connect: true,

			range: {
				min: 6,
				'12.5%': 12,
				'27%': 24,
				'41.5%': 36,
				'56%': 48,
				'70.5%': 60,
				'85%': 72,
				max: 84,
			},
			start: [6],
			step: 12,
			pips: { mode: 'steps' },
		});
		var pips = sliderTime.querySelectorAll('.noUi-value');

		function clickOnPip() {
			var value = Number(this.getAttribute('data-value'));
			sliderTime.noUiSlider.set(value);
		}

		for (var i = 0; i < pips.length; i++) {
			pips[i].style.cursor = 'pointer';
			pips[i].addEventListener('click', clickOnPip);
		}
	}
}
rangeInit();
