// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import '../../libs/wNumb.min.js';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');

	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');

		var nonLinearStepSliderValueElement =
			document.getElementById('slider-value');

		noUiSlider.create(priceSlider, {
			start: [0, 500],
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
                return Number(value).toFixed(0)
            })
            
            value[1] < 1000 ? nonLinearStepSliderValueElement.innerHTML = value.join(' - ') + 'т' : nonLinearStepSliderValueElement.innerHTML = value.join(' - ') + 'м';
            
			
		});

		// var skipValues = [
		// 	document.querySelector('.noUi-handle-lower'),
		// 	document.querySelector('.noUi-handle--upper'),
		// ];

		// priceSlider.noUiSlider.on('update', function (values, handle) {
		// 	skipValues[handle].innerHTML = values[handle];
		// });

		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
		// function setPriceValues() {
		// 	let priceStartValue;
		// 	let priceEndValue;
		// 	if (priceStart.value != '') {
		// 		priceStartValue = priceStart.value;
		// 	}
		// 	if (priceEnd.value != '') {
		// 		priceEndValue = priceEnd.value;
		// 	}
		// 	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		// }
	}
}
rangeInit();
