const servicesSlider = () => {
	const slider = document.querySelector('.services-slider'),
		services = document.getElementById('services'),
		servicesWrap = services.querySelector('.wrapper'),
		slides = services.querySelectorAll('.slide');

	const createBtns = () => {
		const btnPrev = document.createElement('div');
		const btnNext = btnPrev.cloneNode();
		btnPrev.classList.add('btn-prev');
		btnNext.classList.add('btn-next');
		servicesWrap.append(btnPrev, btnNext);
		return [btnNext, btnPrev ];
	};

	const applyStyles = () => {
		// servicesWrap.style.cssText = `
		// 	overflow: hidden;
		// 	padding-left: 0;
		// 	padding-right: 0;
		// 	max-width: 1140px;
		// 	position: relative;
		// `;
		// slider.style.cssText = `
		// 	padding-left: 0;
		// 	padding-right: 0;
		// 	transition: transform 0.3s;
		// 	will-change: transform;
		// `;
		// slides.forEach(slide => {
		// 	slide.style.cssText = `
		// 	min-width: 216px;
		// `;
		// });
		const btns = createBtns();
		btns[0].style.cssText = `
			position: absolute;
			background: #ffd11a url('./images/arrow-right.png') no-repeat center;
			width: 35px;
			height: 35px;
			z-index: 10;
			top: 58px;
			right: 0px;
			border-radius: 50%;
			cursor: pointer;
		`;

		btns[1].style.cssText = `
			position: absolute;
			background: #ffd11a url('./images/arrow-left.png') no-repeat center;
			width: 35px;
			height: 35px;
			z-index: 10;
			top: 58px;
			left: 0;
			border-radius: 50%;
			cursor: pointer;
		`;
	};

	applyStyles();

	let position = 0;
	services.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.btn-next')) {
			position++;
			console.log(position);
			slider.style.transform = `translateX(-20%)`;
		}
		if (target.matches('.btn-prev')) {
			position--;
			console.log(position);
			slider.style.transform = `translateX(0%)`;
		}
	});
};

export default servicesSlider;
