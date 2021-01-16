/* eslint-disable no-use-before-define */
const calc = () => {
	const form = document.getElementById('card_order'),
		priceTotal = document.getElementById('price-total'),
		promoInput = form.querySelector('input[name=promo]'),
		mozaika = {
			1: 1999,
			6: 9900,
			9: 13900,
			12: 19900
		},
		schelkovo = {
			1: 2999,
			6: 14990,
			9: 21990,
			12: 24990
		};

	if (form.contains(promoInput)) {
		let timeValue = 1,
			clubValue = 'mozaika';

		form.addEventListener('click', event => {
			const target = event.target;

			if (target.closest('.time')) {
				if (target.matches('input')) {
					timeValue = target.value;
				}
			}

			if (target.closest('.club')) {
				if (target.matches('input')) {
					if (target.checked) {
						clubValue = target.value;
					}
				}
			}
			calculate(clubValue, timeValue);
		});

		const showPrice = price => {
			priceTotal.textContent = +price;
		};

		const calcPrice = price => {
			if (promoInput.value === 'ТЕЛО2020') {
				const discount = (price * 30) / 100;
				const discountedPrice = Math.floor(price - discount);
				showPrice(discountedPrice);
			} else {
				showPrice(price);
			}
		};

		const calculate = (club, time) => {
			let clubPrice = '';

			if (club === 'mozaika') {
				clubPrice = mozaika[time];
			} else {
				clubPrice = schelkovo[time];
			}

			calcPrice(clubPrice);

			promoInput.addEventListener('input', () => calcPrice(clubPrice));
		};

		calculate(clubValue, timeValue);

	}
};

export default calc;
